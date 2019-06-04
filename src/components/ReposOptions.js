import React from 'react';
//import { Repos } from 'jest-changed-files/build/types';

class ReposOptions extends React.Component {
    render() {
        return (
            <div>
                <p>
                    <a href="/facebook">Facebook</a><br/>
                    <a href="/google">Google</a><br/>
                    <a href="/microsoft">Microsoft</a>
                </p>
            </div>    
        )
    }    
}

export default ReposOptions;