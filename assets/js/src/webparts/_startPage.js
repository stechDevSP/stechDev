import React from 'react';
import ReactDOM from 'react-dom';

export class StartPage extends React.Component {
    
    render() {
        return (
            <div className="col-md-12 welcome-component welcome-zone">
                    <div className="animated bouncein welcomeTo">Welcome to </div>
                    <div className="animated fadeindown welcomeToName">ST Solutions</div>
                    <div className="animated slideinleft welcomeToDescr">test descr</div>
                    <div className="animated fadeindown btn-welcome continue-select">Register</div>
                    <div className="animated fadeindown btn-welcome login-select">Login</div>
                </div>
        );
    }
}
