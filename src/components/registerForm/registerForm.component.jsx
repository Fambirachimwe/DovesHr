import React from 'react';
import './registerForm.styles.scss';
import CustomButton from '../CustomBtn/custombtn.component';




const RegisterForm = () => (
    <div className="register">

        <div className="image-container">
            <p> image  here</p>
        </div>

      
        

        <div className="row ">
            <form className="col s12 form-container">
                <div className="row inputs" >
                    
                    <div className="input-field col s12">
                        <input type="email" name="text" placeholder="Username" autoComplete="new-username" />

                    </div>

                    <div className="input-field col s12">
                        <input type="password" name="password" placeholder="password" autoComplete="new-password" />

                    </div>

                    <div className="input-field col s12">
                        <input type="password" name="confirmPassword" placeholder="Confirm Password" autoComplete="confirm-password" />

                    </div>

                    <CustomButton type="submit">Create account</CustomButton>
                </div>
            </form>
        </div>

    </div>


);


export default RegisterForm;


