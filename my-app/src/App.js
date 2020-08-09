import React from 'react';
import {
  Route,
  BrowserRouter
} from "react-router-dom";
import './App.css';
import RootComponent from './components/root-component/root.component';
import UserFormComponent from './components/user-form-component/user.form.component';
import ThankyouComponent from "./components/thankyou-component/thankyou.component";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Route exact path="/" component={RootComponent}/>
        <Route path="/form" component={UserFormComponent}/>
        <Route path="/thankyou" component={ThankyouComponent}/>
      </BrowserRouter>
    </div>
    // <Route path="/stuff" component={Stuff}/>
    // <Route path="/contact" component={Contact}/>
            
  );
}

export default App;
