import { signin } from "../api/user";

const SignIn = {
    render() {
        return /* html */ `
        <div class="tw-flex tw-items-center tw-min-h-screen tw-bg-white">
            <div class="container tw-mx-auto">
                <div class="tw-max-w-md tw-mx-auto tw-my-10">
                    <div class="tw-text-center">
                        <h1 class="tw-my-3 tw-text-3xl tw-font-semibold tw-text-gray-700">Đăng nhập tài khoản</h1>
                    </div>
                    <div class="tw-m-7">
                        <form id ="form-sign-in">
                            <div class="tw-mb-6">
                                <label for="email" class="tw-block tw-mb-2 tw-text-sm tw-text-gray-600 dark:tw-text-gray-400">Email</label>
                                <input type="email" name="email" id="email" placeholder="Email" class="tw-w-full tw-px-3 tw-py-2 tw-placeholder-gray-300 tw-border tw-border-gray-300 tw-rounded-md " />
                            </div>
                            <div class="tw-mb-6">
                                <div class="tw-flex tw-justify-between tw-mb-2">
                                    <label for="password" class="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400">Password</label>
                                    <a href="#!" class="tw-text-sm tw-text-gray-400 focus:tw-outline-none focus:tw-text-indigo-500 hover:tw-text-orange-700">Quên mật khẩu?</a>
                                </div>
                                <input type="password" name="password" id="password" placeholder="Your Password" class="tw-w-full tw-px-3 tw-py-2 tw-placeholder-gray-300 tw-border tw-border-gray-300 tw-rounded-md" />
                            </div>
                            <div class="tw-mb-6">
                                <button class="tw-w-full tw-px-3 tw-py-4 tw-text-white tw-bg-indigo-500 tw-rounded-md focus:tw-bg-indigo-600 focus:tw-outline-none">Đăng Nhập</button>
                            </div>
                            <p class="tw-text-sm tw-text-center tw-text-gray-400">Bạn chưa có tài khoản? <a href="/signup" class="tw-text-indigo-400 focus:tw-outline-none focus:tw-underline focus:tw-text-indigo-500 dark:focus:tw-border-indigo-800 hover:tw-text-orange-700">Đăng kí</a>.</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        `;
    },
    afterRender() {
        const formSignin = document.querySelector("#form-sign-in");
        formSignin.addEventListener("submit", (e) => {
            e.preventDefault();
            signin({
                email: document.querySelector("#email").value,
                password: document.querySelector("#password").value,
            });
        });
    },

};
export default SignIn;