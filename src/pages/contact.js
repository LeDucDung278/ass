import Footer from "../components/footer";
import Header from "../components/header";
import NavMenu from "../components/nav";

const Contact = {
    render() {
        return /* html */ `
        ${Header.render()}
        ${NavMenu.render()}
        <div class="tw-text-gray-600 tw-mt-12">
            <div class="tw-flex tw-justify-center">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6262.5515918674855!2d105.7781514572654!3d21.043268539916216!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x313454ccae536be7%3A0x509333dd21815f6c!2zMzAgUGjhuqFtIFbEg24gxJDhu5NuZywgTWFpIEThu4tjaCwgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWksIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1645157545149!5m2!1sen!2s" width="90%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
            </div>
            <div class = "tw-mx-20 flex tw-justify-center">
                <form action="" class="form tw-bg-white tw-my-10">
                    <h3 class="tw-text-2xl tw-text-gray-900 tw-font-semibold tw-text-center">Liên hệ với chúng tôi</h3>
                    <div class="tw-flex tw-space-x-5 tw-mt-3">
                        <input type="text" name="" id="" placeholder="Họ tên" class="tw-bg-gray-300 tw-placeholder-zinc-700 tw-border tw-p-2  tw-w-1/2 ">
                        <input type="tel" name="" id="" placeholder="Email" class="tw-bg-gray-300 tw-placeholder-zinc-700 tw-border tw-p-2 tw-w-1/2">
                    </div>
                    <div class="tw-flex tw-space-x-5 tw-mt-3">
                        <input type="text" name="" id="" placeholder="Số điện thoại" class="tw-bg-gray-300 tw-placeholder-zinc-700 tw-border tw-p-2  tw-w-1/2">
                        <input type="tel" name="" id="" placeholder="Địa chỉ" class="tw-bg-gray-300 tw-placeholder-zinc-700 tw-border tw-p-2 tw-w-1/2">
                    </div>
                    <textarea name="" id="" cols="10" rows="3" placeholder="Lời nhắn" class="tw-bg-gray-300 tw-placeholder-zinc-700 tw-border tw-p-2 tw-mt-3 tw-w-full"></textarea>
                    <div class="tw-flex tw-items-center tw-justify-center tw-w-full">
                        <button class="tw-mt-9 tw-font-semibold tw-leading-none tw-text-white tw-py-4 tw-px-10 tw-bg-orange-700 tw-rounded hover:tw-bg-orange-600 focus:tw-ring-2 focus:tw-ring-offset-2 focus:tw-ring-blue-700 focus:tw-outline-none">
                            Gửi
                        </button>
                    </div>
                    
                </form>
            </div>
        </div>
        ${Footer.render()}
        `;
    },
};

export default Contact;