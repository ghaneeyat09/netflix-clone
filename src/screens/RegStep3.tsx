import React, {useState} from 'react'
// import { IoMdCheckmark } from 'react-icons/io';
import {Link} from 'react-router-dom';
// import { Packages } from '../Packages';
// import { PackagesType } from '../Packages';
import Footer3 from '../components/Footer3';
import { useNavigate } from 'react-router-dom';
import PlansComponent from '../components/PlansComponent';
import {User} from "firebase/auth"

interface MyComponentProps {
    user: User | null;
}

const RegStep3 : React.FC<MyComponentProps> = ({user}) => {
    const navigate = useNavigate();
    // const [isClicked, setIsClicked] = useState<Boolean>(false)
    // const [currentPackage, setCurrentpackage] = useState<number>(1)
    // const handleClick = (id: number, priceId: string) => {
    //     setIsClicked(true)
    //     setCurrentpackage(id);
    //     localStorage.setItem("priceId", priceId)
    // }
  return (
    <div className="bg-white">
        <section className="flex justify-center items-center h-[86px] px-10">
                <div className="w-1/2">
                <img src="./images/logo.png" alt="logo" className="w-41 h-14"/>
                </div>
                <div className="w-1/2 text-right" >
                <p className='capitalize font-semibold text-lg'>sign in</p>
                </div>
        </section>
        <hr className='text-gray-200'/>
        <section>
            <div className="w-[950px] mx-auto mt-10"> 
                <p className="uppercase text-sm">step <strong>2</strong> of <strong>3</strong></p>
                <h1 className="font-bold text-[32px] leading-10 mb-6">Choose the plan that's right for you.</h1>
                {/* <div className="grid grid-cols-4 grid-rows-1 gap-3 mt-10"> */}
                    
                {/* {Packages.map((pack: PackagesType) => (
                    <div key={pack.id} className="border border-solid border-gray-200 rounded-xl overflow-hidden cursor-pointer" onClick={(id) => handleClick(pack.id, pack.packagePrice)}>
                        <div className="pack01 p-4 text-black font-bold transition duration-3000 ease-in-out" style={{background: (isClicked && currentPackage === pack.id) ? pack.background : "", color: (isClicked && currentPackage === pack.id) ? "white" : "black"}}>
                            <h2 className="text-xl">{pack.packageName}</h2>
                            <p>{pack.packagePrice}</p>
                        </div>
                        <div className="p-4">
                            {pack.packageInfo.map((info: string, index) => (
                                <div key={index} className="flex mb-2">
                                    <span className="text-xl"><IoMdCheckmark /></span>
                                    <p className="text-sm ml-2">{info}</p>
                                </div> 
                            ))}
                        </div>
                        {(isClicked && currentPackage === pack.id)&&<p className="pb-6 capitalize text-center text-sm flex justify-center items-center gap-1.5"><span className="text-lg"><IoMdCheckmark /></span>selected</p>}

                    </div>
                ))} */}
                {/* </div> */}

                <PlansComponent user={user}/>
                
                {/* <div className="mt-8">
                    <p className="text-[13px]">HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability subject to your internet service and device capabilities. Not all content is available in all resolutions. See our <Link to="/">Terms of Use</Link> for more details.</p>
                    <p className="text-[13px] mt-2">Only people who live with you may use your account. Watch on 4 different devices at the same time with Premium, 2 with Standard, and 1 with Basic and Mobile.</p>
                </div>
                <div className="w-[460px] mx-auto">
                    <button className="w-full bg-red text-white py-3.5 text-2xl rounded mt-6" onClick={() => loadCheckout(productData.prices.priceId)}>Next</button>
                </div> */}
            </div>
        </section>
        <Footer3 />
    </div>
  )
}

export default RegStep3
