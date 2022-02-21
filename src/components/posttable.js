const PostTable = {
    render() {
        return /* html */ `
            <div class="tw-bg-white tw-shadow-md tw-rounded tw-mt-3">
                    <table class="tw-min-w-max tw-w-full tw-table-auto">
                        <thead>
                            <tr class="tw-bg-gray-200 tw-text-gray-600 tw-uppercase tw-text-sm tw-leading-normal">
                                <th class="tw-max-w-xs tw-max-h-20 tw-py-3 tw-px-6 tw-text-left">Tiêu đề</th>
                                <th class="tw-py-3 tw-px-6 tw-text-left">Ảnh bìa</th>
                                <th class="tw-py-1 tw-px-6 tw-max-w-lg tw-py-3 tw-px-6 tw-text-center">Nội dụng</th>
                                <th class="tw-py-3 tw-px-6 tw-text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="tw-text-gray-600 tw-text-sm tw-font-light">
                            <tr class="tw-border-b tw-border-gray-200 hover:tw-bg-gray-100">
                                <td class="tw-max-w-xs tw-max-h-20 tw-line-clamp-3 tw-py-3 tw-px-6 tw-text-left">
                                    <span class="tw-font-semibold">wwwww</span>
                                </td>
                                <td class="tw-py-3 tw-px-6 tw-text-left">
                                    <div class="tw-mr-2">
                                        <img class="tw-w-14 tw-h-14" src="wwwww"/>
                                    </div>
                                </td>
                                <td class="tw-py-1 tw-px-6 tw-max-w-lg tw-max-h-20 tw-text-center tw-tracking-normal tw-line-clamp-3">
                                    <span class =" ">wwww</span>
                                </td>
                                <td class="tw-py-3 tw-px-6 tw-text-center">
                                    <div class="tw-flex item-center tw-justify-center">
                                        <div class="tw-w-4 tw-mr-2 tw-transform hover:tw-text-purple-500 hover:tw-scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                            </svg>
                                        </div>
                                        <div class="tw-w-4 tw-mr-2 tw-transform hover:tw-text-purple-500 hover:tw-scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
           
        `;
    },
};
export default PostTable;