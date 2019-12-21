import React, { Component } from 'react';

// Components
    import FormInput from '../form-input/form-input.component';
    import CustomButtom from '../custom-button/custom-button.component';

// Stylings
    import './sign-in.styles.scss';

// Firebase
    import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
    
    constructor(props) {

        super(props);

        this.state = {

            email: '',
            password: ''
        };
    };

    handleSubmit = async event => {

        event.preventDefault();
        
        const { email, password } = this.state;

        try {

            await auth.signInWithEmailAndPassword( email, password );

            this.setState({
                email: '',
                password: ''
            });

        } catch( error ) {

            console.error( error );
        };

    };

    handleChange = event => {

        const { name, value } = event.target;

        this.setState({

            [name]: value
        });
    };

    render() {
        
        return (
            <div className="sign-in">
                <h2>
                    I already have an account.
                </h2>
                <span>
                    Sign in with your email and password.
                </span>
                
                <form onSubmit={ this.handelSubmit }>
                    <FormInput   
                        name="email"
                        onChange={ this.handleChange }
                        value={this.state.email}
                        required
                        label="Email"
                    />
                    
                    <FormInput 
                        name="password"
                        onChange={ this.handleChange }
                        type="password"
                        value={ this.state.password }
                        required
                        label="Password"
                    />
                    <div className="buttons">

                        <CustomButtom
                            type="submit">

                            Sign In
                        </CustomButtom>
                        <CustomButtom isGoogleSignIn={ true } onClick={ signInWithGoogle }>

                            Sign In With Google
                        </CustomButtom>
                    </div>
                </form>
            </div>
        );
    };
};

export default SignIn;

