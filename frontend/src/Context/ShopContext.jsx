import { createContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";

export const ShopContext=createContext();

 
const getDefaultCart=()=>{
    let cart={};
    for(var index=1;index<=37;index++){
        cart[index]=0;
    }
    return cart;
}

const ShopContextProvider=(props)=>{
    const[info,setInfo]=useState([]);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
        .then(res=>setInfo(res.data))
        .catch(err=>err);
    })
    const[cartItems,setCartItems]= useState(getDefaultCart());

  
    const addToCart=(itemNum)=>{
        setCartItems((prev)=>({...prev,[itemNum]:prev[itemNum]+1}))
    }

    const removeFromCart=(itemNum)=>{
        setCartItems((prev)=>({...prev,[itemNum]:prev[itemNum]-1}))
    }

    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=info.find((product)=>product.productNum==item);
                totalAmount += itemInfo.price*cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems=()=>{
        let totalItems=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const contextValue={getTotalCartItems,cartItems,addToCart,removeFromCart,getTotalCartAmount,info};
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider