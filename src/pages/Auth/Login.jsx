import React, { useState, useEffect } from "react";
import { getAllProducts, getUser } from "../../utils/api";
import { Navbar } from "../../components";

export function Login({ history }) {
  
  return (
    // without data
    <div className="">
      <Navbar />
      <p>Login Page</p>
    </div>
  );
}
