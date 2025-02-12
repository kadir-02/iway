import { Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import AddProduct from "../components/AddProduct";
import CardData from "../components/CardData";
import EditForm from "../components/EditFrom";
import ProductData from "../components/ProductData";
import Cart from "../components/Cart";
import Account from "../components/Account";

const Routing = () => {
  return (
    <>
      <Routes>
        {/*Routes*/}
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddProduct />} />
        <Route path="/carddata/:id" element={<CardData />} />
        <Route path="/edit/:id" element={<EditForm />} />
        <Route path="/productdata/:id" element={<ProductData />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/account" element={<Account />} />

        {/*Fallback Route*/}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Routing;
