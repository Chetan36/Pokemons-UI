import React, { Component } from "react";
import styles from "./styles";

class ErrorScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return(
            <div style={styles.textDiv}>
                <h1>404 Error: Path does not exist</h1>
            </div>
        )
    }
}

export default ErrorScreen;
