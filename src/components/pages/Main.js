import React from 'react'
import {Switch,Route} from "react-router-dom";
import Profile from './Profile';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Home from './Home';

class Main extends React.Component {
    render(){
        return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/profile" component={Profile}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/portfolio" component={Portfolio}/>
            </Switch>
        )
    }
}

export default Main;