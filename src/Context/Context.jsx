import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

export const MyStore =  createContext()

const Context = ({children}) => {
      const [products, setProducts] = useState([]); // Store all products
  const [searchTerm, setSearchTerm] = useState(""); // Track search input

const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
  axios
    .get("https://fakestoreapi.com/products")
    .then((response) => {
      setProducts(response.data);
      setLoading(false);
    })
    .catch((err) => {
      setError(err);
      setLoading(false);
    });
}, []);


  // Filter products by search term
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );



  return (
  <MyStore.Provider value={{ products, setProducts, searchTerm, setSearchTerm, filteredProducts, loading, error }}>
  {children}
</MyStore.Provider>

  )
}

export default Context