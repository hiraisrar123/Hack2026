// import React from 'react'
// import LoginPage from './component/LoginPage'

// const App = () => {
//   return (
//     <div>
      

//       <LoginPage/>
//     </div>      
//   )
// }

// export default App

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./component/LoginPage";
import Dashboard from "./component/Dashboard"; 
import StudentDashboard from "./component/StudentDashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/student-dashboard" element={<StudentDashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
