import Footer from "../components/footer";
import Header from "../components/header";
import NavMenu from "../components/nav";
import Recome from "../components/recom";

const GioiThieu = {
    render() {
        return /* html */ `
            ${Header.render()}
            ${NavMenu.render()}
            ${Recome.render()}
            ${Footer.render()}
        `;
    },
};
export default GioiThieu;