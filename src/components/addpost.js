const formAdd = {
    render() {
        return /* html */ `
            <div class="tw-bg-white">
                <h1 class="tw-text-2xl">Thêm bài viết</h1>
                <form >
                    <div class="tw-mb-3">
                        <label class="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 tw-text-gray-600 tw-font-semibold tw-mb-1">Tiêu đề <span class="tw-text-red-500">*</span></label></br>
                        <input type="text" class="tw-border tw-border-gray-300 tw-p-2 tw-w-full" name="title" id="title" value="">
                    </div>

                    <div class="tw-mb-3">
                        <label class="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 tw-text-gray-600 tw-font-semibold tw-mb-1">Nội dung <span class="tw-text-red-500">*</span></label></br>
                        <textarea class="tw-w-full sec tw-p-3 tw-h-60 tw-border  " spellcheck="false" placeholder="Nội dung bài viết"></textarea>
                    </div>

                    <div class="tw-mb-3">
                        <div class="tw-grid tw-grid-cols-1">
                            <label class="tw-uppercase md:tw-text-sm tw-text-xs tw-text-gray-500 tw-text-gray-600 tw-font-semibold tw-mb-1">Upload Photo</label>
                            <div class='tw-flex tw-items-center tw-justify-center tw-w-full'>
                                <label class='tw-flex tw-flex-col tw-border-4 tw-border-dashed tw-w-full tw-h-32 hover:tw-bg-gray-100 hover:tw-border-orange-300 group'>
                                    <div class='tw-flex tw-flex-col tw-items-center tw-justify-center tw-pt-7'>
                                        <svg class="tw-w-10 tw-h-10 tw-text-purple-400 group-hover:tw-text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
                                        <p class='tw-text-sm tw-text-gray-400 group-hover:tw-text-purple-600 tw-pt-1 tw-tracking-wider'>Select a photo</p>
                                    </div>
                                    <input type='file' class="tw-hidden" />
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class='tw-flex tw-items-center tw-justify-center  md:tw-gap-8 tw-gap-4 tw-pt-5 tw-pb-5'>
                        <button class='tw-w-auto tw-bg-gray-500 hover:tw-bg-gray-700 tw-rounded-lg tw-shadow-xl tw-font-medium tw-text-white tw-px-4 tw-py-2'>Cancel</button>
                        <button class='tw-w-auto tw-bg-orange-700 hover:tw-bg-orange-500 tw-rounded-lg tw-shadow-xl tw-font-medium tw-text-white tw-px-4 tw-py-2'>Create</button>
                    </div>
                </form>
            </div>
        </div>
    </div>


        `;
    },
};
export default formAdd;