
import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);

const getDefaultCart = () =>{
    let cart = {};
    for (let index = 0; index < 300+1; index++) {
        cart[index] = 0;
    }
    return cart;
}


const ShopContextProvider = (props) => {

    const [allProducts,setAllProducts] = useState([]);
    const [cartItems,setCartItems] = useState(getDefaultCart());
    const [userCarts, setUserCarts] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setAllProducts(data))

        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/getcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:"",
            }).then((response)=>response.json())
            .then((data)=>setCartItems(data));
        }
        fetch('http://localhost:4000/getallusercarts')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => setUserCarts(data))
            .catch((error) => {
                console.error('Error fetching user carts:', error);
            });
    }, []);



    const addToCart =(itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));

        }
    }
    
    const removeFromCart =(itemId) => {
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            })
            .then((response)=>response.json())
            .then((data)=>console.log(data));
        }
    }


    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        let itemInfo = allProducts.find((product)=>product.id===Number(item))
                        totalAmount += itemInfo.new_price*cartItems[item];
                    } 
            }
            return totalAmount;
    }

    const getTotalCartItems = () =>{
        let totalItem = 0;
        for(const item in cartItems)
            {
                if(cartItems[item]>0)
                    {
                        totalItem+=cartItems[item];
                    }
            }
            return totalItem;
    }
    const getRelatedProducts = (productId) => {
        const relatedProductIds = new Set();

        userCarts.forEach(userCart => {
            if (userCart.cartData[productId] > 0) {
                Object.keys(userCart.cartData).forEach(itemId => {
                    if (itemId !== productId.toString() && userCart.cartData[itemId] > 0) {
                        relatedProductIds.add(Number(itemId));
                    }
                });
            }
        });

        return allProducts.filter(product => relatedProductIds.has(product.id));
    }

    const contextValue = { getTotalCartItems,getTotalCartAmount,allProducts,cartItems, addToCart, removeFromCart, getRelatedProducts };


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
