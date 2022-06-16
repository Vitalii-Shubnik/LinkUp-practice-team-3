import { React } from "react";
// import SignUp from "./pages/SignUp";
import { Link } from "react-router-dom";
import AllProduct from "./components/AllProduct";
import products from "./components/data.js";

// import { Provider } from "speedux";
function App() {
  return (
    <div className="conteiner">
      <Link to="sign-up">sign-up</Link>
      <div className="shop">
        <AllProduct items={products} />
      </div>
    </div>
  );
}

export default App;
