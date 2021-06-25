import React from 'react';
import {
  Route,
  BrowserRouter
} from "react-router-dom";
import './App.css';
import RootComponent from './components/root-component/root.component';
import UserFormComponent from './components/user-form-component/user.form.component';
import ThankyouComponent from "./components/thankyou-component/thankyou.component";
import RayAjinComponent from './components/rayajin-ajinray-component/rayajin.ajinray.component';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "ICAI Exam Results"
  }, [])

  return (
    <div className='App'>
      <BrowserRouter>
        <Route exact path="/" component={RayAjinComponent}/>
        <Route path="/form" component={UserFormComponent}/>
        <Route path="/thankyou" component={ThankyouComponent}/>
      </BrowserRouter>
    </div>
    // <Route path="/stuff" component={Stuff}/>
    // <Route path="/contact" component={Contact}/>
            
  );
}

export default App;
