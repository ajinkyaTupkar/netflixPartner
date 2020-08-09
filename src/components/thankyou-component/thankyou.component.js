import React from 'react';
import './thankyou.component.css'

class ThankyouComponent extends React.Component {
    
    handleFindPartnersClick = () => {
        console.log("clicked");
    }

    render() {

        return (
            <div className="App">
            <header className="App-header">
                
                <p>
                 Thank you for registering with us. You will receive an email as soon as we find the matching partners.
                </p>
                
                <a
                className="App-link"
                href="/"
                >
                Home
                </a>
            </header>
        </div>
        )
         
    }

}

export default ThankyouComponent;