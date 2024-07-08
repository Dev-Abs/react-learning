import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList.js';
import Footer from './components/Footer.js';
import React,{useState} from 'react';
import AddItem from './components/AddItem.js';

function App() {
  const products = [
    {
      id: 0,
      title: "Samsung Galaxy S21",
      price: 699.99,
      image: "https://images.unsplash.com/photo-1612838320304-2b0b6f9c7f2f",
      quantity: 0,
    },
    { 
      id: 1,
      title: "Google Pixel 5",
      price: 499.99,
      image: "https://images.unsplash.com/photo-1602522575833-4b1b9d0c4d7b",
      quantity: 0,
    },
    {
      id: 2,
      title: "OnePlus 9 Pro",
      price: 899.99,
      image: "https://images.unsplash.com/photo-1612838320304-2b0b6f9c7f2f",
      quantity: 0,
    },
    {
      id: 3,
      title: "Apple iPhone 12",
      price: 1099.99,
      image: "https://images.unsplash.com/photo-1602522575833-4b1b9d0c4d7b",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);
  let [totalAmount, setTotalAmount] = useState(0);
  let [items, setItems] = useState(productList.length);

  const incrementQuantity = (index) =>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount; 
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const decrementQuantity = (index) =>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if(newProductList[index].quantity > 0){
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    if (newTotalAmount <= 0){
      newTotalAmount = 0;
    }
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const Reset = () =>{
    let newProductList = [...productList];
    let newTotalAmount = 0;
    newProductList.map((product) => {
      product.quantity = 0;
    });
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const removeProduct = (index) =>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    console.log(index)
    newTotalAmount -= newProductList[index].quantity * newProductList[index].price;
    newProductList.splice(index, 1);
    console.log(newProductList);
    setProductList(newProductList);
    setTotalAmount(newTotalAmount);
  }

  const addProduct = (name, price) =>{
    let newProductList = [...productList];
    // let newTotalAmount = totalAmount;
    newProductList.push({
      id: newProductList.length,
      title: name,
      price: price,
      quantity: 0,
    });
    setProductList(newProductList);
    // setTotalAmount(newTotalAmount);
  }

  const itemsInCartAdd = () => {
    let newItems = items;
    newItems++;
    setItems(newItems)
    console.log(items)
  }

  const itemsInCartRemove = () => {
    let newItems = items;
    newItems--;
    setItems(newItems)
    console.log(items)
  }

  return (
    <>
      <Navbar items={items} />
      <main className="container mt-5">
      <AddItem addProduct={addProduct} itemsInCartAdd={itemsInCartAdd} />
      <ProductList productList={productList} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeProduct={removeProduct} itemsInCartRemove={itemsInCartRemove}/>
      </main>
      <Footer totalAmount={totalAmount} Reset={Reset}/>
    </>
  );
}

export default App;
