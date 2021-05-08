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
                    <ul id="leave-panel-navs">
                        <li class="h-8 group list-group text-md panel-nav pending-nav active">
                            <span class="relative float-left h-6 w-1 border-r-0 border-t-0 border-b-0 border-l-4 border-gray-50 group-hover:border-blue-500 mr-6">&nbsp;</span>
                            <a @click="loadLeaveStatus('pending')" class="text-gray-400 group-hover:text-blue-500 cursor-pointer font-medium">Pending</a>
                        </li>
                        <li class="h-8 group panel-nav list-group text-md approved-nav">
                            <span class="relative float-left h-6 w-1 group-hover:visible border-r-0 border-t-0 border-b-0 border-l-4 border-gray-50 group-hover:border-blue-500 mr-6">&nbsp;</span>
                            <a @click="loadLeaveStatus('approved')" class="text-gray-400 cursor-pointer font-medium group-hover:text-blue-500">Approved</a>
                        </li>
                        <li class="h-8 group list-group panel-nav text-md disapproved-nav">
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
                    <div id="pending" class="leave-panel">
                        <div  v-if="leaveData.pending.length > 0" @click="closeAction()">
                            <div v-for="leave in leaveData.pending" :key='leave.id'>
                                <div class="top-5 w-full border-2 flex justify-center shadow rounded-md border-gray-200 bg-white flex-row mt-3 p-6">
                                    <div class="font-small p-1 text-sm w-1/6">{{leave.type}}</div>
                                    <div class="font-small p-1 text-sm w-1/6">{{leave.details}}</div>
                                    <div class="font-small p-1 text-sm w-1/6">{{leave.start_date}}</div>
                                    <div class="font-small p-1 text-sm w-1/6">{{leave.end_date}}</div>
                                    <div class="font-small p-1 text-sm w-1/6 text-center">{{leave.days}}</div>
                                    <div class="font-small p-1 text-sm w-3/12 text-center">{{leave.allowance}}</div>
                                    <div class="font-small p-1 text-sm w-1/6">{{leave.name}}</div>
                                    <div class="font-small p-1 text-sm w-1/12 text-right"><i class="fa fa-ellipsis-v text-gray-300 z-index-10 cursor:pointer" @click='leaveAction(leave.req_id)'></i></div>
                                    <div class="hide-popup shadow-md right-10 absolute rounded-md bg-white h-24 w-32 p-2 flex flex-col" :req_p_id='leave.req_id'>
                                        <a class="cursor:pointer hover:bg-gray-200 hover:rounded-sm p-2" @click="changeStatus(leave.req_id, 'approved')">Approve</a>
                                        <a class="cursor:pointer hover:bg-gray-200 hover:rounded-sm p-2" @click="changeStatus(leave.req_id, 'disapproved')">Disapprove</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-20 text-gray-500 text-2xl text-center w-full" v-else>There are no pending requests</div>
                    </div>
                    <div id="approved" class="hide-panel leave-panel">
                        <div  v-if="leaveData.approved.length > 0" @click="closeAction()">
                            <div v-for="leave in leaveData.approved" :key='leave.id'>
                                <div class="top-5 w-full border-2 flex justify-center shadow rounded-md border-gray-200 bg-white flex-row mt-3 p-6">
                                    <div class="font-small p-1 text-sm w-1/6">{{leave.type}}</div>
                                    <div class="font-small p-1 text-sm w-1/6">{{leave.details}}</div>
                                    <div class="font-small p-1 text-sm w-1/6">{{leave.start_date}}</div>
                                    <div class="font-small p-1 text-sm w-1/6">{{leave.end_date}}</div>
                                    <div class="font-small p-1 text-sm w-1/6 text-center">{{leave.days}}</div>
                                    <div class="font-small p-1 text-sm w-3/12 text-center">{{leave.allowance}}</div>
                                    <div class="font-small p-1 text-sm w-1/6">{{leave.name}}</div>
                                    <div class="font-small p-1 text-sm w-1/12 text-right"><i class="fa fa-ellipsis-v text-gray-300 z-index-10 cursor:pointer" @click='leaveAction(leave.req_id)'></i></div>
                                    <div class="hide-popup shadow-md right-10 absolute rounded-md bg-white h-24 w-32 p-2 flex flex-col" :req_p_id='leave.req_id'>
                                        <a class="cursor:pointer bg-gray-100 rounded-sm p-2">Approve</a>
                                        <a class="cursor:pointer hover:bg-gray-200 hover:rounded-sm p-2" @click="changeStatus(leave.req_id, 'disapproved')">Disapprove</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-20 text-gray-500 text-2xl text-center w-full" v-else>There are no approved requests</div>
                    </div>
                    <div id="disapproved" class='hide-panel leave-panel'>
                        <div  v-if="leaveData.disapproved.length > 0" @click="closeAction()">
                            <div v-for="leave in leaveData.disapproved" :key='leave.id'>
                                <div class="top-5 w-full border-2 flex justify-center shadow rounded-md border-gray-200 bg-white flex-row mt-3 p-6">
                                    <div class="font-small p-1 text-sm w-1/6">{{leave.type}}</div>
                                    <div class="font-small p-1 text-sm w-1/6">{{leave.details}}</div>
                                    <div class="font-small p-1 text-sm w-1/6">{{leave.start_date}}</div>
                                    <div class="font-small p-1 text-sm w-1/6">{{leave.end_date}}</div>
                                    <div class="font-small p-1 text-sm w-1/6 text-center">{{leave.days}}</div>
                                    <div class="font-small p-1 text-sm w-3/12 text-center">{{leave.allowance}}</div>
                                    <div class="font-small p-1 text-sm w-1/6">{{leave.name}}</div>
                                    <div class="font-small p-1 text-sm w-1/12 text-right"><i class="fa fa-ellipsis-v text-gray-300 z-index-10 cursor:pointer" @click='leaveAction(leave.req_id)'></i></div>
                                    <div class="hide-popup shadow-md right-10 absolute rounded-md bg-white h-24 w-32 p-2 flex flex-col" :req_p_id='leave.req_id'>
                                        <a class="cursor:pointer hover:bg-gray-200 hover:rounded-sm p-2" @click="changeStatus(leave.req_id, 'approved')">Approve</a>
                                        <a class="cursor:pointer bg-gray-100 rounded-sm p-2">Disapprove</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-20 text-2xl text-gray-500 text-center w-full" v-else>There are no disapproved requests</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {

    name: 'Dashboard',
    data () {
        return {
            leaveData: [],
            leaveDelegatee: [],
            openLeaveModal: ()=>{
                document.querySelector("#modal").classList.remove("hide-modal");
            },
            hasError: false,
            loadLeaveStatus: (status) => {
                var x = document.querySelectorAll('.leave-panel');
                for(var i = 0; i < x.length; i++){
                    x[i].classList.add('hide-panel');
                }
                var y = document.querySelectorAll('.panel-nav');
                for(var j = 0; j < y.length; j++){
                    y[j].classList.remove('active');
                }
                document.querySelector(`#${status}`).classList.remove('hide-panel');
                document.querySelector(`.${status}-nav`).classList.add('active');
            },
            leaveAction: (id) =>{
                var x = document.querySelectorAll("[req_p_id]");
                for(var i = 0; i < x.length; i++){
                    if(x[i].getAttribute('req_p_id') == id)
                        x[i].classList.remove("hide-popup")
                    else
                        x[i].classList.add("hide-popup")

                }
            },

            closeAction: () => {
                var x = document.querySelectorAll("[req_p_id]");
                setTimeout(()=>{

                    for(var i = 0; i < x.length; i++){
                        if(!x[i].classList.contains('hide-popup')){
                            x[i].classList.add('hide-popup')
                        }
                    }
                }, 10000)
            },

            changeStatus: (id, status) => {
                axios
                .get(`http://leave-app-back.herokuapp.com/update-request/${id}/${status}`)
                .then(response => {
                    this.leaveData = response.data.data.requests;
                    this.leaveDelegatee = response.data.data.users;
                    var x = document.querySelectorAll("[req_p_id]");
                    for(var i = 0; i < x.length; i++){
                        x[i].classList.add("hide-popup")
                    }
                })
                .catch(error => {
                    console.log(error)
                    this.hasError = true
                })
                .finally(() => this.loading = false)
            }

        }
    },
    mounted () {
        axios
        .get('http://leave-app-back.herokuapp.com')
        .then(response => {
            this.leaveData = response.data.data.requests;
            this.leaveDelegatee = response.data.data.users;
        })
        .catch(error => {
            console.log(error)
            this.hasError = true
        })
        .finally(() => this.loading = false)
    }
}



</script>
