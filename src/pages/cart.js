import toastr from "toastr";
import "toastr/build/toastr.min.css";
import { reRender } from "../ultils";
import { decreaseQuantity, increaseQuantity, removeItemInCart } from "../ultils/cart";

const CartPage = {
    render() {
        let cart = [];
        if (localStorage.getItem("cart")) {
            cart = JSON.parse(localStorage.getItem("cart"));
        }
        return `
        <div class="tw-flex tw-justify-center tw-my-6">
        <div class="tw-flex tw-flex-col tw-w-full tw-p-8 tw-text-gray-800 tw-bg-white tw-shadow-lg pin-r pin-y md:tw-w-4/5 lg:tw-w-4/5">
          <div class="tw-flex-1">
            <table class="tw-w-full tw-text-sm lg:tw-text-base" cellspacing="0">
              <thead>
                <tr class="tw-h-12 tw-uppercase">
                  <th class="tw-hidden md:tw-table-cell"></th>
                  <th class="tw-text-left">Tên</th>
                  <th class="lg:tw-text-right tw-text-left tw-pl-5 lg:tw-pl-0">
                    <span class="lg:tw-hidden" title="Quantity">Qtd</span>
                    <span class="tw-hidden lg:tw-inline">Số lượng</span>
                  </th>
                  <th class="tw-hidden tw-text-right md:tw-table-cell">Gía</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                ${cart.map((item) => `
                <tr>
                  <td class="tw-hidden tw-pb-4 md:tw-table-cell">
                      <img src="${item.img}" class="tw-w-20 tw-rounded" alt="Thumbnail">
                  </td>
                  <td>
                      <p class="tw-mb-2 md:tw-ml-4">${item.name}</p>
                  </td>
                  <td class="tw-justify-center md:tw-justify-end md:tw-flex tw-mt-6">
                    <div class="tw-w-20 tw-h-10">
                      <div class="tw-relative tw-flex tw-flex-row tw-w-full tw-h-8">
                      <input type="number" value=" ${item.quantity}" 
                        class="tw-w-full tw-font-semibold tw-text-center tw-text-gray-700 tw-bg-gray-200 tw-outline-none focus:tw-outline-none hover:tw-text-black focus:tw-text-black" />
                      </div>
                    </div>
                  </td>
                  <td class="tw-hidden tw-text-right md:tw-table-cell">
                    <span class="tw-text-sm lg:tw-text-base tw-font-medium">
                      ${item.price}
                    </span>
                  </td>
                  <td>
                    <button data-id="${item.id}" class="btn btn-increase">Tăng</button>
                    <button data-id="${item.id}" class="btn btn-decrease">Giảm</button>
                  </td>
                  <td>
                      <button data-id="${item.id}" class="btn btn-remove">Xóa</button>
                  </td>
                </tr> 
                `).join("")}
              </tbody>
            </table>
            <hr class="tw-pb-6 tw-mt-6">
            <div class="tw-my-4 tw-mt-6 tw--mx-2 lg:tw-flex">
              <div class="lg:tw-px-2 lg:tw-w-1/2">
                <div class="tw-p-4 tw-bg-gray-100 tw-rounded-full">
                  <h1 class="tw-ml-2 tw-font-bold tw-uppercase">Coupon Code</h1>
                </div>
                <div class="tw-p-4">
                  <p class="tw-mb-4 tw-italic">If you have a coupon code, please enter it in the box below</p>
                  <div class="tw-justify-center md:tw-flex">
                    <form action="" method="POST">
                        <div class="tw-flex tw-items-center tw-w-full tw-h-13 tw-pl-3 tw-bg-white tw-bg-gray-100 tw-border tw-rounded-full">
                          <input type="coupon" name="code" id="coupon" placeholder="Apply coupon" value="90off"
                                  class="tw-w-full tw-bg-gray-100 tw-outline-none tw-appearance-none focus:tw-outline-none active:tw-outline-none"/>
                            <button type="submit" class="tw-text-sm tw-flex tw-items-center tw-px-3 tw-py-1 tw-text-white tw-bg-gray-800 tw-rounded-full tw-outline-none md:tw-px-4 hover:tw-bg-gray-700 focus:tw-outline-none active:tw-outline-none">
                              <svg aria-hidden="true" data-prefix="fas" data-icon="gift" class="tw-w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M32 448c0 17.7 14.3 32 32 32h160V320H32v128zm256 32h160c17.7 0 32-14.3 32-32V320H288v160zm192-320h-42.1c6.2-12.1 10.1-25.5 10.1-40 0-48.5-39.5-88-88-88-41.6 0-68.5 21.3-103 68.3-34.5-47-61.4-68.3-103-68.3-48.5 0-88 39.5-88 88 0 14.5 3.8 27.9 10.1 40H32c-17.7 0-32 14.3-32 32v80c0 8.8 7.2 16 16 16h480c8.8 0 16-7.2 16-16v-80c0-17.7-14.3-32-32-32zm-326.1 0c-22.1 0-40-17.9-40-40s17.9-40 40-40c19.9 0 34.6 3.3 86.1 80h-86.1zm206.1 0h-86.1c51.4-76.5 65.7-80 86.1-80 22.1 0 40 17.9 40 40s-17.9 40-40 40z"/></svg>
                              <span class="tw-font-medium">Apply coupon</span>
                            </button>
                        </div>
                    </form>
                  </div>
                </div>
                <div class="tw-p-4 tw-mt-6 tw-bg-gray-100 tw-rounded-full">
                  <h1 class="tw-ml-2 tw-font-bold tw-uppercase">Instruction for seller</h1>
                </div>
                <div class="tw-p-4">
                  <p class="tw-mb-4 tw-italic">If you have some information for the seller you can leave them in the box below</p>
                  <textarea class="tw-w-full tw-h-24 tw-p-2 tw-bg-gray-100 tw-rounded"></textarea>
                </div>
              </div>
              <div class="lg:tw-px-2 lg:tw-w-1/2">
                <div class="tw-p-4 tw-bg-gray-100 tw-rounded-full">
                  <h1 class="tw-ml-2 tw-font-bold tw-uppercase">Order Details</h1>
                </div>
                <div class="tw-p-4">
                  <p class="tw-mb-6 tw-italic">Shipping and additionnal costs are calculated based on values you have entered</p>
                    <div class="tw-flex tw-justify-between tw-border-b">
                      <div class="lg:tw-px-4 lg:tw-py-2 tw-m-2 tw-text-lg lg:tw-text-xl tw-font-bold tw-text-center tw-text-gray-800">
                        Subtotal
                      </div>
                      <div class="lg:tw-px-4 lg:tw-py-2 tw-m-2 lg:tw-text-lg tw-font-bold tw-text-center tw-text-gray-900">
                        148,827.53€
                      </div>
                    </div>
                      <div class="tw-flex tw-justify-between tw-pt-4 tw-border-b">
                        <div class="tw-flex lg:tw-px-4 lg:tw-py-2 tw-m-2 tw-text-lg lg:tw-text-xl tw-font-bold tw-text-gray-800">
                          <form action="" method="POST">
                            <button type="submit" class="tw-mr-2 tw-mt-1 lg:tw-mt-2">
                              <svg aria-hidden="true" data-prefix="far" data-icon="trash-alt" class="tw-w-4 tw-text-red-600 hover:tw-text-red-800" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M268 416h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12zM432 80h-82.41l-34-56.7A48 48 0 00274.41 0H173.59a48 48 0 00-41.16 23.3L98.41 80H16A16 16 0 000 96v16a16 16 0 0016 16h16v336a48 48 0 0048 48h288a48 48 0 0048-48V128h16a16 16 0 0016-16V96a16 16 0 00-16-16zM171.84 50.91A6 6 0 01177 48h94a6 6 0 015.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0012-12V188a12 12 0 00-12-12h-24a12 12 0 00-12 12v216a12 12 0 0012 12z"/></svg>
                            </button>
                          </form>
                          Coupon "90off"
                        </div>
                        <div class="lg:tw-px-4 lg:tw-py-2 tw-m-2 lg:tw-text-lg tw-font-bold tw-text-center tw-text-green-700">
                          -133,944.77€
                        </div>
                      </div>
                      <div class="tw-flex tw-justify-between tw-pt-4 tw-border-b">
                        <div class="lg:tw-px-4 lg:tw-py-2 tw-m-2 tw-text-lg lg:tw-text-xl tw-font-bold tw-text-center tw-text-gray-800">
                          New Subtotal
                        </div>
                        <div class="lg:tw-px-4 lg:tw-py-2 tw-m-2 lg:tw-text-lg tw-font-bold tw-text-center tw-text-gray-900">
                          14,882.75€
                        </div>
                      </div>
                      <div class="tw-flex tw-justify-between tw-pt-4 tw-border-b">
                        <div class="lg:tw-px-4 lg:tw-py-2 tw-m-2 tw-text-lg lg:tw-text-xl tw-font-bold tw-text-center tw-text-gray-800">
                          Tax
                        </div>
                        <div class="lg:tw-px-4 lg:tw-py-2 tw-m-2 lg:tw-text-lg tw-font-bold tw-text-center tw-text-gray-900">
                          2,976.55€
                        </div>
                      </div>
                      <div class="tw-flex tw-justify-between tw-pt-4 tw-border-b">
                        <div class="lg:tw-px-4 lg:tw-py-2 tw-m-2 tw-text-lg lg:tw-text-xl tw-font-bold tw-text-center tw-text-gray-800">
                          Total
                        </div>
                        <div class="lg:tw-px-4 lg:tw-py-2 tw-m-2 lg:tw-text-lg tw-font-bold tw-text-center tw-text-gray-900">
                          17,859.3€
                        </div>
                      </div>
                    <a href="#">
                      <button class="tw-flex tw-justify-center tw-w-full tw-px-10 tw-py-3 tw-mt-6 tw-font-medium tw-text-white tw-uppercase tw-bg-gray-800 tw-rounded-full tw-shadow item-center hover:tw-bg-gray-700 focus:tw-shadow-outline focus:tw-outline-none">
                        <svg aria-hidden="true" data-prefix="far" data-icon="credit-card" class="tw-w-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M527.9 32H48.1C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48.1 48h479.8c26.6 0 48.1-21.5 48.1-48V80c0-26.5-21.5-48-48.1-48zM54.1 80h467.8c3.3 0 6 2.7 6 6v42H48.1V86c0-3.3 2.7-6 6-6zm467.8 352H54.1c-3.3 0-6-2.7-6-6V256h479.8v170c0 3.3-2.7 6-6 6zM192 332v40c0 6.6-5.4 12-12 12h-72c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h72c6.6 0 12 5.4 12 12zm192 0v40c0 6.6-5.4 12-12 12H236c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h136c6.6 0 12 5.4 12 12z"/></svg>
                        <span class="tw-ml-2 tw-mt-5px">Procceed to checkout</span>
                      </button>
                    </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

        
        `;
    },
    afterRender() {
        const btns = document.querySelectorAll(".btn");
        btns.forEach((btn) => {
            const { id } = btn.dataset;
            btn.addEventListener("click", () => {
                if (btn.classList.contains("btn-increase")) {
                    increaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Tăng số lượng thành công");
                    });
                } else if (btn.classList.contains("btn-decrease")) {
                    decreaseQuantity(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Giảm số lượng thành công");
                    });
                } else {
                    removeItemInCart(id, () => {
                        reRender(CartPage, "#app");
                        toastr.success("Xóa sản phẩm thành công");
                    });
                }
            });
        });
    },
};
export default CartPage;