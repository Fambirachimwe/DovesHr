import React from 'react';
import './homepage.styles.scss';

import {Route} from 'react-router-dom';



import SideBar from '../../components/sidenav/sidebar.component';
import CardRow from '../../components/homepageComponents/homepage.componet';



const Homepage = () => (
    <div className="homepage">

        
        <div className="side">
            <SideBar />
        </div>

        <div className="contents-container">
            <Route exact  path={'/home'} component={CardRow} />
        </div>
        

    
        
    </div>
);



export default Homepage;

