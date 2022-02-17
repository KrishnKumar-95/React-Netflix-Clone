import React,{useEffect, useState} from 'react';
import db from '../firebase';
import { collection, where, query, doc, collectionGroup } from "firebase/firestore";
import {getDocs } from "firebase/firestore";
import './PlansScreen.css'

function PlansScreen() {

    const [products,setProducts] = useState([]);
    const [prices, setPrices] = useState([]);

    useEffect(()=>{
        (async function (){
        const userCollection = collection(db,'products');
        
        // const validation = query(userCollection, where("active", "==", true));
        const querySnapshot = await getDocs(userCollection);
        setProducts(querySnapshot.docs.map((doc)=>({...doc.data(),id: doc.id})))

        const priceCollection = query(collection(db,"products"),where('active','==',true))

        const priceSnapshot = await getDocs(priceCollection);
        setPrices(priceSnapshot.docs.map((doc)=>({...doc.data(),id: doc.id})))
            // querySnapshot.forEach(async productDoc => {
            //     products[productDoc.id] = productDoc.data();
            //     const prices = await collection((productDoc.ref),'prices');
            //     const priceSnap = await getDocs(prices);
            //     priceSnap.forEach(prices=>{
            //         products[productDoc.id].prices = {
            //             pricesId: prices.id,
            //             priceData: priceSnap.data()
            //         }
            //     })
            // });
            // setProducts(products)
        })();
    },[])

    console.log(products);
    console.log(prices);
  return(
    <div className='plansScreen'>

    </div>
  );
}

export default PlansScreen;
