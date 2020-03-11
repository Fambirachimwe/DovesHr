import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import RegisterPage from './pages/register/register.page';
import LoginPage from './pages/login/login.page';


function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Route path={'/register'} component={RegisterPage}></Route>
        <Route path={'/login'} component={LoginPage}></Route>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
