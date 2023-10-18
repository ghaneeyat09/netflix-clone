import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Footer3 from '../components/Footer3'
import { registerUserWithEmail } from '../firebase'

const RegStep1 = () => {
  const newUser = localStorage.getItem("currentUser");
  const [email, setEmail] = useState<string>(newUser ?? '')
  const [password, setPassword] = useState("")
  const navigate = useNavigate();
  const registerNewUser = (e : React.FormEvent<HTMLFormElement>) => {
       e.preventDefault()
       registerUserWithEmail(email, password);
       navigate('/registration-step2')
  } 
  
  return (
    <div className="bg-white">
        <section className="flex justify-center items-center h-[86px] px-10">
                <div className="w-1/2">
                <img src="./images/logo.png" alt="logo" className="w-24 h-8 semi-midi:w-41 semi-midi:h-14"/>
                </div>
                <div className="w-1/2 text-right" >
                <p className='capitalize font-semibold text-lg'>sign in</p>
                </div>
        </section>
        <hr className='text-gray-200'/>
        <section className="bg-white">
            <div className='w-full px-10 semi-midi:px-0 semi-midi:w-[450px] mx-auto mt-10'>
                <p className="uppercase mt-6 text-sm">step <strong>1</strong> of <strong>3</strong></p>
                <h1 className="font-bold text-[32px] leading-10">Create a password to start your membership</h1>
                <p className='text-lg mt-2'>Just a few more steps and you're done!</p>
                <p className='text-lg mt-2 mb-3'>We hate paperwork, too.</p>
                <form className='w-full' onSubmit={registerNewUser}>
                    <input placeholder="Email address" type="text" disabled className='w-full border border-solid border-grey-200 px-2 py-3.5 mb-2.5' value={email} onChange={(e) => setEmail(e.target.value)}/><br />
                    <input placeholder="Add a password" type="password" className='w-full border border-solid border-grey-200 px-2 py-3.5 mb-2.5' value={password} onChange={(e) => setPassword(e.target.value)}/><br />
                    <div className="mb-2 mt-1">
                        <input type="checkbox" className="w-[25px] h-[25px] align-middle"/>
                        <label className="ml-2">Please do not email me Netflix special offers</label>
                    </div>
                    <button className="w-full bg-red text-white py-3.5 text-2xl rounded mt-6">Next</button>
                </form>
            </div>
        </section>
        <Footer3 />
    </div>
  )
}

export default RegStep1
