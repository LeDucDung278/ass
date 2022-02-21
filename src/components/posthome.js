import axios from "axios";

const PostHome = {
    async render() {
        const { data } = await axios.get("http://localhost:3334/posts");

        return /* html */ `
            <div class="container tw-mx-auto tw-p-12 tw-rounded-xl">
                <div class="sm:tw-grid sm:tw-grid-cols-2 lg:tw-grid-cols-3 tw-gap-4 tw-space-y-4 sm:tw-space-y-0">
                    ${data.map((post) => `
                    <div class="tw-bg-white">
                        <div>
                            <div class="tw-shadow-lg hover:tw-shadow-xl tw-transform tw-transition tw-duration-1000 hover:tw-scale-105">
                                <div>
                                    <img class="tw-w-full" src="${post.img}" />
                                    <div class="tw-px-4 tw-py-2">
                                        <a href="#" class="tw-text-xl font-gray-700 tw-font-bold tw-no-underline tw-text-black hover:tw-text-orange-700 tw-line-clamp-2">${post.title}</a>
                                        <p class="tw-mt-1 tw-text-sm tw-tracking-normal tw-line-clamp-2">${post.desc}</p>
                                        <a href="#"><button class="tw-mt-3 tw-w-full tw-text-center tw-bg-orange-700 tw-py-2 tw-rounded-lg tw-text-white">Xem chi tiết</button></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    `).join("")}
                </div>
            </div>
        `;
    },
};

export default PostHome;