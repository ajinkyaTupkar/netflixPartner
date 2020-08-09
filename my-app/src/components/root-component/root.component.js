import React from 'react';
import './root.component.css';
import logo from '../../Netflix_Logo_RGB.png'

class RootComponent extends React.Component {

    constructor(props) {
        super(props);   
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                     Find your fellow binge watchers here
                    </p>
                    <p>
                        We understand Netflix subscription can be expensive for a single user, so let's find someone to share the burden
                    </p>

                    <a
                    className="App-link"
                    href="/form"
                    >
                    Find partners
                    </a>
                </header>
            </div>
            
        );
    }

}

export default RootComponent;