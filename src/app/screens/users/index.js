import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import HeaderComponent from "../../components/header/index";
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import styles from './styles';

import { connect } from 'react-redux';
import { addNewUser, fetchAllUsers, fetchUserById, updateUser } from '../../actions/userActions';

class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        })
    }

    render() {
        // console.log('Users value', this.props.users);
        const { classes } = this.props;
        return(
            <div>
                <HeaderComponent />
                <Paper square className={`${classes.paper} p-4 pb-1 mb-4`}>
                <div className="row">
                  <div className="col-md-6">
                    <TextField
                      id="sentence"
                      label="Sentence - Required"
                      name="sentence"
                      value={this.state.sentence}
                      onChange={this.handleChange('sentence')}
                      margin="normal"
                      fullWidth
                      multiline
                      rowsMax="10"
                      type="text"
                      autoFocus
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      id="context"
                      label="Context - Required"
                      name="context"
                      value={this.state.context}
                      onChange={this.handleChange('context')}
                      margin="normal"
                      fullWidth
                      multiline
                      rowsMax="10"
                      type="text"
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      id="entities"
                      label="Entities"
                      name="entities"
                      value={this.state.entities}
                      onChange={this.handleChange('entities')}
                      margin="normal"
                      fullWidth
                      multiline
                      rowsMax="10"
                      type="text"
                    />
                  </div>
                  <div className="col-md-6">
                    <TextField
                      id="iob"
                      label="IOB Format - Required"
                      name="iob"
                      value={this.state.iob}
                      onChange={this.handleChange('iob')}
                      margin="normal"
                      fullWidth
                      multiline
                      rowsMax="10"
                      type="text"
                    />
                  </div>
                </div>
                <div className="col-md-12">
                <br/><br/><br/></div>
                </Paper>
            </div>
        )
    }
}

Users.propTypes = {
    fetchAllUsers: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    users: state.userState.users
})

export default connect(mapStateToProps, { addNewUser, fetchAllUsers, fetchUserById, updateUser })(withStyles(styles)(Users));
