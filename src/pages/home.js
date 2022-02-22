import Banner from "../components/banner";
import Footer from "../components/footer";
import Header from "../components/header";
import NavMenu from "../components/nav";
import ProductHome from "../components/producthome";

const Home = {
    async render() {
        return /* html */ `
            ${Header.render()}
            ${NavMenu.render()}
            ${Banner.render()}
            ${await ProductHome.render()}
            ${Footer.render()}
        `;
    },
    afterRender() {
        Header.afterRender();
    },
};
export default Home;