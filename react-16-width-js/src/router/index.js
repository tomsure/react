import React, { Suspense } from "react";
import { HashRouter, Switch, Redirect, Route } from "react-router-dom";
// 调用组件的时候，路由表通过属性传递进来，根据这个路由表，可以动态的进行路由匹配设置
const RouterView = function RouterView(props) {
    let { routes } = props;
    return <Switch>
        {
            routes.map((item, idx) => {
                let { redirect, from, to, exact, path, component: Component, name, meta, children } = item
                let config = {}
                if (redirect) {
                    let config = { to } //一定有的就直接写这里
                    if (exact) config.exact = true //不一定的则判断
                    if (from) config.from = from
                    return <Redirect key={idx} to={to} {...config}></Redirect>
                }
                config = { path } //设置一个可选对象，用于扩展Routes 的选项，例如path,component，//一定有的就直接写这里
                if (exact) config.exact = true
                return <Route key={idx} {...config} render={
                    (props1) => { //component 属性用render来处理，可以做其他一些事情，例如权限，导航守卫等等
                        return <Suspense fallback={<div>'正在加载中'</div>}>
                            <Component  ></Component>
                        </Suspense>

                    }
                }></Route>
            })
        }
    </Switch>
}
export default RouterView
