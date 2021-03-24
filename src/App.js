import React, { useState, useEffect } from 'react';
import Axios from "axios";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Products, Navbar, Cart } from './components';

const App = () => {
    const [products, setProducts] = useState([]);
    const [checkout, setcheckouts] = useState([]);

    const fetchProducts = async () => {
      const { data } = await Axios.get(
        "https://apps.zamtel.co.zm/technical/products"
      );
      const products = data;
      setProducts(products);
    };
  
    useEffect(() => {
      fetchProducts();
    }, []);
    return (
      <Router>
          <div>
              <Navbar />
              <Switch>
                <Route exact path="/">
                  <Products products={products}/>
                </Route> 
                <Route exact path="/product/:id"> 
                  <checkout checkout={checkout} />
                </Route>
              </Switch>
          </div>
      </Router>
    )
}

export default App; 