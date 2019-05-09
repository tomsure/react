import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class RouterApi extends React.Component {
    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>视频</th>
                            <th>网页</th>
                            <th>教程</th>
                        </tr>

                    </thead>
                    <tbody>
                        <tr>
                            <td>1.1</td>
                            <td>1.2</td>
                            <td>1.3</td>
                        </tr>
                        <tr>
                            <td>2.1</td>
                            <td>2.2</td>
                            <td>2.3</td>
                        </tr>
                        <tr>
                            <td>3.1</td>
                            <td>3.2</td>
                            <td>3.3</td>
                        </tr>
                    </tbody>
                </table>

            </div >
        )
    }
}


export default RouterApi