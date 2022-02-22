// import axios from "axios";
import { getAll } from "../api/product";

const ProTable = {
    async render() {
        const { data } = await getAll();
        return /* html */ `
            <div class="tw-bg-white tw-shadow-md tw-rounded tw-mt-3" id="content">
            <a href="/admin/product/add">Thêm mới</a>
                    <table class="tw-min-w-max tw-w-full tw-table-auto">
                        <thead>
                            <tr class="tw-bg-gray-200 tw-text-gray-600 tw-uppercase tw-text-sm tw-leading-normal">
                                <th class="tw-py-3 tw-px-2 tw-text-center">Stt</th>
                                <th class="tw-py-3 tw-px-6 tw-text-left">Ảnh</th>
                                <th class="tw-py-3 tw-px-6 tw-text-left tw-max-w-xs tw-max-h-14 tw-line-clamp-2">Tên</th>
                                <th class="tw-py-3 tw-px-6 tw-text-center">Giá</th>
                                <th class="tw-py-3 tw-px-6 tw-text-center">Số lượng</th>
                                <th class="tw-py-3 tw-px-6 tw-text-center tw-max-w-xs tw-max-h-14 tw-line-clamp-2">Mô tả</th>
                                <th class="tw-py-3 tw-px-6 tw-text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="tw-text-gray-600 tw-text-sm tw-font-light">
                            ${data.map((pro, index) => `
                            <tr class="tw-border-b tw-border-gray-200 hover:tw-bg-gray-100">
                                <td class="tw-py-3 tw-px-6 tw-text-center">
                                    <span>${index + 1}</span>
                                </td>
                                <td class="tw-py-3 tw-px-6 tw-text-left">
                                    <div class="tw-flex tw-items-center">
                                        <div class="tw-mr-2">
                                            <img class="tw-w-14 tw-h-14" src="${pro.img}"/>
                                        </div>
                                    </div>
                                </td>
                                <td class="tw-py-3 tw-px-6 tw-text-left tw-max-w-xs tw-max-h-14 tw-line-clamp-2">
                                    <span class="tw-font-semibold">${pro.name}</span>
                                </td>
                                <td class="tw-py-3 tw-px-6 tw-text-center">
                                    <span>${pro.price}</span>
                                </td>
                                <td class="tw-py-3 tw-px-6 tw-text-center">
                                    <span>${pro.quantity}</span>
                                </td>
                                <td class="tw-py-3 tw-px-6 tw-text-left tw-max-w-xs tw-max-h-14 tw-line-clamp-2">
                                    <span class ="tw-text-justify">${pro.desc}</span>
                                </td>
                                <td class="tw-py-3 tw-px-6 tw-text-center">
                                    <div class="tw-flex item-center tw-justify-center">
                                        <div class="tw-w-4 tw-mr-2 tw-transform hover:tw-text-purple-500 hover:tw-scale-110">
                                            <a href="/admin/product/${pro.id}/edit">
                                                <svg he xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                </svg>
                                            </a>
                                        </div>
                                        <div class="tw-w-4 tw-mr-2 tw-transform hover:tw-text-purple-500 hover:tw-scale-110">
                                            <svg class="remove" data-id="${pro.id}" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            `).join("")}
                        </tbody>
                    </table>
                </div>
        `;
    },
};
export default ProTable;