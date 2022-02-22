const Header = {
    render() {
        return /* html */ `
        <header class="tw-bg-gray-300">
            <div class="header_top tw-grid tw-grid-cols-2 tw-gap-6 tw-max-w-6xl tw-mx-auto tw-py-2">
                <div class="header_top_left">
                    <ul class="tw-my-0">
                        <li class="tw-inline-block tw-mr-9"><i class="fa fa-envelope tw-mr-2"></i>dungcon27@gmail.com</li>
                        <li class="tw-inline-block"><i class="fas fa-phone-alt tw-mr-2 bg"></i>0327.025.224</li>
                    </ul>
                </div>

                <div class="header_top_right tw-text-right">
                    <div class="header_top_right_social tw-inline-block tw-mr-7">
                        <a href="#" class="tw-inline-block tw-mr-2 tw-text-black"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="tw-inline-block tw-mr-2 tw-text-black"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="tw-inline-block tw-mr-2 tw-text-black"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" class="tw-inline-block tw-mr-2 tw-text-black"><i class="fab fa-pinterest-p"></i></a>
                    </div>
                    <div class="header_top_right_language tw-inline-block tw-mr-7">
                        <img src="./src/img/Untitled-1.png" alt="" class="tw-inline-block tw-mr-1">
                        <div class="tw-mr-1 tw-inline-block">Vietnamese</div>
                        <span class="fas fa-angle-down"></span>
                        <ul>
                            <li><a href="#">Spanis</a></li>
                            <li><a href="#">English</a></li>
                        </ul>
                    </div>
                    <div class="header_top_right_auth tw-inline-block tw-mr-7">
                        ${localStorage.getItem("user") ? `
                            <a href="/signin" class="hover:tw-text-black tw-text-black tw-no-underline">
                                <i class="fa fa-user tw-mr-2 hover:tw-text-orange-700"></i>
                                <span id="accountInfo"></span>
                            </a>
                        ` : `
                            <a href="/signin" class="hover:tw-text-black tw-text-black tw-no-underline">
                                <i class="fa fa-user tw-mr-2 hover:tw-text-orange-700"></i>
                                Đăng Nhập
                            </a>`}
                        
                    </div>
                </div>
            </div>
            <div class="header_bottom tw-bg-white tw-grid tw-grid-cols-4 tw-gap-2">
                <div class="header__logo tw-flex tw-justify-center">
                    <a href="/"><img src="https://res.cloudinary.com/dfwailscz/image/upload/v1645396195/dung/logo_dv5hv5.png" alt=""></a>
                </div>
                <div class="header__search tw-col-span-2 tw-flex tw-justify-center tw-items-center">
                        <div class="tw-w-9/12">
                            <form>
                                <div class="input-group tw-relative tw-flex tw-items-stretch tw-w-full">
                                    <input type="search" class="form-control tw-relative tw-flex-auto tw-min-w-0 tw-block tw-w-full tw-px-3 tw-py-1.5 tw-text-base tw-font-normal tw-text-gray-700 tw-bg-white tw-bg-clip-padding tw-border tw-border-solid tw-transition tw-ease-in-out tw-m-0 focus:tw-border-none focus:tw-text-gray-700 focus:tw-bg-white focus:tw-border-none tw-shadow-sm" placeholder="Tìm kiếm" aria-label="Search" aria-describedby="button-addon2">
                                    <button class=" tw-inline-block tw-px-6 tw-py-2.5 tw-bg-orange-700 tw-text-white tw-font-medium tw-text-xs tw-leading-tight tw-uppercase tw-rounded tw-shadow-md hover:tw-bg-orange-600 hover:tw-shadow-lg focus:tw-bg-orange-700  focus:tw-shadow-lg focus:tw-outline-none focus:tw-ring-0 active:tw-bg-orange-800 active:tw-shadow-lg tw-transition tw-duration-150 tw-ease-in-out tw-flex tw-items-center" type="button" id="button-addon2">
                                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="tw-w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </form>
                        </div>
                </div>
                <div class="header__cart tw-flex tw-justify-center tw-items-center ">
                    <div class="tw-text-right tw-inline-block">
                        <ul class="tw-inline-block tw-mr-3">
                            <li class="tw-inline-block tw-mr-1.5"><a href="#" class="tw-text-black hover:tw-text-orange-700"><i class="fa fa-heart tw-text-xl"></i> <span>1</span></a></li>
                            <li class="tw-inline-block"><a href="#" class="tw-text-black hover:tw-text-orange-700"><i class="fa fa-shopping-bag tw-text-xl"></i> <span>3</span></a></li>
                        </ul>
                        <div class="header__cart__price tw-inline-block">Total: <span class="tw-font-semibold">150.000.000</span></div>
                    </div>
                </div>
            </div>
        </header>
        `;
    },
    afterRender() {
        console.log(1);
        console.log(JSON.parse(localStorage.getItem("user")));

        // lấy thông tin username từ localStorage và hiển thị ra ngoài
        const { username } = JSON.parse(localStorage.getItem("user"));
        document.querySelector("#accountInfo").innerHTML = username;
    },
};

export default Header;