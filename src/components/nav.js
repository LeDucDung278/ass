const NavMenu = {
    render() {
        return /* html */ `
            <nav class="tw-flex tw-justify-center tw-items-center tw-bg-neutral-900 ">
                <div class="tw-hidden tw-justify-between tw-items-center tw-w-full md:tw-flex md:tw-w-auto md:tw-order-1 " id="mobile-menu-2">
                    <ul class="tw-flex tw-flex-col tw-my-0 md:tw-flex-row md:tw-space-x-8 md:tw-mt-0 md:tw-text-sm md:tw-font-medium">
                        <li>
                        <a href="#" class="tw-uppercase tw-block tw-p-3 tw-text-orange-700 hover:tw-bg-white hover:tw-text-orange-700 tw-no-underline" aria-current="page">Trang chủ</a>
                        </li>
                        <li>
                        <a href="/gioi-thieu" class="tw-uppercase tw-block tw-p-3 tw-text-white dark:tw-border-gray-700 hover:tw-bg-white hover:tw-text-orange-700 tw-no-underline">GIỚI THIỆU</a>
                        </li>
                        <li>
                        <a href="/dong-ho-nam" class="tw-uppercase tw-block tw-p-3 tw-text-white dark:tw-border-gray-700 hover:tw-bg-white hover:tw-text-orange-700 tw-no-underline">đồng hồ nam</a>
                        </li>
                        <li>
                        <a href="/dong-ho-nu" class="tw-uppercase tw-block tw-p-3 tw-text-white dark:tw-border-gray-700 hover:tw-bg-white hover:tw-text-orange-700 tw-no-underline">đồng hồ nữ</a>
                        </li>
                        <li>
                        <a href="/blogs" class="tw-uppercase tw-block tw-p-3 tw-text-white dark:tw-border-gray-700 hover:tw-bg-white hover:tw-text-orange-700 tw-no-underline">Blog</a>
                        </li>
                        <li>
                        <a href="/lien-he" class="tw-uppercase tw-block tw-p-3 tw-text-white dark:tw-border-gray-700 hover:tw-bg-white hover:tw-text-orange-700 tw-no-underline">liên hệ</a>
                        </li>
                    </ul>
                </div>
            </nav>
        `;
    },
};

export default NavMenu;