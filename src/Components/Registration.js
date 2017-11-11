import React, {Component} from 'react'
import '../CSS/Registration.css'
import {Checkbox, CheckboxGroup} from 'react-checkbox-group'
import {Switch, HashRouter, Route, Link} from 'react-router-dom'

class Registration extends Component{

    constructor(props){
        super(props);
        this.state = {

            name :'',
            surname: '',
            email : '',
            password : '',
            fruits: ['',''],
            accept: [''],
            person: ['']
        }
    }


    validateForm() {
        return this.state.email.length > 0 && this.state.password.length > 0 && this.state.surname.length>0 && this.state.name.length>0;
    }

    signUp()
    {
        console.log('this.state',this.state);
        window.location='/login'
    }

    fruitsChanged = (newFruits) => {
        this.setState({
            fruits: newFruits
        });
    }

    acceptChange = (newChange) => {
        this.setState({
            accept: newChange

        });


    }


    personChange = (newPerson) => {
        this.setState({
            accept: newPerson

        });


    }

    render(){
        return(
            <div className="form-inline">
                <h2> <center>Sign up</center></h2>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                <div className="form-group">

                    <input
                        id = 'name'
                        classname="form-control"
                        type = "text"
                        placeholder="name"
                        onChange={event => this.setState({name : event.target.value})}
                    />
                    <br/>
                    <input
                        id = 'surname'
                        classname="form-control"
                        type = "text"
                        placeholder="surname"
                        onChange={event => this.setState({surname : event.target.value})}
                    />
                    <br/>
                <input
                id = 'email'
                classname="form-control"
                type = "text"
                placeholder="email"
                onChange={event => this.setState({email : event.target.value})}
                />
                    <br/>
                    <input
                    id = 'password'
                    className="form-control"
                    type = "password"
                    placeholder = "password"
                    onChange={event => this.setState({password : event.target.value})}

                    />
                    <br/>
                    <p> Please check the programming languages you know : </p>
                    <CheckboxGroup
                        id ='myCheckbox'
                        name="fruits"
                        value={this.state.fruits}
                        onChange={this.fruitsChanged}>

                        <div><label><Checkbox value="C"/> C</label></div>
                        <div><label><Checkbox value="Java"/> Java</label></div>
                        <div><label><Checkbox value="Python"/> Python</label></div>
                        <div><label><Checkbox value="JavaScript"/> JavaScript</label></div>
                    </CheckboxGroup>

                    <p> Please state if you are a student or Staff </p>
                    <CheckboxGroup
                        id ='myCheckbox'
                        name="person"
                        value={this.state.person}
                        onChange={this.personChange}>

                        <div><label><Checkbox value="Student"/> Student</label></div>
                        <div><label><Checkbox value="Staff"/> Staff</label></div>

                    </CheckboxGroup>


                    <p> In order to be able to use our service, plase accept the terms and coditions.</p>
                    <CheckboxGroup
                        id ='myCheckbox'
                        name="accept"
                        value={this.state.accept}
                        onChange={this.acceptChange}>

                        <label><Checkbox value="accept "/>I accept</label>
                    </CheckboxGroup>
                    <br/>

                    <Link to="/login" style={{textDecoration: 'none'}}>
                    <button classname = "btn btn-primary"
                               id = 'thebutton'
                               type = "button"
                               disabled={!this.validateForm()}
                               >
                        Sign up
                    </button>
                    </Link>


                </div>
            </div>
            </div>
        )
    }

}

export default Registration;
