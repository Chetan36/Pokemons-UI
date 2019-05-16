import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import LoginCard from "./components/logincard";
import "./styles.css";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    loginUser = (loginId, password) => {
        this.props.history.push('/dashboard')
    }

    render() {
        return(
            <div align="center" style={{marginTop: 100}}>
                <LoginCard login={this.loginUser} />
            </div>
        )
    }
}

export default withRouter(Login);
