import toastr from "toastr";
import { get } from "../api/product";
import Footer from "../components/footer";
import Header from "../components/header";
import NavMenu from "../components/nav";
import { addTocart } from "../ultils/cart";
import "toastr/build/toastr.min.css";

const ProductList = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
            ${Header.render()}
            ${NavMenu.render()}

            <div class="container tw-mx-auto tw-flex tw-flex-col md:tw-flex-row tw-mt-18">
                <div class=" tw-flex tw-flex-col lg:tw-w-3/5 tw-justify-center tw-w-full ">
                    <div class="container">
                        <div class="tw-relative tw-flex tw-flex-col tw-min-w-0 tw-break-words tw-w-full">
                            <div class="tw-flex-auto tw-p-5 lg:tw-p-10">
                                <img src="${data.img}" alt="contact image">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tw-flex tw-flex-col tw-w-full lg:tw-w-2/5 tw-p-8">
                    <p class="tw-text-4xl tw-font-semibold tw-text-orange-700 tw-my-2 tw-leading-relaxed md:tw-leading-snug">${data.name}</p>
                    <h3 class="tw-text-2xl tw-font-semibold tw-mb-7">${data.price}</h3>
                    <div class="tw-flex tw-flex-rowtw-h-8">
                        <input type="number" value="2" id="inputValue" class="tw-font-semibold tw-text-center tw-text-gray-700 tw-bg-gray-200 tw-outline-none focus:tw-outline-none hover:tw-text-black focus:tw-text-black" />
                    </div>
                    <small class="tw-text-black">${data.desc}</small>
                    <div class="tw-flex tw-gap-0.5 tw-mt-4">
                        <button id="btnAddToCart" class="tw-bg-indigo-600 hover:tw-bg-indigo-500 focus:tw-outline-none tw-transition tw-text-white tw-uppercase tw-px-8 tw-py-3">add to cart</button>
                    </div>
                </div>
            </div>

            ${Footer.render()}
        `;
    },
    afterRender(id) {
        const btnAddToCart = document.querySelector("#btnAddToCart");
        const inputValue = document.querySelector("#inputValue");
        btnAddToCart.addEventListener("click", async () => {
            const { data } = await get(id);
            addTocart({ ...data, quantity: inputValue.value ? +inputValue.value : 1 }, () => {
                toastr.success("Đã thêm");
            });
        });
    },

};
export default ProductList;