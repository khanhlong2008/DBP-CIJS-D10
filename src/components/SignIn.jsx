import { Component } from "react";
import "./../assets/styleSheets/SignIn.css"
class SignIn extends Component{
    constructor(props){
        super(props)
        this.state = {
            username:null
        }
        this.state = {
            password:null
        }
    }
    handleUsername = (event) => {
        let username = event.target.value
        this.setState({
            username:username
        })
    }
    handlePassword = (event) => {
        let password = event.target.value
        this.setState({
            password:password
        })
    }
    handleSignIn =() => {
        let username = localStorage.getItem("username")
        let password = localStorage.getItem("password")
        let name = localStorage.getItem("name") || "Long60@"
        if(username === this.state.username & password === this.state.password) {
            alert(`Welcome back , ${name} ` )
        }
        else {
            alert(`Sign in infomation is wrong`)
        }
    }
    handleEnter= (event)=>{
        if (event.key === "Enter"){
            this.handleSignIn()
        }
    }
    render() {
        localStorage.setItem("username","admin1234")
        localStorage.setItem("password","admin4321")
        // console.log(this.state.username)
        // console.log(this.state.password)
        return (
            <form className="signin-cont" >
            <div className="signin-comp title">
                <h1>Sign In</h1>
                <small>Please sign in for better experience</small>
            </div>
            <div className="signin-comp">
                <label htmlFor="">Username</label>
                <input type="text" name="" id="username"  placeholder="Enter your username or email" onInput = {this.handleUsername} onKeyDown = {this.handleEnter} />
            </div>
            <div className="signin-comp">
                <label htmlFor="">Password</label>
                <input type="password" name="" id="password"  placeholder="Enter your password" onInput = {this.handlePassword} onKeyDown = {this.handleEnter}/>
            </div>
            <div className="signin-comp opt ">
                {/* <a href="/forgot" >Forgot Password?</a> */}
                {/* <Link path="/signup"> */}
                    <p>Sign Up</p>
                {/* </Link> */}
            </div>
            <div className="signin-comp">
                <input type="button" value="Sign In" onClick={this.handleSignIn} />
            </div>
        </form >
        )
    }
}

export {
    SignIn
}