import React from 'react';
import './loginForm.styles.scss';
import CustomButton from '../CustomBtn/custombtn.component';



        

const LoginForm = () => (
    <div className="login">
    <div className="image-container">
            <p> image  here</p>
        </div>

    

        <div className="row">
            <form className="col s12 form-container">
                <div className="row inputs">
                    <div className="input-field col s12">
                        <input type="text" name="username" placeholder="Username" autoComplete="new-username" />

                    </div>

                    <div className="input-field col s12">
                        <input type="password" name="password" placeholder="password" autoComplete="new-password" />

                    </div>

                    <CustomButton type="submit">Login</CustomButton>

                </div>
            </form>
        </div>
    </div>
);





export default LoginForm;

