import React from 'react';
import { BrowserRouter,  Route, Switch } from 'react-router-dom';

import RegisterPage from './pages/register/register.page';
import LoginPage from './pages/login/login.page';
import Homepage from './pages/homepage/hompage.page';

// import AddDepartment from './components/addDepartmentComponent/addDepartment.component';
//sidenav
// import SideBar from './components/sidenav/sidebar.component';


function App() {
  return (
    <BrowserRouter>
      <div className="App">

          <Switch>
            <Route exact path={'/register'} component={RegisterPage}></Route>
            <Route exact path={'/login'} component={LoginPage}></Route>
            <Route exact path={'/home'} component={Homepage}></Route>
            {/* <Route  path={'/add'} component={AddDepartment} ></Route> */}
          </Switch>
        
      </div>
    </BrowserRouter>

  );
}

export default App;
