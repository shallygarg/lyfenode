import React from "react";
import "./updates.css";

class Updates extends React.Component {
    state = {
        first_name: "",
        last_name: "",
        email_address: ""
    };
    
    handleFormInput = (event) => {
        const {name, value} = event.target;
        this.setState({
            [name]: value
        });
    };
    
    handleFormSubmit = (event) => {
        event.preventDefault();
    };
        
    
    render() {
        return (
            <div id="updates">
                <form name="application">
                    <fieldset>
                        <h6> Updates Needed </h6>
                        <div id="question">
                            <label>How many hours did you workout last week? </label>
                            <input onChange={this.handleFormInput} name="first_name" placeholder="3" value={this.state.first_name} />
                        </div>
                        <div id="question">
                            <label>What is your weight this week? </label>
                            <input onChange={this.handleFormInput} name="last_name" placeholder="175" value={this.state.last_name} />
                        </div>
                        <div id="question">
                            <label>How many drinks did you have last week? </label>
                            <input onChange={this.handleFormInput} name="email_address" placeholder="8" value={this.state.email_address} />
                        </div>
                        <div id="question">
                            <label>Did you sleep well last night? </label>
                            <input onChange={this.handleFormInput} name="first_name" placeholder="Yes" value={this.state.first_name} />
                        </div>
                        <div id="question">
                            <label>How many hours did you sleep last night? </label>
                            <input onChange={this.handleFormInput} name="last_name" placeholder="8" value={this.state.last_name} />
                        </div>
                    </fieldset>
                    <button className="submit" onClick={this.handleFormSubmit}>Submit</button>
                </form>
            </div>
        );
    };
};


export default Updates;