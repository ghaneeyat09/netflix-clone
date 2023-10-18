import React from 'react';
import {IoIosLock} from "react-icons/io";
import {IoIosArrowForward} from "react-icons/io";
import Footer3 from '../components/Footer3';
import { db } from '../firebase';
import { loadStripe } from '@stripe/stripe-js';
// import { collection, addDoc } from 'firebase/firestore';

const PaymentPicker = () => {
  const priceId = localStorage.getItem("priceId");
  const loadCheckout = async (priceId) => {
     const user = localStorage.getItem("user");
     const parsedUser = JSON.parse(user);
     console.log(parsedUser);
     const docRef = await db
    .collection('customers')
    .doc(parsedUser.uid)
    .collection('checkout_sessions')
    .add({
      price: priceId,
      success_url: '/movie-list',
      cancel_url: window.location.origin,
    });

    docRef.onSnapshot(async (snap) => {
      const { error, url } = snap.data();

      if (error) {
        // Show an error to your customer and
        // inspect your Cloud Function logs in the Firebase console.
        alert(`An error occured: ${error.message}`);
      }
      if (url) {
        // We have a Stripe Checkout URL, let's redirect.
        // window.location.assign(url);
        const stripe = await loadStripe("pk_test_51KrqCbGyYIY1SjEDvLhTUahBW2LO4WsfwFADGKA4JIipJynX8wfpOFXeGJvEQeO3niGZZOJZZLo6M7lqajBJGwpp00ipxm9SsD");
        stripe.redirectToCheckout({url, successUrl: "/movie-list"})
      }
    });
  
  }
  return (
    <div>
      <section className="flex justify-center items-center h-[86px] px-10">
                <div className="w-1/2">
                <img src="./images/logo.png" alt="logo" className="w-41 h-14"/>
                </div>
                <div className="w-1/2 text-right" >
                <p className='capitalize font-semibold text-lg'>sign in</p>
                </div>
      </section>
      <hr className="text-gray-200" />
      <section className="bg-white w-[500px] mx-auto">
            <div className="w-[50px] h-[50px] mx-auto mt-12">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/simplicity/Lock.png"
                alt="img"
                className="w-full h-full"
              />
            </div>
            <div className='mt-10 text-center'>
                <p className="uppercase mt-6 text-sm">step <strong>3</strong> of <strong>3</strong></p>
                <h1 className="font-bold text-[32px] leading-10">Choose how to pay</h1>
                <p className='text-lg mt-2 px-6'>Your payment is encrypted and you can change how you pay anytime.</p>
                <p className='text-lg mt-2 font-bold'>Secure for peace of mind.</p>
                <p className='text-lg mb-3 font-bold'>Cancel easily online.</p>
            </div>
            <p className="w-full flex items-start justify-end mt-5 text-[13px]">End-to-end-encrypted <IoIosLock className="text-yellow text-base mr-2"/></p>
            <div className="flex gap-3 w-full p-4 border-2 border-solid border-gray-200 rounded-md relative cursor-pointer" onClick={() => loadCheckout(priceId)}>
              <span>Credit or Debit Card</span>
              <div className="flex gap-2">
                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VISA.png" alt="" />
                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/MASTERCARD.png" alt="" />
                <img src="https://assets.nflxext.com/siteui/acquisition/payment/ffe/paymentpicker/VERVE.png" alt="" />
              </div>
              <IoIosArrowForward className="absolute right-3 text-2xl"/>
            </div>
         </section>
         <Footer3 />
      
    </div>
  )
}

export default PaymentPicker
