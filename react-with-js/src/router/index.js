import React, { Suspense } from "react";
import { Route, useNavigate, useLocation, useParams, useSearchParams, Routes } from "react-router-dom";
import routes from "./routes";
/*统一渲染组件，在这里可以做一些事情【，例如：权限/登录状态校验】，传递属性*/
const Element = function (props) {
    const { component: Component } = props
    //获取路由信息，传递给基于Route渲染的组件
    const navigate = useNavigate(),
        location = useLocation(),
        params = useParams(),
        [usp] = useSearchParams();
    // if () { //条件处理
    //     ...
    // }
    //渲染Component
    return <Component navigate={navigate} location={location} params={params} usp={usp}></Component>

}
/*递归创建Route*/
const createRoute = function creaateRote(routes) {
    return <> {
        routes.map((item, idx) => {
            let { path, children } = item
            //每一次匹配路由成功，不直接渲染，而是渲染Element组件，在Element中做一些特殊处处理，例如权限校验，登录状态校验等，再去渲染
            return <Route key={idx} path={path} element={<Element {...item} />}>
                { /*基于递归方式，绑定子集路由*/}
                {Array.isArray(children) ? createRoute(children) : null}
            </Route>
        })

    }  </>
}

export default function RouterView() {
    return <Suspense fallback={<>正在加载中</>}>
        <Routes>
            {createRoute(routes)}
        </Routes>
    </Suspense>
}
/*V6版没有widthRouter,所以要创建widthRouter，在组件不在Route中的时候使用,例如导航栏*/
export const widthRouter = function widthRouter(Component) {
    return function HOC(props) {
        const navigate = useNavigate(),
            location = useLocation(),
            params = useParams(),
            [usp] = useSearchParams();
        //渲染Component
        return <Component {...props} navigate={navigate} location={location} params={params} usp={usp}></Component>

    }
}
