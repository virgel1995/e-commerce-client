/* eslint-disable no-unused-vars */
/* eslint-disable-next-line react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { useState, useEffect } from "react";
import { HomeNavbar,HomeMenu,HomeFooter } from "../../components";
import { getAllProducts } from "../../utils/api";

export function HomePage({ history }) {
  const [products, setProducts] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllProducts()
      // .then(function (response) {
      //   // handle success
      //   console.log(response.data);
      // })
      .then(function (response) {
        setProducts(response.data.data);
        console.log("productss", products);
        setLoading(false);
        // return data;
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
      <div>
        <HomeNavbar />
        <HomeMenu allProducts={products}/>
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
