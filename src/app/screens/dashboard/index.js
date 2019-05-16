import React, { Component } from "react";
import HeaderComponent from "../../components/header/index";
import styles from './styles';

// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { fetchTrainingData } from '../../actions/trainingDataActions';

class Dashboard extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    componentDidMount() {
        // this.props.fetchTrainingData();
    }

    render() {
        return(
            <div>
                <HeaderComponent />
                <div style={styles.textDiv}>
                    <h1>You are in Dashboard component</h1>
                </div>
            </div>
        )
    }
}

// TrainingData.propTypes = {
//     fetchTrainingData: PropTypes.func.isRequired,
//     trainingData: PropTypes.array.isRequired
// }

// const mapStateToProps = state => ({
//     trainingData: state.training.trainingItems
// })

// export default connect(mapStateToProps, { fetchTrainingData })(Dashboard);
export default Dashboard;
