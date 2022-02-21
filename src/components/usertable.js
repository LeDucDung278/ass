const UserTable = {
    render() {
        return /* html */ `
            <div class="tw-bg-white tw-shadow-md tw-rounded tw-mt-3">
                    <table class="tw-min-w-max tw-w-full tw-table-auto">
                        <thead>
                            <tr class="tw-bg-gray-200 tw-text-gray-600 tw-uppercase tw-text-sm tw-leading-normal">
                                <th class="tw-py-3 tw-px-6 tw-text-left">User Name</th>
                                <th class="tw-py-3 tw-px-6 tw-text-left">Email</th>
                                <th class="tw-py-3 tw-px-6 tw-text-center">Password</th>
                                <th class="tw-py-3 tw-px-6 tw-text-center">Status</th>
                                <th class="tw-py-3 tw-px-6 tw-text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody class="tw-text-gray-600 tw-text-sm tw-font-light">
                            <tr class="tw-border-b tw-border-gray-200 hover:tw-bg-gray-100">
                                <td class="tw-py-3 tw-px-6 tw-text-left">
                                    <div class="tw-flex tw-items-center">
                                        <div class="tw-mr-2">
                                            <img class="tw-w-6 tw-h-6" src="https://img.icons8.com/color/48/000000/javascript.png"/>
                                        </div>
                                        <span class="tw-font-medium">JavaScript Project</span>
                                    </div>
                                </td>
                                <td class="tw-py-3 tw-px-6 tw-text-left">
                                    <span>Cora Key</span>
                                </td>
                                <td class="tw-py-3 tw-px-6 tw-text-center">
                                    <span>12345678</span>
                                </td>
                                <td class="tw-py-3 tw-px-6 tw-text-center">
                                    <span class="tw-bg-red-200 tw-text-red-600 tw-py-1 tw-px-3 tw-rounded-full tw-text-xs">Pending</span>
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
                            <tr class="tw-border-b tw-border-gray-200 hover:tw-bg-gray-100">
                                <td class="tw-py-3 tw-px-6 tw-text-left">
                                    <div class="tw-flex tw-items-center">
                                        <div class="tw-mr-2">
                                            <img class="tw-w-6 tw-h-6" src="https://img.icons8.com/color/48/000000/javascript.png"/>
                                        </div>
                                        <span class="tw-font-medium">JavaScript Project</span>
                                    </div>
                                </td>
                                <td class="tw-py-3 tw-px-6 tw-text-left">
                                    <span>Cora Key</span>
                                </td>
                                <td class="tw-py-3 tw-px-6 tw-text-center">
                                    <span>12345678</span>
                                </td>
                                <td class="tw-py-3 tw-px-6 tw-text-center">
                                    <span class="tw-bg-green-200 tw-text-green-600 tw-py-1 tw-px-3 tw-rounded-full tw-text-xs">Pending</span>
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

                            <tr class="tw-border-b tw-border-gray-200 hover:tw-bg-gray-100">
                                <td class="tw-py-3 tw-px-6 tw-text-left">
                                    <div class="tw-flex tw-items-center">
                                        <div class="tw-mr-2">
                                            <img class="tw-w-6 tw-h-6" src="https://img.icons8.com/color/48/000000/javascript.png"/>
                                        </div>
                                        <span class="tw-font-semibold">JavaScript Project</span>
                                    </div>
                                </td>
                                <td class="tw-py-3 tw-px-6 tw-text-left">
                                    <span>Cora Key</span>
                                </td>
                                <td class="tw-py-3 tw-px-6 tw-text-center">
                                    <span>12345678</span>
                                </td>
                                <td class="tw-py-3 tw-px-6 tw-text-center">
                                    <span class="tw-bg-yellow-200 tw-text-yellow-600 tw-py-1 tw-px-3 tw-rounded-full tw-text-xs">Pending</span>
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
export default UserTable;