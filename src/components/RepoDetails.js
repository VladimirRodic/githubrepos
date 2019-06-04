import React from 'react';
import { connect } from 'react-redux';
import { updateRepositories, showRepoDetails } from '../actions'

class RepoDetails extends React.Component{

    render(){
        return (
            <div>
                <div>Name: { this.props.repository.name }</div>
                <div>URL: { this.props.repository.html_url }</div>
                <div>Stars: { this.props.repository.stargazers_count }</div>
            </div>    
        );
    }
}

const mapStateToProps = (state) => {
    return {repository: state.repository};
}

export default connect(
    mapStateToProps, 
    { updateRepositories, showRepoDetails }
)(RepoDetails);