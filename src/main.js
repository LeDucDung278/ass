import "bootstrap/dist/css/bootstrap.min.css";

import Navigo from "navigo";
import Blog from "./pages/blog";
import Home from "./pages/home";
import SignIn from "./pages/signin";
import SignUp from "./pages/signup";
import GioiThieu from "./pages/gioithieu";
import Contact from "./pages/contact";
import Dashboard from "./pages/admin/dashboard";
import ProductList from "./pages/productlist";
import ListPost from "./pages/admin/posts/list";
import ListProduct from "./pages/admin/products/list";
import ListUser from "./pages/admin/users/list";
import AddPost from "./pages/admin/posts/add";
import EditProduct from "./pages/admin/products/edit";
import AddProduct from "./pages/admin/products/add";
import CartPage from "./pages/cart";

const router = new Navigo("/", { linksSelector: "a" });

const print = async (content, id) => {
    document.querySelector("#app").innerHTML = await content.render(id);

    if (content.afterRender) await content.afterRender(id);
};
router.on({
    "/": () => {
        print(Home);
    },

    "/gioi-thieu": () => {
        print(GioiThieu);
    },

    "/blogs": () => {
        print(Blog);
    },

    "/lien-he": () => {
        print(Contact);
    },

    "/signup": () => {
        print(SignUp);
    },

    "/signin": () => {
        print(SignIn);
    },

    // "/product": () => {
    //     print(ProductList);
    // },
    "/admin/product/:id/edit": ({ data }) => {
        print(EditProduct, data.id);
    },

    "/product/:id": ({ data }) => {
        print(ProductList, data.id);
    },

    "/admin/dashboard": () => {
        print(Dashboard);
    },

    "/admin/user": () => {
        print(ListUser);
    },

    "/admin/post": () => {
        print(ListPost);
    },

    "/admin/post/add": () => {
        print(AddPost);
    },

    "/admin/product": () => {
        print(ListProduct);
    },

    "/admin/product/add": () => {
        print(AddProduct);
    },

    "/cart": () => {
        print(CartPage);
    },

});
router.resolve();