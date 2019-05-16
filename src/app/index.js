import React, { Component } from "react";
import { Provider } from 'react-redux';
import './styles.css'
import Screens from './screens/index';

import store from './store/index';

class MainApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        return (
            <Provider store={store}>
                <Screens />
            </Provider>
        )
    }
}

export default MainApp;
