import React from 'react'  
import { Route, BrowserRouter as Router, /* Link, */ Switch, Redirect } from 'react-router-dom'  

// 引入所有基础配置
//import '../config/globalConfig'
  
import Index from '../page/home' 
import Blog from '../page/blog' 
import Doc from '../page/doc' 
import NoMatch from '../page/nomatch'

export default class RouteMap extends React.Component {  
    updateHandle () {  
        console.log('每次router变化之后都会触发')  
    }  
    render () {  
        return (  
            <Router>
                <div>
                    <p>(routerpage)</p>
                    <Switch>
                        <Route path='/' exact component={Index}></Route>
                        <Route path='/index' component={Index}></Route>
                        <Route path='/home' component={Index}></Route>
                        <Route path='/blog' component={Blog}></Route>
                        <Route path='/doc' component={Doc}></Route>
                        <Redirect from="/i" to="/"/>
                        <Redirect from="/b" to="/blog"/>
                        <Redirect from="/d" to="/doc"/>
                        <Route component={NoMatch}></Route>
                    </Switch>
                </div>
            </Router>  
        )  
    }  
}  
