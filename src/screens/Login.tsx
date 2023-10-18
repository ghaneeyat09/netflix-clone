import React, {useState, useEffect} from 'react'
import Footer2 from '../components/Footer2'
import { useNavigate } from 'react-router-dom';
import { signinWithEmail } from '../firebase';
// import { auth } from '../firebase';
// import {User} from "firebase/auth"

const Login: React.FC = () => {
  const user = localStorage.getItem("currentUser");
  const [email, setEmail] = useState<string>(user ?? '')
  const [password, setPassword] = useState("")
  // const [currentUser, setCurrentUser] = useState<User | null>(null)
  const navigate = useNavigate();

  const loginUser = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signinWithEmail(email, password);
    const signedinUserJson = localStorage.getItem("signedinUser");
    const signinUser = signedinUserJson !== null ? JSON.parse(signedinUserJson) : null;
    console.log(signinUser);
    navigate('/movie-list')
  }
  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     setCurrentUser(user);
  //   });
  
  //   return () => {
  //     unsubscribe();
  //   };
  // }, []);
  

  return (
    <div className="bg-black min-h-screen semi-midi:bg-login-banner bg-cover bg-no-repeat">
        <div className="w-1/2 pt-6 pl-10">
            <img src="./images/logo.png" alt="logo" className="w-41 h-14"/>
        </div>
        <form className='w-full h-auto mt-3 bg-black-100 px-10 semi-midi:w-[450px] semi-midi:mx-auto semi-midi:px-16' onSubmit={loginUser}>
            <h1 className="text-white capitalize text-[2rem] font-bold pt-16">sign in</h1>
            <input placeholder="Email or phone number" type="text" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-6 bg-grey-200 placeholder:text-gray placeholder:font-light w-full px-4 py-3 rounded"/><br/>
            <input placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="mt-4 bg-grey-200 placeholder:text-gray placeholder:font-light w-full px-4 py-3 rounded"/><br />
            <button className="w-full text-white bg-red text-center text-base font-medium px-4 py-3 rounded mt-12" type="submit">Sign in</button>
            <div className="flex justify-between items-center mt-4 tracking-wide">
                <div>
                   <input type="checkbox"/>
                   <label className="text-gray text-xs ml-1">Remember me</label>
                </div>
                <a href="/" className='text-gray text-xs'>Need help?</a>
            </div>
            <p className="text-gray font-bold tracking-tight mt-12">New to Netflix? <a href="/" className="text-white font-medium">Sign Up Now</a></p>
            <p className="text-sm text-gray mt-4 font-extralight text-blue pb-32">This page is protected by Google reCAPTCHA to ensure you're not a bot. <a href="/">Learn more</a></p>
        </form>
        <Footer2/>
    </div>
  )
}

export default Login
