const Footer = {
    render() {
        return /* html */`
        <footer class="tw-border-t tw-border-gray-200 tw-bg-black">
        <div class="tw-text-white container tw-flex tw-flex-col tw-flex-wrap tw-px-4 tw-mx-auto md:tw-items-center lg:tw-items-start md:tw-flex-row md:tw-flex-nowrap">
            <div class="tw-flex-shrink-0 tw-w-64 tw-mx-auto tw-text-center md:tw-mx-0 md:tw-text-left tw-mt-4">
                <h2 class="tw-mb-2 tw-font-bold tw-text-2xl tw-pl-7">
                    Thông tin liên hệ
                  </h2>
                  <ul class="tw-mb-8 tw-space-y-2 tw-text-sm tw-list-none">
                        <li class="tw-flex cursor-pointer">
                            <svg class="tw-h-6 tw-w-6 tw-text-white tw-mr-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />  <circle cx="12" cy="10" r="3" /></svg>
                            <a class="tw-text-white hover:tw-text-orange-700 tw-no-underline tw-cursor-pointer">30 Phạm Văn Đông, Mai Dịch, Cầu Giấy, Hà Nội</a>
                        </li>
                        <li class="tw-flex cursor-pointer">
                            <svg class="tw-h-6 tw-w-6 text-white tw-mr-2"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round">  <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />  <line x1="12" y1="18" x2="12.01" y2="18" /></svg>
                            <a class="tw-text-white hover:tw-text-orange-700 tw-no-underline tw-cursor-pointer">0327-025-224</a>
                        </li>
                        <li class="tw-flex cursor-pointer">
                            <svg class="tw-mr-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                            width="24" height="24"
                            viewBox="0 0 172 172"
                            style=" fill:#000000;"><g fill="none" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><path d="M0,172v-172h172v172z" fill="none"></path><g fill="#ffffff"><path d="M51.95833,28.66667c-6.86192,0 -12.54167,5.67975 -12.54167,12.54167v7.10368l-17.1958,10.2321c-4.88354,2.90329 -7.88753,8.17975 -7.88753,13.85742v54.8068c0,12.79944 10.49222,23.29167 23.29167,23.29167h96.75c12.79944,0 23.29167,-10.49222 23.29167,-23.29167v-54.79981c0,-5.68105 -3.00259,-10.95427 -7.88053,-13.85742c-0.00233,-0.00233 -0.00466,-0.00467 -0.007,-0.007l-17.1958,-10.2251v-7.11068c0,-6.86192 -5.67974,-12.54167 -12.54167,-12.54167zM51.95833,39.41667h68.08333c1.05724,0 1.79167,0.73442 1.79167,1.79167v41.08936l-35.83333,17.43376l-35.83333,-17.43376v-30.0944c0.09479,-0.57703 0.09479,-1.16565 0,-1.74268v-9.25228c0,-1.05724 0.73442,-1.79167 1.79167,-1.79167zM39.41667,60.82568v16.24398l-13.87142,-6.74674c0.43893,-1.03685 1.16357,-1.94244 2.1696,-2.54053zM132.58333,60.83268l11.70182,6.95671c1.00041,0.59706 1.72211,1.50009 2.1626,2.53353l-13.86442,6.74674zM25.08333,82.05274l58.5651,28.4917c1.48454,0.72219 3.21859,0.72219 4.70313,0l58.5651,-28.4917v45.1556c0,6.98772 -5.55394,12.54167 -12.54167,12.54167h-96.75c-6.98772,0 -12.54167,-5.55394 -12.54167,-12.54167z"></path></g></g></svg>
                            <a class="tw-text-white hover:tw-text-orange-700 tw-no-underline tw-cursor-pointer">vina@dongho.vn</a>
                        </li>
                  </ul>
            </div>
          <div class="tw-justify-between tw-w-full tw-mt-4 lg:tw-flex">
            <div class="tw-w-full tw-px-4 lg:tw-w-1/3 md:tw-w-1/2">
              <h2 class="tw-mb-2 tw-font-bold tw-text-2xl tw-text-white tw-pl-7">
                Liên kết
              </h2>
              <ul class="tw-mb-8 tw-space-y-2 tw-text-sm tw-list-none">
                <li class="tw-cursor-pointer">
                  <a class="tw-text-white hover:tw-text-orange-700 tw-no-underline">Giới thiệu</a>
                </li>
                <li class="tw-cursor-pointer">
                  <a class="tw-text-white hover:tw-text-orange-700 tw-no-underline">Đồng hồ nam</a>
                </li>
                <li class="tw-cursor-pointer">
                  <a class="tw-text-white hover:tw-text-orange-700 tw-no-underline">Đồng hồ nữ</a>
                </li>
                <li class="tw-cursor-pointer">
                  <a class="tw-text-white hover:tw-text-orange-700 tw-no-underline">Blogs</a>
                </li>
                <li class="tw-cursor-pointer">
                  <a class="tw-text-white hover:tw-text-orange-700 tw-no-underline">Liên hệ</a>
                </li>
              </ul>
            </div>
            <div class="tw-w-full tw-px-4 lg:tw-w-1/3 md:tw-w-1/2">
              <h2 class="tw-mb-2 tw-font-bold tw-text-2xl tw-text-white tw-pl-7">
                Hỗ trợ
              </h2>
              <ul class="tw-mb-8 tw-space-y-2 tw-text-sm tw-list-none">
                <li class="tw-cursor-pointer">
                  <a class="tw-text-white hover:tw-text-orange-700 tw-no-underline">Hướng dẫn mua hàng</a>
                </li>
                <li class="tw-cursor-pointer">
                  <a class="tw-text-white hover:tw-text-orange-700 tw-no-underline">Hướng dẫn thanh toán</a>
                </li>
                <li class="tw-cursor-pointer">
                  <a class="tw-text-white hover:tw-text-orange-700 tw-no-underline">Chính sách bảo hành</a>
                </li>
                <li class="tw-cursor-pointer">
                  <a class="tw-text-white hover:tw-text-orange-700 tw-no-underline">Chính sách đổi trả</a>
                </li>
                <li class="tw-cursor-pointer">
                  <a class="tw-text-white hover:tw-text-orange-700 tw-no-underline">Tư vấn khách hàng</a>
                </li>
              </ul>
            </div>
            <div class="tw-w-full tw-px-4 lg:tw-w-1/3 md:tw-w-1/2">
              <h2 class="tw-mb-2 tw-font-bold tw-text-white tw-text-2xl tw-pl-7">
                Tải ứng dụng trên
              </h2>
              <ul class="tw-mb-8 tw-space-y-2 tw-text-sm tw-list-none">
                    <li>
                        Ứng dụng Vina Watch hiện có sẵn trên Google Play & App Store. Tải nó ngay.
                    </li>
                    <li>
                    <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-googleplay.jpg" alt="">
                    </li>
                    <li>
                    <img src="http://mauweb.monamedia.net/donghohaitrieu/wp-content/uploads/2019/07/img-appstore.jpg" alt="">
                    </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
        `;
    },
};

export default Footer;