import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "../pages/Home";
import Shop from "../pages/Shop";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Layout from "../components/Layout/Layout";

const AppRoutes = () => {
  const isLoggedin = true;
  const ProtectedRoutes = ({ children }) => {
    return isLoggedin ? children : <Navigate to="/login" />;
  };
  const LoginProtectedRoutes = ({ children }) => {
    return isLoggedin ? <Navigate to="/home" /> : children;
  };
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoutes>
            <Layout />
          </ProtectedRoutes>
        }
      >
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route path="shop">
          <Route index element={<Shop />} />
          <Route path=":id" element={<ProductDetails />} />
        </Route>
        <Route path="cart" element={<Cart />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route
        path="/login"
        element={
          <LoginProtectedRoutes>
            <Login />
          </LoginProtectedRoutes>
        }
      />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;
