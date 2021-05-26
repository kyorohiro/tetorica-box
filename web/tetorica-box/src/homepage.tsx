import React from 'react'

import firebase from 'firebase';

function MyHome() {
    var [email, setEmail] = React.useState("")
    var [pass, setPass] = React.useState("")


    const doClick = async function () {
        console.log('click')
        
        try {
            firebase.auth().signOut()
        } catch (error) {
            console.log(error)
        }

    }

    return (
        <div>
            <h1>MyHome1</h1>
            <input type="button" value="Loout" onClick={doClick}></input>
            <h1>Upload File</h1>
            <form>
                <input type="file"></input>
            </form>
        </div>
    )
}

function MyLogin() {
    var [email, setEmail] = React.useState("")
    var [pass, setPass] = React.useState("")


    const doClick = async function () {
        console.log('click')
        
        try {
            var userCredential: firebase.auth.UserCredential = await firebase.auth().signInWithEmailAndPassword(email, pass)
            console.log(userCredential)
        } catch (error) {
            console.log(error)
        }

    }

    const doChangeEmail = function (props: React.FormEvent<HTMLInputElement>) {
        console.log(props.currentTarget.value)
        setEmail(props.currentTarget.value)
    }

    const doChangePass = function (props: React.FormEvent<HTMLInputElement>) {
        console.log(props.currentTarget.value)
        setPass(props.currentTarget.value)
    }

    return (
        <div>
            <h1>MyLogin</h1>
            <div>{email},{pass}</div>
            <input type="text" placeholder="Email" onChange={doChangeEmail}></input>
            <input type="password" placeholder="Password" onChange={doChangePass}></input>
            <input type="button" value="Login" onClick={doClick}></input>
        </div>
    )
}
export {MyHome, MyLogin}

/*
           <input type="text" > </input>
           */