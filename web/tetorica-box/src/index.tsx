import React, { Children, useContext, useState } from 'react'
import ReactDom from 'react-dom'
import { Link, BrowserRouter, Router, Route, Switch } from "react-router-dom";
import { MyHome, MyLogin } from './homepage'
import firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
(global as any).jQurey = require('jquery');


//
// initialize firebase
//

const firebaseConfig = {
    apiKey: "AIzaSyBme8G9HsEJvYoMr5zkn55GegE_o1ZF9mE",
    authDomain: "tetorica-box.firebaseapp.com",
    projectId: "tetorica-box",
    storageBucket: "tetorica-box.appspot.com",
    messagingSenderId: "9679189465",
    appId: "1:9679189465:web:ff0cf134f777abadb715c8",
    measurementId: "G-1J5QZZ3CH6"
};

firebase.initializeApp(firebaseConfig);

interface AppContextType {
    logined: boolean,
}

var AppContext = React.createContext<AppContextType>({
    logined: false
})


function MyApp(props: any) {
    // setup context
    var appContext = useContext(AppContext)

    const [user, setUser] = React.useState<firebase.User>(firebase.auth().currentUser)
    const [logined, setLogined] = React.useState<boolean>(user ? true : false)
    var appContext = React.useContext(AppContext)
    appContext.logined = logined
    firebase.auth().onAuthStateChanged((u: firebase.User) => {
        console.log("auth change " + (u ? true : false))
        appContext.logined = u ? true : false
        setUser(u)
        setLogined(u ? true : false)
    })

    return (
        <div>
            <div>
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/page'>About</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path='/page' component={MyPage} />

                        <Route path='/' component={logined ? MyHome : MyLogin} />
                    </Switch>
                </BrowserRouter>
                <br />
                <hr />
            </div>
        </div>
    )
}
function MyPage() {
    return (
        <div>MyPage 21</div>
    )
}



const rootElement = document.getElementById("root")

let el = (
    <div>
        <MyApp />
    </div>
)
ReactDom.render(el, rootElement)
