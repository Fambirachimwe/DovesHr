import React from 'react';
import CustomButton from '../CustomBtn/custombtn.component';



        

const LoginForm = () => (
    <div className="login">
        <form>
            <input type="text" name="username" placeholder="Username"/>
            <input type="password" name="password" placeholder="Password"/>

            <CustomButton type={`submit`}> Login </CustomButton>
 
        </form>
    </div>
);



export default LoginForm;

