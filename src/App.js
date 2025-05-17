import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import RootComponent from './components/root-component/root.component';
import UserFormComponent from './components/user-form-component/user.form.component';
import ThankyouComponent from "./components/thankyou-component/thankyou.component";
import RayAjinComponent from './components/rayajin-ajinray-component/rayajin.ajinray.component';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title = "RayAjin"
  }, [])

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<RayAjinComponent />} />
          <Route path="/form" element={<UserFormComponent />} />
          <Route path="/thankyou" element={<ThankyouComponent />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;