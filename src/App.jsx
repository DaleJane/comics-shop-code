import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/layout/Layout";
import ImageSlider from "./components/imageSlider/ImageSlider";
import News from "./components/news/News";
import Shop from "./components/shop/Shop";
import Contact from "./components/contact/Contact";
import SingleProduct from "./components/singleProduct/SingleProduct";
import Search from "./components/search/Search";
import ErrorPage from "./components/errorPage/ErrorPage";
import ShoppingCart from "./components/shoppingCart/ShoppingCart";
import WishList from "./components/wishLIst/WishList";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<ImageSlider />} />
      <Route path="news" element={<News />} />
      <Route path="shop" element={<Shop />} />
      <Route path="shop/singleProduct/:comicName" element={<SingleProduct />} />
      <Route path="contact" element={<Contact />} />
      <Route path="searchPage" element={<Search />} />
      <Route path="shoppingCart" element={<ShoppingCart />} />
      <Route path="wishList" element={<WishList />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
