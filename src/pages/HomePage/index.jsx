/* eslint-disable no-unused-vars */
/* eslint-disable-next-line react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from "react";
import { Navbar, HomeMenu, HomeFooter } from "../../components";
import { getAllProducts, getUser } from "../../utils/api";

export function HomePage({ history }) {
  const [loading, setLoading] = useState(true);

  const [products, setProducts] = useState({});
  const [user, setUser] = React.useState(null);

  useEffect(() => {
    getUser()
      .then(({ data }) => {
        // user data
        console.log("user", data);
        setUser(data);
        return getAllProducts();
      })
      .then(({ data }) => {
        // products data
        setProducts(data);
        // console.log("productss", products);
        setLoading(false);
      })
      .catch((e) => {
        history.push("/");
        setLoading(false);
        console.log(e);
      });
    // eslint-disable-next-line
  }, []);

  if (loading !== true) {
    // with data
    return (
      <div className="bg-custom">
        <Navbar user="user"/>
        <HomeMenu allProducts={products} />
        <HomeFooter />
      </div>
    );
  }
  return (
    // without data
    <div className="loading">
      <img src="/images/loading.svg" alt="Loading..." className="App-logo rounded-circle" />
      <p>Loading</p>
    </div>
  );
}
