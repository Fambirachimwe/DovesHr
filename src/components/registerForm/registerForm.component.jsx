import React from 'react';

import CustomButton from  '../CustomBtn/custombtn.component';




const RegisterForm = () => (
    <div className="register">  
        <form>
            <input type="text" name="username" placeholder="Username"/>
            <input type="password" name="password" placeholder="Password"/>
            <input type="password" name="confirm_password" placeholder="Confrim Password"/>
            <input type="text" name="role" placeholder="Role"/>

            <CustomButton type={`submit`}>Register</CustomButton>
        </form>
    </div>
);


export default RegisterForm;


