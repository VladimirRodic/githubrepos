import React from 'react';
import { connect } from 'react-redux';
import { updateRepositories, showRepoDetails } from '../actions'

class ReposList extends React.Component{
    componentDidMount(){
        // I get this name from App.js file <Route path="/:name" component = { ReposList } />
        this.props.updateRepositories(this.props.match.params.name);
    }
    
    showRepoDetails = (repo) => {
        this.props.showRepoDetails(repo);
    }

    render(){
        console.log(this.props.repositories);
        return (
            this.props.repositories &&
                this.props.repositories.map(repo => {
                    return (
                        <div key={repo.id} onClick={() => this.showRepoDetails(repo)}>
                            {repo.name}
                        </div>
                    )
                })
        )
    }
}

const mapStateToProps = (state) => {
    return {
        repositories: state.repositories,
        repository: state.repository
    };
}

export default connect(
    mapStateToProps, 
    { updateRepositories, showRepoDetails }
)(ReposList);