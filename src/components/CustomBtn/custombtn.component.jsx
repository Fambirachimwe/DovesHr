import React from 'react';
import './custombtn.styles.scss'

const CustomButton = ({children, type}) => (
    <div className="custom-btn">
        <button type={type}>{children}</button>
    </div>
);


export default CustomButton ;






