import React from 'react';
import './homepage.styles.scss';

import { Route, Switch, BrowserRouter } from 'react-router-dom';




import SideBar from '../../components/sidenav/sidebar.component';
import CardRow from '../../components/homepageComponents/homepage.componet';
import AddDepartment from '../../components/addDepartmentComponent/addDepartment.component';


const Homepage = () => (
    <BrowserRouter>
        <div className="homepage">

            <div className="side">
                <SideBar />
            </div>

            <div className="contents-container">
                <Switch>

                    <Route exact path={'/home'} component={CardRow} />
                    <Route exact path={'/add'} component={AddDepartment} />

                </Switch>
               

            </div>

        </div>

    </BrowserRouter>

);



export default Homepage;

