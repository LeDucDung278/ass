import Footer from "../components/footer";
import Header from "../components/header";
import NavMenu from "../components/nav";
import PostHome from "../components/posthome";

const Blog = {
    async render() {
        return /* html */ `
        ${Header.render()}
        ${NavMenu.render()}
        ${await PostHome.render()}
        ${Footer.render()}
        `;
    },
};

export default Blog;