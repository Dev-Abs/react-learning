import React from 'react'
import Product from './Product.js'

export default function ProductList(props) {
    return (
        props.productList.length > 0 ?
        props.productList.map((product,i) => {
            return  <Product key={i} product={product} incrementQuantity={props.incrementQuantity} index={i} decrementQuantity={props.decrementQuantity} removeProduct={props.removeProduct} itemsInCartRemove = {props.itemsInCartRemove}/>
        })
        :<h1>Please add products in the cart</h1>
)
}
