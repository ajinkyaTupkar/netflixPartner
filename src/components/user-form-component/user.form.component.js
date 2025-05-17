import React from 'react';
import './user.form.component.css';
import Select from 'react-select';
import countryList from 'react-select-country-list';
import { Tooltip as ReactTooltip } from 'react-tooltip';


class UserFormComponent extends React.Component {

    constructor(props) {
        super(props);
        this.countries = countryList().getData();
        this.genders = [
            {value : 'M', label : 'Male'},
            {value : 'F', label : 'Female'},
            {value : 'Other', label : 'Other'}
        ]

        this.partnerGenders = [
            {value : 'M', label : 'Male'},
            {value : 'F', label : 'Female'},
            {value : 'Other', label : 'Other'},
            {value : 'All', label : 'All'}
        ]

        this.screens = [
            {value : 1, label : '1'},
            {value : 2, label : '2'},
            {value : 4, label : '4'}
        ]

        this.partners = [
            {value : 1, label : '1'},
            {value : 2, label : '2'},
            {value : 3, label : '3'},
            {value : 4, label : '4'},
            {value : 5, label : '5'},
            {value : 6, label : '6'}
        ]
        this.state = {
            name: '',
            emailId: '',
            country: '',
            gender: '',
            genderPreference: '',
            partnersNeeded: '',
            screenPreference: ''
        }

        
    }
    

    handleNameChange = (event) => {
        this.setState({name: event.target.value});
    }

    handleEmailIdChange = (event) => {
        this.setState({emailId: event.target.value});
    }

    handleCountryChange = (value) => {
        console.log(value);
        this.setState({country: value});
    }

    handleGenderChange = (value) => {
        console.log(value);
        this.setState({gender: value});
    }

    handleGenderPreferenceChange = (value) => {
        this.setState({genderPreference: value});
    }

    handleNumPartnersChange = (value) => {
        this.setState({partnersNeeded: value});
    }

    handleScreenPreferenceChange = (value) => {
        this.setState({screenPreference: value});
    }

    validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }


    handleSubmit = (event) =>  {
        event.preventDefault();
        let errors = [];
        const  { 
         name,
         emailId,
         country,
         gender,
         genderPreference,
         partnersNeeded,
         screenPreference
        } = this.state;
        
        if (!name || name.length <=0) {
            errors.push("Invalid name provided");
        }

        if (!emailId || emailId.length <=0 || !this.validateEmail(emailId) ) {
            errors.push("Invalid email provided");
        }

        if (!country || country.length <=0) {
            errors.push("Invalid country provided");
        }

        if (!gender || gender.length <=0) {
            errors.push("Invalid gender provided");
        }

        if (!genderPreference || genderPreference.length <=0) {
            errors.push("Invalid gender preference provided");
        }
        if (partnersNeeded <=0) {
            errors.push("Invalid number partners provided");
        }
        
        if (screenPreference <= 0) {
            errors.push("Invalid number of screens provided");
        
        }

        if (errors.length > 0) {
            window.alert("Invalid data provided. Errors : ", errors);
            return;
        }

        const axios = require('axios');

        axios.post('https://17oxpj0ks7.execute-api.us-east-1.amazonaws.com/v1', { 
            'name' : name,
            'emailId' : emailId,
            'gender' : gender.value,
            'genderPreference' : genderPreference.value,
            'partnersNeeded' : partnersNeeded.value,
            'country' : country.label,
            'screenPreference' : screenPreference.value
            
        }).then((resp) => {
            this.props.history.push('/thankyou')
        }).catch((error) => {
            window.alert("Unexected Error, ", error);
        })
    }

    render() {

        const formSelectStyles = {
            option: (provided, state) => ({
              ...provided,
              borderBottom: '1px dotted pink',
              color: state.isSelected ? 'red' : 'blue',
              padding: 20,
            }),
            control: () => ({
              // none of react-select's styles are passed to <Control />
              width: 200,
            }),
            singleValue: (provided, state) => {
              const opacity = state.isDisabled ? 0.5 : 1;
              const transition = 'opacity 300ms';
          
              return { ...provided, opacity, transition };
            }
          }
        return (
            <div className="form">
                Please provide the below details <br/><br/>
                <form onSubmit={this.handleSubmit} className="userForm">
                    <div className="formDiv">  
                        <label className="formLabel">
                            Your Nickname:
                            <input type="text" value={this.state.name} onChange={this.handleNameChange} className='formTextInput' />
                        </label>
                    </div>
                    <div className="formDiv">  
                        <label className="formLabel">
                            Your Email ID:
                            <input type="text" value={this.state.emailId} onChange={this.handleEmailIdChange} className='formTextInput' data-tip data-for="emailTooltip" />
                            <ReactTooltip id="emailTooltip" place="right" effect="solid">
                                We need this to inform you whenver we have a matching available. This is the only information that will be shared with anyone.
                            </ReactTooltip>
                            
                        </label>
                    </div>
                    <div className="formDiv">  
                        <label className="formLabel">
                            Your Country:
                            <Select
                                options={this.countries}
                                value={this.state.country}
                                onChange={this.handleCountryChange}
                                classNamePrefix="formSelect"
                            />
                        </label>
                    </div>
                    <div className="formDiv">  
                        <label className="formLabel">
                            Your Gender:
                                <Select
                                    options={this.genders}
                                    value={this.state.gender}
                                    onChange={this.handleGenderChange}
                                />
                        </label>
                    </div>
                    <div className="formDiv">  
                        <label className="formLabel">
                            Preferred Gender of Partners:
                            <Select
                                options={this.partnerGenders}
                                value={this.state.genderPreference}
                                onChange={this.handleGenderPreferenceChange}
                            />
                        </label>
                    </div>
                    <div className="formDiv">  
                        <label className="formLabel">
                            Preferred Number of Screens:
                            <Select
                                options={this.screens}
                                value={this.state.screenPreference}
                                onChange={this.handleScreenPreferenceChange}
                            />
                        </label>
                    </div>
                    <div className="formDiv">  
                        <label className="formLabel">
                            Preferred Number of Partners:
                            <Select
                                options={this.partners}
                                value={this.state.partnersNeeded}
                                onChange={this.handleNumPartnersChange}
                            />
                        </label>
                    </div>
                    <input type="submit" value="Submit" className="formBtn" />
                </form>
            </div>
            
        );
    }

}

export default UserFormComponent;