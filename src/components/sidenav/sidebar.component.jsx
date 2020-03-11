import React from 'react';
import {Link} from 'react-router-dom';
import './sidebar.styles.scss';

const SideBar = () => (
    
    <div className="sidebar">
        <div className="colletions">
            <ul>
                {/* <Router> */}
                    <li> <Link to={'#'}> <i className="material-icons">home</i> Home </Link>  </li>
                    <li> <Link to={'#'}> <i className="material-icons">add_circle_outline</i>  Add Department </Link> </li>
                    <li> <Link to={'#'}><i className="material-icons">settings</i>  Settings </Link>  </li>
                {/* </Router> */}
                
            </ul>
        </div>
    </div>
);


export default SideBar;




