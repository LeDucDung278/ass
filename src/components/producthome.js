import { getAll } from "../api/product";

const ProductHome = {
    async render() {
        const { data } = await getAll();

        return /* html */ `
            <main class="tw-mb-4">
                <div class="products">
                    <div class="product__good tw-mx-auto container mt-3">
                        <h2 class="tw-font-bold tw-text-3xl">Sản phẩm bán chạy</h2>
                        <div class="product__good-list">
                            <div class="tw-mt-6 tw-grid tw-grid-cols-4 tw-gap-2">
                                ${data.map((pro) => `
                                <div class="group tw-relative">
                                    <div class="tw-w-full min-h-80 tw-bg-gray-200 aspect-w-1 aspect-h-1 tw-rounded-md tw-overflow-hidden">
                                        <img src="${pro.img}" alt="Front of men&#039;s Basic Tee in black." class="tw-w-full tw-h-full tw-object-center tw-object-cover lg:tw-w-full lg:tw-h-full hover:tw-opacity-75">
                                    </div>
                                    <div class="tw-flex tw-justify-center">
                                        <div class="text-center">
                                        <h3 class="tw-text-sm tw-text-gray-700 tw-mb-0">
                                            <a href="/product/${pro.id}">
                                            <span aria-hidden="true" class="tw-absolute tw-inset-0"></span>
                                            ${pro.name}
                                            </a>
                                        </h3>
                                        <p class="tw-text-sm tw-text-gray-500">${pro.price}</p>
                                        <button class="tw-bg-blue-500 hover:tw-bg-red-500 tw-text-white tw-font-bold tw-py-0.5 tw-px-5 tw-border tw-border-blue-700 tw-rounded">
                                            Thêm vào giỏ
                                        </button>
                                        </div>
                                    </div>
                                </div>
                                `).join("")}
                            </div>
                        </div>
                    </div>
                </div>
            </main>    
        `;
    },
};

export default ProductHome;