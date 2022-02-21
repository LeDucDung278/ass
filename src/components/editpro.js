import { get } from "../api/product";

const formEdit = {
    async render(id) {
        const { data } = await get(id);
        return /* html */ `
        <div class="tw-bg-white">
        <h1 class="tw-text-2xl">Chỉnh sửa sản phẩm</h1>
        <form id="form-add-pro">
            <div class="tw-mb-3">
                <label class="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 tw-text-gray-600 tw-font-semibold tw-mb-1">Tên sản phẩm<span class="tw-text-red-500">*</span></label></br>
                <input type="text" class="tw-border tw-border-gray-300 tw-p-2 tw-w-full" name="name" id="name" value="${data.name}">
            </div>

            <div class="tw-mb-3 tw-grid tw-grid-cols-2 tw-gap-6">
                <div>
                    <label class="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 tw-text-gray-600 tw-font-semibold tw-mb-1">Giá tiền<span class="tw-text-red-500">*</span></label></br>
                    <input type="text" class="tw-border tw-border-gray-300 tw-p-2 tw-w-full" name="price" id="price" value="${data.price}">
                </div>
                <!-- ... -->
                <div>
                    <label class="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 tw-text-gray-600 tw-font-semibold tw-mb-1">Số lượng<span class="tw-text-red-500">*</span></label></br>
                    <input type="text" class="tw-border tw-border-gray-300 tw-p-2 tw-w-full" name="quantity" id="quantity" value="${data.quantity}">
                </div>
            </div>

            <div class="tw-mb-3">
                <label class="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 tw-text-gray-600 tw-font-semibold tw-mb-1">Mô tả<span class="tw-text-red-500">*</span></label></br>
                <textarea class="tw-w-full sec tw-p-3 tw-h-60 tw-border tw-border-gray-300 "name="desc" id="desc">${data.desc}</textarea>
            </div>

            <div class="tw-mb-3 tw-flex tw-justify-center">
                <img src="https://cafesongao.com/wp-content/uploads/2021/07/tao-dang-bau-troi-1-min-300x400.jpg" alt="" class="tw-border-solid tw-border-white tw-border-2 tw--mt-3 tw-w-1/12">
            </div>

            <div class="tw-mb-3">
                <div class="tw-grid tw-grid-cols-1">
                    <label class="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 tw-text-gray-600 tw-font-semibold tw-mb-1">Upload Photo</label>
                    <div class='tw-flex tw-items-center tw-justify-center tw-w-full'>
                        <label class='tw-flex tw-flex-col tw-border-4 tw-border-dashed tw-w-full tw-h-32 hover:tw-bg-gray-100 hover:tw-border-orange-300 group'>
                            <div class='tw-flex tw-flex-col tw-items-center tw-justify-center tw-pt-7'>
                                <svg class="tw-w-10 tw-h-10 tw-text-purple-400 group-hover:tw-text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                <p class='tw-text-sm tw-text-gray-400 group-hover:tw-text-purple-600 tw-pt-1 tw-tracking-wider'>Select a photo</p>
                            </div>
                            <input type='file' class="tw-hidden" id="img" />
                        </label>
                    </div>
                </div>
            </div>

            <div class='tw-flex tw-items-center tw-justify-center  md:tw-gap-8 tw-gap-4 tw-pt-5 tw-pb-5'>
                <button class='tw-w-auto tw-bg-gray-500 hover:tw-bg-gray-700 tw-rounded-lg tw-shadow-xl tw-font-medium tw-text-white tw-px-4 tw-py-2'>Cancel</button>
                <button class='tw-w-auto tw-bg-orange-700 hover:tw-bg-orange-500 tw-rounded-lg tw-shadow-xl tw-font-medium tw-text-white tw-px-4 tw-py-2'>Create</button>
            </div>
        </form>
    </div>
</div>
</div>
        `;
    },
};
export default formEdit;