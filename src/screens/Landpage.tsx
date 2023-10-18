import React, {useState} from 'react';
import Button from '../components/Button';
import Form from '../components/Form';
import { Content } from '../Content';
import { Faq } from '../Faq';
import { FaqType } from '../Faq';
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai'
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
// import { User } from 'firebase/auth';

// interface MyComponentProps {
//     user: User | null;
// }

const Landpage: React.FC = () => {
    const [open, setOpen] = useState<boolean>(false);
    const [id, setId] = useState<any>(null);
    const navigate = useNavigate();
    // const signedInuser = localStorage.getItem("signedinUser");


    const handleOpen = (id: number) => {
        (Faq.map((aq:FaqType) => aq.id === id ? setOpen(!open) : ""));
        setId(id)
    }

  return (
    <div className="bg-blue-100 w-full h-auto px-4 semi-max:px-11 pb-4">
       <section className="hidden semi-max:flex justify-center items-center h-[86px]">
            <div className="w-1/2">
               <img src="./images/logo.png" alt="logo" className="w-40 h-12"/>
            </div>
            <div className="w-1/2 text-right" >
               <Button text="sign in" color="white" bgColor="#E50914" padding="6px 18px" fontsize='14px' onclick={() => navigate('/login')}/>
            </div>
       </section>
       <section>
         <div className='relative overflow-hidden h-[80vh] semi-max:h-screen semi-max:rounded-2xl' style={{backgroundImage: `url("./images/netflix-image90.jpg")`, backgroundSize: "cover", backgroundPosition: "center center"}}>
            {/* <img src="./images/netflix-image90.jpg" alt="banner" className="w-full h-full"/> */}
            <div className="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-r from-blue-300 via-wine-300 to-wine-400 p-6 semi-midi:p-10">
                <div className="w-full flex justify-between semi-max:hidden">
                    <div className="w-1/2">
                        <img src="./images/logo.png" alt="logo" className="w-24 h-8"/>
                    </div>
                    <div className="w-1/2 text-right" >
                        <Button text="sign in" color="white" bgColor="#E50914" padding="6px 18px" fontsize='14px' onclick={() => navigate('/login')}/>
                    </div>
                </div>
                <div className="mx-auto semi-max:w-3/4 semi-max:mx-0">
                    <h1 className='text-white text-3xl text-center mt-28 font-black semi-midi:text-4xl semi:max:tracking-tight semi-max:leading-[5rem] semi-max:text-[4rem] semi-max:text-left'>Unlimited movies, TV <span>shows, and more</span></h1>
                    <h3 className="text-white text-center font-medium mt-2 semi-midi:text-lg semi-max:text-2xl semi-max:leading-[5rem] semi-max:text-left">Watch anywhere, Cancel anytime.</h3>
                    {/* <h4 className="text-white text-xl font-medium ">Ready to watch? Enter your email to create or restart your membership.</h4> */}
                    <Form />
                    {/* <form className="flex items-center h-14 mt-4">
                        <input placeholder="Email address" className="w-1/2 bg-blue-300 h-full border border-solid border-white rounded mt-0 mr-2 pl-4"/>
                        <Button text="Get Started" color="white" bgColor="#E50914" padding="10px 26px" fontsize="24px"/>    
                    </form> */}
                </div>
            </div>
         </div>
       </section>
       <section className="bg-gradient-to-br from-blue-100 via-magenta via-80% to-wine-400 h-auto px-6 semi-midi:px-10 semi-max:px-24 mt-6 rounded-2xl shadow-inner">
           {
            Content.map((item, index) => (
                <div key={index} className="midi:flex justify-between items-center midi:even:flex-row-reverse border-b-8 border-solid border-grey py-10 last:border-b-0">
                    <div className="semi-max:w-[48%]">
                        <h1 className="text-white text-3xl text-center font-black midi:text-left semi-max:text-5xl">{item.heading}</h1>
                        <h3 className="text-white text-lg text-center font-semibold mt-6 midi:text-left">{item.text}</h3>
                    </div>
                    <div className="semi-max:w-[48%]">
                         <img src={item.image} alt="img" className=" w-full h-full object-contain"/>
                    </div>
                </div>
            ))
           }
       </section>
       <section className="mt-8">
            <div className=" w-[100%] semi-midi:w-[85%] mx-auto mt-16">
                <h1 className="text-white text-3xl text-center font-extrabold capitalize py-4 semi-max:text-[2.5rem] semi-max:text-left">frequently asked questions</h1>
                {Faq.map((qa, index) => (
                    <ul key={index} className="mb-2.5">
                        <li className="flex justify-between items-center bg-blue-400 p-6 mb-px">
                            <h2 className="text-white text-base font-medium semi-midi:text-lg semi-max:text-2xl">{qa.question}</h2>
                            <p onClick={() => handleOpen(qa.id)} className="text-white font-medium semi-midi:text-lg semi-max:text-4xl">{(qa.id === id && open===true) ? <AiOutlineClose /> : <AiOutlinePlus />}</p>
                        </li>
                        {(qa.id === id && open === true) && <li className="bg-blue-400 text-2xl text-white font-medium p-6">{qa.answer}</li>}
                    </ul>
                ))}
            </div>
       </section>
       <section>
            <div className='w-[85%] mx-auto mt-6'>
                <Form />
            </div>
       </section>
       <section>
            <Footer />
       </section>
    </div>
  )
}

export default Landpage
