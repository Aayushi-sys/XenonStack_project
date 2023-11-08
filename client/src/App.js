import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import UserSignup from "./Pages/UserSignup"

import Aboutus from "./Pages/Aboutus"
// import EventInfo from "./Pages/EventInfo"
import CoLogin from "./Pages/CoLogin"
// import UserHome from "./Pages/UserHome"

let App = () => {

  return (
    <>
    
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        
          <Route path="/about" element={<Aboutus/>}></Route>
          <Route path="/signup" element={<UserSignup/>}></Route>
         
          {/* <Route path="/eventinfo" element={<EventInfo/>}></Route> */}
          <Route path="/co-login" element={<CoLogin/>}></Route>
          
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;

