import React, { Component } from "react";
import PropTypes from 'prop-types';
import HeaderComponent from "../../components/header/index";
import styles from './styles';

import { connect } from 'react-redux';
import { fetchAllItems } from '../../actions/itemActions';

class Items extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchAllItems();
    }

    render() {
        console.log('Items value', this.props.items);
        return(
            <div>
                <HeaderComponent />
                <div style={styles.textDiv}>
                    <h1>You are in Items component</h1>
                </div>
            </div>
        )
    }
}

Items.propTypes = {
    fetchAllItems: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    items: state.itemState.items
})

export default connect(mapStateToProps, { fetchAllItems })(Items);
