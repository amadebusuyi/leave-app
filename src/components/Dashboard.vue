<template>
    <div class="static mt-16 top-0 h-screen pb-10 left-0 py-8 px-5 sm:px-12 right-0 bottom-0 ml-20 bg-gray-50">
        <div class="flex flex-col h-full" v-if="leaveData.length < 1">
            <div class="relative h-12 mb-3">
                <span class="text-lg font-medium">Leave</span>
                <button class="rounded-md border-2 mt-2 h-11 py-2 px-8 flex justify-end bg-indigo-500 text-white sm:float-right" @click="openLeaveModal()"> New Request </button>
            </div>
            <div class="relative flex justify-center h-4/5 border-2 rounded-md border-gray-100 bg-white py-16 top-5">
                <img src="../assets/images/empty.svg" alt="">
            </div>
        </div>
        <div v-else class="flex flex-col h-auto pb-10 mb-10 sm:relative">
            <div class="relative h-12">
                <span class="font-medium text-2xl text-gray-500">Absence History</span>
                <button class="rounded-md border-2 h-11 py-2 mt-2 px-8 flex justify-end bg-indigo-500 text-white sm:float-right" @click="openLeaveModal()"> New Request </button>
            </div>

            <div class="relative h-12 top-5 py-5">
                <div class="text-sm font-medium float-left">
                    <a class="text-blue-400">Leave</a> 
                    <img class="inline relative left-4" src="../assets/images/arrow-left.svg" />
                    <span class="relative left-8 text-gray-500">Absense History</span>
                </div>
            </div>

            <div class="relative flex flex-col sm:flex-row mt-24 w-full">
                <div class="w-full sm:w-36 mr-4 sm:mt-5">
                    <ul>
                        <li class="h-8 group list-group text-md">
                            <span class="relative float-left h-6 w-1 border-r-0 border-t-0 border-b-0 border-l-4 border-gray-50 group-hover:border-blue-500 mr-6">&nbsp;</span>
                            <a @click="loadLeaveStatus('pending')" class="text-gray-400 group-hover:text-blue-500 cursor-pointer font-medium">Pending</a>
                        </li>
                        <li class="h-8 group list-group text-md">
                            <span class="relative float-left h-6 w-1 group-hover:visible border-r-0 border-t-0 border-b-0 border-l-4 border-gray-50 group-hover:border-blue-500 mr-6">&nbsp;</span>
                            <a @click="loadLeaveStatus('approved')" class="text-gray-400 cursor-pointer font-medium group-hover:text-blue-500">Approved</a>
                        </li>
                        <li class="h-8 group list-group text-md">
                            <span class="relative float-left h-6 w-1 group-hover:visible border-r-0 border-t-0 border-b-0 border-l-4 border-gray-50 group-hover:border-blue-500 mr-6">&nbsp;</span>
                            <a @click="loadLeaveStatus('disapproved')" class="text-gray-400 cursor-pointer font-medium group-hover:text-blue-500">Disapproved</a>
                        </li>
                    </ul>
                </div>

                <div class="relative flex flex-col float-left w-max sm:w-full ml-5 mt-5 sm:mt-0 ">
                    <div class="titles w-full flex flex-row px-5">
                        <div class="font-medium p-1 w-1/6">Leave Type</div>
                        <div class="font-medium p-1 w-1/6">Details</div>
                        <div class="font-medium p-1 w-1/6">Start Date</div>
                        <div class="font-medium p-1 w-1/6">End Day</div>
                        <div class="font-medium p-1 w-1/6 text-center">Duration (days)</div>
                        <div class="font-medium p-1 w-3/12 text-center">Allowance Requested</div>
                        <div class="font-medium p-1 w-1/6">Delegate</div>
                        <div class="w-1/12"></div>
                    </div>

                    <div class="top-5 w-full border-2 flex justify-center shadow rounded-md border-gray-200 bg-white flex-row mt-3 p-6">
                        <div class="font-small p-1 text-sm w-1/6">Paid annual leave</div>
                        <div class="font-small p-1 text-sm w-1/6">Vacation</div>
                        <div class="font-small p-1 text-sm w-1/6">11 Dec 2019</div>
                        <div class="font-small p-1 text-sm w-1/6">12 Dec 2019</div>
                        <div class="font-small p-1 text-sm w-1/6 text-center">2</div>
                        <div class="font-small p-1 text-sm w-3/12 text-center">Yes</div>
                        <div class="font-small p-1 text-sm w-1/6">Tony Abukuti</div>
                        <div class="font-small p-1 text-sm w-1/12 text-right"><i class="fa fa-ellipsis-v text-gray-300"></i></div>
                    </div>

                    <div class="top-5 w-full border-2 flex justify-center shadow rounded-md border-gray-200 bg-white flex-row mt-3 p-6">
                        <div class="font-small p-1 text-sm w-1/6">Study leave</div>
                        <div class="font-small p-1 text-sm w-1/6">Exam</div>
                        <div class="font-small p-1 text-sm w-1/6">11 Dec 2019</div>
                        <div class="font-small p-1 text-sm w-1/6">12 Dec 2019</div>
                        <div class="font-small p-1 text-sm w-1/6 text-center">2</div>
                        <div class="font-small p-1 text-sm w-3/12 text-center">No</div>
                        <div class="font-small p-1 text-sm w-1/6">Tunde Badau</div>
                        <div class="font-small p-1 text-sm w-1/12 text-right"><i class="fa fa-ellipsis-v text-gray-300"></i></div>
                    </div>

                    <div class="top-5 w-full border-2 flex justify-center shadow rounded-md border-gray-200 bg-white flex-row mt-3 p-6">
                        <div class="font-small p-1 text-sm w-1/6">Study leave</div>
                        <div class="font-small p-1 text-sm w-1/6">Exam</div>
                        <div class="font-small p-1 text-sm w-1/6">11 Dec 2019</div>
                        <div class="font-small p-1 text-sm w-1/6">12 Dec 2019</div>
                        <div class="font-small p-1 text-sm w-1/6 text-center">2</div>
                        <div class="font-small p-1 text-sm w-3/12 text-center">No</div>
                        <div class="font-small p-1 text-sm w-1/6">Tunde Badau</div>
                        <div class="font-small p-1 text-sm w-1/12 text-right"><i class="fa fa-ellipsis-v text-gray-300"></i></div>
                    </div>

                    <div class="top-5 w-full border-2 flex justify-center shadow rounded-md border-gray-200 bg-white flex-row mt-3 p-6">
                        <div class="font-small p-1 text-sm w-1/6">Study leave</div>
                        <div class="font-small p-1 text-sm w-1/6">Exam</div>
                        <div class="font-small p-1 text-sm w-1/6">11 Dec 2019</div>
                        <div class="font-small p-1 text-sm w-1/6">12 Dec 2019</div>
                        <div class="font-small p-1 text-sm w-1/6 text-center">2</div>
                        <div class="font-small p-1 text-sm w-3/12 text-center">No</div>
                        <div class="font-small p-1 text-sm w-1/6">Tunde Badau</div>
                        <div class="font-small p-1 text-sm w-1/12 text-right"><i class="fa fa-ellipsis-v text-gray-300"></i></div>
                    </div>

                    <div class="top-5 w-full border-2 flex justify-center shadow rounded-md border-gray-200 bg-white flex-row mt-3 p-6">
                        <div class="font-small p-1 text-sm w-1/6">Study leave</div>
                        <div class="font-small p-1 text-sm w-1/6">Exam</div>
                        <div class="font-small p-1 text-sm w-1/6">11 Dec 2019</div>
                        <div class="font-small p-1 text-sm w-1/6">12 Dec 2019</div>
                        <div class="font-small p-1 text-sm w-1/6 text-center">2</div>
                        <div class="font-small p-1 text-sm w-3/12 text-center">No</div>
                        <div class="font-small p-1 text-sm w-1/6">Tunde Badau</div>
                        <div class="font-small p-1 text-sm w-1/12 text-right"><i class="fa fa-ellipsis-v text-gray-300"></i></div>
                    </div>
                    <!-- Numbering system -->
                    <div class="mt-8 flex w-full flex-col justify-center sm:block w-full">
                        <div class="justify-start">
                            <span class="text-gray-400">Showing 5 of 20</span>
                        </div>
                        <div class="float-right -mt-5 flex flex-row pagination">
                            <span class="text-gray-400 mr-2">Previous</span>
                            <span class="text-gray-400 mr-2" ref="activePage">1</span>
                            <span class="text-gray-400 mr-2">2</span>
                            <span class="text-gray-400 mr-2">3</span>
                            <span class="text-gray-400 mr-2">4</span>
                            <span class="text-gray-400 mr-2">5</span>
                            <span class="text-gray-400 ">Next</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>


export default {

    name: 'Dashboard',
    data () {
        return {
            leaveData: [1],
            openLeaveModal: ()=>{
                document.querySelector("#modal").classList.remove("hide-modal");
            }
                
        }
    },
}



</script>
