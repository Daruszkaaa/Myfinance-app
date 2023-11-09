import React from 'react';
import {createRoot} from "react-dom/client";
import {Route, Routes, BrowserRouter as Router} from "react-router-dom";


//VIEWS
import Finance from "./views/Finance.jsx";
import SignIn from './views/SignIn.jsx';
import SignUp from "./views/SignUp.jsx";

function App() {
  return (
        <Router>
            <Routes>
                <Route path='/' element={<SignIn />} />
                <Route path='/signin' element={<SignIn />} />
                <Route path='/signup' element={<SignUp />} />
                <Route path='/finance' element={<Finance />} />
            </Routes>
        </Router>
  )
}

export default App