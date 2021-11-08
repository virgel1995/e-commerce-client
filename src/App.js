/* eslint-disable no-unused-vars */
// import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { Login, Register, LandingPage, HomePage, ShowProductPage, AllProductsPage, CartPage, GiveawaysPage } from "./pages";

/** Path's
 * @LandingPage =>   /
 *  @HomePage  =>    /Home
 *  @allProducts =>  /Home/AllProducts
 *  @Giveaways =>    /Home/AllProducts/Giveaways
 *  @showProduct =>  /Home/AllProducts/ProductsName
 *  @CartPage =>     /Cart
 *  @Login =>        /Auth/Login
 *  @Register =>     /Auth/SignUp
 */

function App() {
  return (
    <Switch>
      <Route path="/" exact={true} component={LandingPage} />
      <Route path="/Auth/Login" component={Login} />
      <Route path="/Auth/SignUp" component={Register} />
      <Route path="/Home" exact={true} component={HomePage} />
      {/*---------------------------- product-------------------- */}
      <Route path="/Home/AllProducts" exact={true} component={AllProductsPage} />
      <Route path="/Home/AllProducts/Giveaways" exact={true} component={GiveawaysPage} />
      <Route path="/Home/AllProducts/:id" exact={true} component={ShowProductPage} />
      <Route path="/Cart" exact={true} component={CartPage} />
    </Switch>
  );
}

export default App;
