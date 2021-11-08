/* eslint-disable no-unused-vars */
/* eslint-disable-next-line react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { Navbar } from "../../components";
import { getUser } from "../../utils/api";

export function GiveawaysPage({ history }) {
//   const [loading, setLoading] = useState(true);
//   const [user, setUser] = React.useState(null);

//   useEffect(() => {
//     getUser()
//       .then(({ data }) => {
//         // user data
//         console.log("user", data);
//         setUser(data);
//         setLoading(false);
//       })
//       .catch((e) => {
//         history.push("/");
//         setLoading(false);
//         console.log(e);
//       });
//     // eslint-disable-next-line
//   }, []);
  
//   if (loading !== true) {
//     // with data
    return (
      <div>
        <Navbar user="user"/>
        <i className="fas fa-user"></i> 
      landing Page
      </div>
    );
//   }
//   return (
//     // without data
//     <div className="loading">
//       <img src="/images/loading.svg" alt="Loading..." className="App-logo rounded-circle" />
//       <p>Loading</p>
//     </div>
//   );
}
