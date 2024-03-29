// import axios from "axios";
import axios from "axios";
import { add } from "../../../api/product";
import formAdd from "../../../components/addpro";
import { reRender } from "../../../ultils";
import ListProduct from "./list";

const AddProduct = {

    render() {
        return /* html */ `
        <div class="tw-w-5xl tw-mx-auto tw-min-h-screen tw-flex tw-flex-col">
        <!--Header Section Starts Here-->
        <header class="tw-bg-black">
            <div class="tw-flex tw-justify-between">
                <div class="tw-p-1 tw-mx-5 tw-inline-flex tw-items-center">
                    <h1 class="tw-text-white tw-p-2">Vina Watch</h1>
                </div>
                <div class="dropdown relative">
                    <img class="tw-inline-block tw-h-8 tw-w-8 tw-rounded-full" src="https://avatars0.githubusercontent.com/u/4323180?s=460&v=4" alt="">
                    <a class="tw-mr-28 tw-my-6 bg-blue-600 text-white font-medium text-xs tw-no-underline uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg active:text-white transition duration-150 ease-in-out flex items-center whitespace-nowrap " type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false" >
                        Đức Dũng
                    </a>
                    <ul class="tw-bg-neutral-900 dropdown-menu min-w-max absolute hidden text-base z-50 tw-float-right tw-p-0 list-none text-left rounded-lg shadow-lg mt-1 hidden   border-none " aria-labelledby="dropdownMenuButton2">
                        <li class="">
                            <a class=" tw-underline dropdown-item text-sm tw-p-0.5 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">Về trang chủ</a>
                        </li>
                        <li>
                            <a class="tw-underline dropdown-item text-sm tw-p-0.5 font-normal block w-full whitespace-nowrap bg-transparent text-gray-700 hover:bg-gray-100" href="#">Log out</a>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
        <!--/Header-->

        <div class="tw-flex tw-flex-1">
            <!--Sidebar-->
            <aside id="sidebar" class="tw-p-0 bg-side-nav tw-w-1/2 md:tw-w-1/6 lg:tw-w-1/6 tw-border-r border-side-nav tw-hidden md:tw-block lg:tw-block">
                <ul class="list-reset tw-flex tw-flex-col tw-p-0">
                    <li class=" tw-w-full tw-h-full tw-py-3 tw-px-2 tw-border-b tw-border-light-border tw-bg-white">
                        <a href="/admin/dashboard"
                           class="tw-font-sans tw-font-hairline hover:tw-font-normal tw-text-sm text-nav-item tw-no-underline">
                            <i class="fas fa-tachometer-alt tw-float-left tw-m-2"></i>
                            Dashboard
                            <span><i class="fas fa-angle-right tw-float-right"></i></span>
                        </a>
                    </li>
                    <li class="tw-w-full tw-h-full tw-py-3 tw-px-2 tw-border-b tw-border-light-border">
                        <a href="/admin/product"
                           class="tw-font-sans tw-font-hairline hover:tw-font-normal tw-text-sm text-nav-item tw-no-underline">
                            <i class="fab fa-wpforms tw-float-left tw-m-2"></i>
                            Products
                            <span><i class="fa fa-angle-right tw-float-right"></i></span>
                        </a>
                    </li>
                    <li class="tw-w-full tw-h-full tw-py-3 tw-px-2 tw-border-b tw-border-light-border">
                        <a href="/admin/user"
                           class="tw-font-sans tw-font-hairline hover:tw-font-normal tw-text-sm text-nav-item tw-no-underline">
                            <i class="fas fa-grip-horizontal tw-float-left tw-m-2"></i>
                            Users
                            <span><i class="fa fa-angle-right tw-float-right"></i></span>
                        </a>
                    </li>
                    <li class="tw-w-full tw-h-full tw-py-3 tw-px-2 tw-border-b tw-border-light-border">
                        <a href="/admin/post"
                           class="tw-font-sans tw-font-hairline hover:tw-font-normal tw-text-sm text-nav-item tw-no-underline">
                            <i class="fas fa-table tw-float-left tw-m-2"></i>
                            Posts
                            <span><i class="fa fa-angle-right tw-float-right"></i></span>
                        </a>
                    </li>
                    <li class="tw-w-full tw-h-full tw-py-3 tw-px-2 tw-border-b tw-border-light-border">
                        <a href="ui.html"
                           class="tw-font-sans tw-font-hairline hover:tw-font-normal tw-text-sm text-nav-item tw-no-underline">
                            <i class="fab fa-uikit tw-float-left tw-m-2"></i>
                            Ui components
                            <span><i class="fa fa-angle-right tw-float-right"></i></span>
                        </a>
                    </li>
                </ul>
            </aside>
            <!--/Sidebar-->
            <!--Main-->
            <main class="bg-white-300 tw-flex-1 tw-p-3 tw-overflow-hidden">
                <div class="tw-flex tw-flex-col">
                ${formAdd.render()}
                </div>
            </main>
            <!--/Main-->
        </div>
    </div>
        `;
    },
    afterRender() {
        const formAddPro = document.querySelector("#form-add-pro");
        const CLOUDINARY_API = "https://api.cloudinary.com/v1_1/dfwailscz/image/upload";
        const CLOUDINARY_PRESET = "assignment";

        formAddPro.addEventListener("submit", async (e) => {
            e.preventDefault();
            // lấy giá trị input file
            const file = document.querySelector("#img").files[0];
            // tạo object và gán giá trị vào các thuộc tính formData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", CLOUDINARY_PRESET);

            // call API clouddinary để đẩy ảnh lên
            const { data } = await axios.post(CLOUDINARY_API, formData, {
                headers: {
                    "Content-Type": "application/form-data",
                },
            });
            // call API thêm bài viết
            add({
                name: document.querySelector("#name").value,
                img: data.url,
                price: document.querySelector("#price").value,
                desc: document.querySelector("#desc").value,
                quantity: document.querySelector("#quantity").value,
            });
            window.location.href = "/admin/product";
            reRender(ListProduct, "#content");
        });
    },
};
export default AddProduct;