import React from 'react';
import {IoIosCheckmarkCircleOutline} from 'react-icons/io'
import { IoMdCheckmark } from 'react-icons/io';
import Footer3 from '../components/Footer3'
import { useNavigate } from 'react-router-dom';

const RegStep2: React.FC= () => {
    const navigate = useNavigate();
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
        <section>
            <div className="w-full mx-auto mt-32 semi-midi:w-[350px]">
                <IoIosCheckmarkCircleOutline className="mx-auto text-red text-6xl"/>
                <p className="uppercase mt-6 text-sm text-center">step <strong>2</strong> of <strong>3</strong></p>
                <h1 className="font-bold text-3xl leading-10 text-center mb-6 semi-midi:text-[32px]">Choose your plan</h1>
                <div className="w-full mx-auto px-10 semi-midi:w-[298px]">
                    <div className="flex mb-3">
                        <span><IoMdCheckmark className="text-red text-4xl"/></span>
                        <h3 className="text-lg ml-2">No commitments, cancel anytime.</h3>
                    </div>
                    
                    <div className="flex mb-3">
                        <span><IoMdCheckmark className="text-red text-4xl"/></span>
                        <h3 className="text-lg ml-2">Everything on Netflix for one low price.</h3>
                    </div>
                    <div className="flex mb-3">
                        <span><IoMdCheckmark className="text-red text-4xl"/></span>
                        <h3 className="text-lg ml-2">No ads and no extra fees. Ever.</h3>
                    </div>  
                </div>
                <div className="w-[250px] semi-midi:w-full mx-auto">
                    <button className="w-full bg-red text-white py-3.5 text-2xl rounded mt-6" onClick={() => navigate("/registration-step3")}>Next</button>
                </div>
            </div>
        </section>
        <Footer3 />
    </div>
  )
}

export default RegStep2
