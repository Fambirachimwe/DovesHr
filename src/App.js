import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import RegisterPage from './pages/register/register.page';
import LoginPage from './pages/login/login.page';
import Homepage from './pages/homepage/hompage.page';

//sidenav

import SideBar from './components/sidenav/sidebar.component';





function App() {
  return (
     <BrowserRouter>
     <div className="App">

      
     
<SideBar />
<Route path={'/register'} component={RegisterPage}></Route>
<Route path={'/login'} component={LoginPage}></Route>
<Route exact path={'/home'} component={Homepage}></Route>



</div></BrowserRouter>
 
  );
}

export default App;
