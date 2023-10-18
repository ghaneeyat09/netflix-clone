import React, {useState} from 'react'
// import Button from './Button'
import { fetchSignInMethodsForEmail } from 'firebase/auth';
import { auth } from '../firebase';
import {useNavigate} from 'react-router-dom'

const Form: React.FC = () => {
    const [email, setEmail ] = useState<string>("");
    const navigate = useNavigate();
    // const redirect = () => {
    //      navigate('/registration-step0');
    // }
    // const handleClick = (e : React.FormEvent<EventTarget>) => {
    //      e.preventDefault();
    //      registerUserWithEmail();
    // }
    const checkIfUserExist = (email: string) => {
      fetchSignInMethodsForEmail(auth, email)
      .then((res) => {
        localStorage.setItem("currentUser", email)
        if(res.length > 0){
          navigate('/login')
        }
        else{
          navigate("/registration-step0")
        }
      })
      .catch((err) => console.log(err))
    }
    const isUserExist = (e : React.FormEvent<EventTarget>, email: string ) => {
        e.preventDefault()
        checkIfUserExist(email)
    }
  return (
         <>
            <h4 className="text-white text-sm text-center mt-4 semi-midi:text-base semi-max:text-xl semi-max:font-medium semi-max:text-left">Ready to watch? Enter your email to create or restart your membership.</h4>
            <form className="w-full items-center h-14 mt-4 semi-midi:flex midi:w-[500px] midi:mx-auto semi-max:mx-0">
                    <input placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-blue-300 h-full text-white border border-solid border-white rounded mt-0 mr-2 pl-4 semi-max:w-1/2"/>
                    <button className="bg-red w-full mt-2 py-3 rounded capitalize text-white semi-midi:h-full semi-midi:mt-0 semi-midi:py-0 semi-max:w-1/2" onClick={(e) => isUserExist(e, email)}>get started</button>
            
            </form>
         </>
  )
}

export default Form
