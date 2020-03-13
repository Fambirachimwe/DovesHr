import React from 'react';
import {Link} from 'react-router-dom';
import './sidebar.styles.scss';

const SideBar = () => (
    
    <div className="sidebar">
        <div className="colletions">
            <ul>
                {/* <Router> */}
                    {/* <li> <Link to={'/home'}> <i className="material-icons">home</i> Home </Link>  </li> */}

                    <Link to={'/home'}>  <i className="material-icons">home</i> Home </Link>
                    


                    <Link to={'/add'}> <i className="material-icons">add_circle_outline</i>  Add Department </Link> 
                    <Link to={'#'}><i className="material-icons">settings</i>  Settings </Link>  
                {/* </Router> */}
                
            </ul>
        </div>
    </div>
);


export default SideBar;




