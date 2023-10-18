import React, {useState, useEffect} from 'react';
import { db } from '../firebase';
import { collection, doc, addDoc, onSnapshot, getDocs, query, where } from 'firebase/firestore';
import { loadStripe } from '@stripe/stripe-js';
// import { useNavigate } from 'react-router-dom';

const PlansComponent = ({user}) => {
  const [products, setproducts] = useState([]);
//   const navigate = useNavigate();
//   const loadCheckout = async (priceId) => {
//       const docRef = await db.collection("customers")
//       .doc(user.uid)
//       .collection('checkout_sessions')
//       .add({
//         price: priceId,
//         success_url: window.location.origin,
//         cancel_url: window.location.origin, 
//       })

//       docRef.onSnapshot(async(snap) => {
//         const {error, sessionId} = snap.data();

//         if (error) {
//             // Show an error to your customer and
//             // inspect your Cloud Function logs in the Firebase console.
//             alert(`An error occured: ${error.message}`);
//         }
//         if (sessionId) {
//             const stripe = await loadStripe('pk_test_51KrqCbGyYIY1SjEDvLhTUahBW2LO4WsfwFADGKA4JIipJynX8wfpOFXeGJvEQeO3niGZZOJZZLo6M7lqajBJGwpp00ipxm9SsD')
//             stripe.redirectToCheckout({ sessionId})
//         }
//       })
//   }
   const loadCheckout = async (priceId) => {
    const checkoutSessionRef = await addDoc(collection(doc(db, 'customers', user.uid), 'checkout_sessions'), {
      price: priceId,
      success_url: window.location.origin,
      cancel_url: window.location.origin,
    });
  
    onSnapshot(checkoutSessionRef, async (snap) => {
      const { error, sessionId } = snap.data();
  
      if (error) {
        alert(`An error occurred: ${error.message}`);
      }
      if (sessionId) {
        const stripe = await loadStripe('pk_test_51KrqCbGyYIY1SjEDvLhTUahBW2LO4WsfwFADGKA4JIipJynX8wfpOFXeGJvEQeO3niGZZOJZZLo6M7lqajBJGwpp00ipxm9SsD');
        stripe.redirectToCheckout({ sessionId });
      }
    });
  };
  const getActiveProducts = async () => {
    const products = {};
  
    const q = query(collection(db, 'products'), where('active', '==', true));
    const querySnapshot = await getDocs(q);
  
    querySnapshot.forEach(async (productDoc) => {
      products[productDoc.id] = productDoc.data();
  
      const priceSnapshot = await getDocs(
        collection(productDoc.ref, 'prices')
      );
  
      priceSnapshot.forEach((priceDoc) => {
        products[productDoc.id].prices = {
          priceId: priceDoc.id,
          priceData: priceDoc.data(),
        };
      });
    });
    setproducts(products)
    console.log(products);
  };
  useEffect(() => {
    getActiveProducts()
  }, [])
  return (
    <div>
        <div className="grid grid-cols-4 grid-rows-1 gap-3 mt-10">
         {Object.entries(products).map(([productId, productData]) => {
            return (
                    <div key={productId} className="border border-solid border-gray-200 rounded-xl overflow-hidden cursor-pointer" onClick={() => loadCheckout(productData.prices.priceId)}>
                            <div className="pack01 p-4 text-black font-bold transition duration-3000 ease-in-out">
                                <h2 className="text-xl">{productData.name}</h2>
                            </div>
                            <div className="p-4">
                                <p>{productData.description}</p>
                            </div>
                    </div>
            )
         })}
         </div>
    </div>
    // <h1>hello</h1>
  )
}

export default PlansComponent
