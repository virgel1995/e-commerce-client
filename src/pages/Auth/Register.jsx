import React, { useState, useEffect } from "react";
import { getAllProducts, getUser } from "../../utils/api";
import { Navbar } from "../../components";
import  { Redirect } from 'react-router-dom'

export function Register({ history }) {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = React.useState(null);
  useEffect(() => {
    getUser()
      .then(({ data }) => {
        // user data
        console.log("user", data);
        setUser(data);
        setLoading(false);
      })
      .catch((e) => {
        history.push("/");
        setLoading(false);
        console.log(e);
      });
    // eslint-disable-next-line
  }, []);
  if (loading === true) {
  return <Redirect to='/Home'  />
  }
  return <Redirect to='http://127.0.0.1:8000/register'  />

}
