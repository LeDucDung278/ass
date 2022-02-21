const SignUp = {
    render() {
        return /* html */ `
        <div class="tw-flex tw-items-center tw-min-h-screen tw-bg-white">
        <div class="container tw-mx-auto">
            <div class="tw-max-w-md tw-mx-auto tw-my-10">
                <div class="tw-text-center">
                    <h1 class="tw-my-3 tw-text-3xl tw-font-semibold tw-text-gray-700">Xin chào👋, vui lòng đăng kí tài khoản để sử dụng các chức năng</h1>
                </div>
                <div class="tw-m-7">
                    <form id="form-sign-up">
                        <div class="tw-mb-6">
                            <label for="username" class="tw-block tw-mb-2 tw-text-sm tw-text-gray-600 dark:tw-text-gray-400">User Name</label>
                            <input type="text" name="username" id="username" placeholder="User Name" class="tw-w-full tw-px-3 tw-py-2 tw-placeholder-gray-300 tw-border tw-border-gray-300 tw-rounded-md" />
                        </div>
                        <div class="tw-mb-6">
                            <label for="email" class="tw-block tw-mb-2 tw-text-sm tw-text-gray-600 dark:tw-text-gray-400">Email Address</label>
                            <input type="email" name="email" id="email" placeholder="Email" class="tw-w-full tw-px-3 tw-py-2 tw-placeholder-gray-300 tw-border tw-border-gray-300 tw-rounded-md" />
                        </div>
                        <div class="tw-mb-6">
                            <label for="password" class="tw-text-sm tw-text-gray-600 dark:tw-text-gray-400">Password</label>
                            <input type="password" name="password" id="password" placeholder="Your Password" class="tw-w-full tw-px-3 tw-py-2 tw-placeholder-gray-300 tw-border tw-border-gray-300 tw-rounded-md" />
                        </div>
                        <div class="tw-mb-6">
                            <button class="tw-w-full tw-px-3 tw-py-4 tw-text-white tw-bg-indigo-500 tw-rounded-md focus:tw-bg-indigo-600 focus:tw-outline-none">Đăng Kí</button>
                        </div>
                        <p class="tw-text-sm tw-text-center tw-text-gray-400">Bạn đã có tài khoản? <a href="/signin" class="tw-text-indigo-400 focus:tw-outline-none focus:tw-underline focus:tw-text-indigo-500 dark:focus:tw-border-indigo-800 hover:tw-text-orange-700">Đăng nhập</a>.</p>
                    </form>
                </div>
            </div>
        </div>
    </div>
        `;
    },

};
export default SignUp;