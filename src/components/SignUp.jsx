import { Component } from "react";
import "./../assets/styleSheets/SignUp.css"

class SignUp extends Component {
    constructor(props) {
        super(props)
        // tạo model ngay trong contructor 
        // chỉ ở constructor mới có quyền gán (khởi tạo, gán state)
        // this.state = {
        //     text:this.props.text
        // }
        this.state = {
            Email: null,
        }
    }
    handleEmail = (event) =>{
        let Email = event.target.value
        this.setState({
            Email:Email
        })
    }
    render() {

        return (
            <form className="signup-cont" >
                <div className="signup-comp title">
                    <h1>Sign Up</h1>
                    <small>Create an account for free </small>
                    {/* <p>{this.state.Email}</p> */}
                </div>
                <div className="signup-comp">
                    <label htmlFor="">Email</label>
                    <input type="email" name="" id="email" placeholder="Enter your email" required onInput = { this.handleInput } />
                </div>
                <div className="signup-comp">
                    <label htmlFor="">Name</label>
                    <input type="text" name="" id="name" placeholder="Enter your name" required />
                </div>
                <div className="signup-comp">
                    <label htmlFor="">Username</label>
                    <input type="text" name="" id="username" placeholder="Enter your username" required />
                </div>
                <div className="signup-comp">
                    <label htmlFor="">Password</label>
                    <input type="password" name="" id="password" placeholder="Enter your password" required />
                </div>
                <div className="signup-comp">
                    <label htmlFor="">Re-type password</label>
                    <input type="password" name="" id="avatar" placeholder="Re-type your password" required />
                </div>
                <div className="signup-comp opt ">
                    <div >
                        <input type="checkbox" checked={true} />
                        <label htmlFor="">I agree for the terms and conditions</label>
                    </div>
                    {/* <Link path="/signin"> */}
                    <p>
                        Sign In
                    </p>
                    {/* </Link> */}
                </div>
                <div className="signup-comp">
                    <input type="button" value="Sign Up" onClick={this.handleSubmit} />
                </div>
            </form >

        )
    }
}

export {
    SignUp
}