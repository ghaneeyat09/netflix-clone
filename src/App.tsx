import React, {useState, useEffect}from "react";
import Landpage from "./screens/Landpage";
import { auth } from "./firebase";
import {User} from "firebase/auth"

// import Registration from "./screens/Registration";
import RegStep0 from "./screens/RegStep0";
import RegStep1 from "./screens/RegStep1";
import RegStep2 from "./screens/RegStep2";
import RegStep3 from "./screens/RegStep3";
import PaymentPicker from "./screens/PaymentPicker";
import Movies from "./screens/Movies";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./screens/Login";
// import { LoginProtect, MovieProtect } from "./ProtectedRoutes";

function App() {
  // const user = localStorage.getItem("signedinUser");
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      console.log(user);
    });
  
    return () => {
      unsubscribe();
    };
  }, []);
  useEffect(() => {
    localStorage.setItem("authorisedUser", JSON.stringify(currentUser));
  }, [currentUser])
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landpage />} />
          <Route path="/login" element={<Login/>}
    />
          <Route path="/registration" element={<RegStep0 />} />
          <Route path="/registration-step0" element={<RegStep0 />} />
          <Route path="/registration-step1" element={<RegStep1 />} />
          <Route path="/registration-step2" element={<RegStep2 />} />
          <Route path="/registration-step3" element={<RegStep3 user={currentUser}/>} />
          <Route path="/movie-list" element={<Movies/> } />
          <Route path="/payment-picker" element={<PaymentPicker />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
