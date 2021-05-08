<template>
    <!-- FORM MODAL -->
    <div id="modal" class="flex hide-modal">
        <div class="fixed flex justify-center bg-black bg-opacity-70 shadow z-40 top-0 bottom-0 left-0 right-0" @click="dismissModal()">
            &nbsp;
        </div>

        <div id="modal-popup" class="absolute w-full sm:w-3/4 lg:w-2/4 mx-auto top-0 bottom-0 bg-white border-2 rounded-md z-50" style="left:50%; transform: translateX(-50%)">
            <i class="cursor-pointer absolute right-4 top-4 fa fa-times z-50" @click="dismissModal()"></i>
            <div class="relative p-12 top-2 flex flex-row mb-10">
                <div class="font-medium py-5 -mt-2 text-2xl text-gray-500">Request Leave</div>
                <div class="absolute right-12 float-right flex justify-center rounded-full h-24 bg-blue-200">
                    <div class="my-auto flex flex-col">
                        <span class="font-bold w-24 text-3xl text-center">16</span>
                        <span class="font-sm w-24 text-center">days left</span>
                    </div>
                </div>
            </div>
            <div class="flex relative top-24 p-5">
                <vue-input placeholder="Please input"></vue-input>
                <!-- <form action="" class="w-full" method="get">
                    
                    <div class="w-full flex flex-row mb-5">
                        <div class="w-full pr-4 sm:w-6/12">
                            <label for="leave-type" class="text-sm text-gray-500">Leave Type</label>
                            <select class="form-control focus:border-blue-100 focus:border-2" name="" id="leave-type">
                                <option v-for="type in leaveTypes" :key="type">{{ type }}</option>
                            </select>
                        </div>

                        <div class="w-full pl-4 sm:w-6/12">
                            <label for="details" class="text-sm text-gray-500">Details</label>
                            <input type="text" class="form-control focus:border-blue-100 focus:border-2" id="details">
                        </div>
                    </div>

                    <div class="w-full flex flex-row mt-4">
                        <div class="w-full pr-4 sm:w-6/12">
                            <label class="text-sm text-gray-500">Duration</label>
                            <div class="flex flex-row">
                                <input type="text" class="form-control focus:border-blue-100 focus:border-2" placeholder="dd/mm/yyyy" id="start_date">
                                <span class="mx-2 my-1">To</span>
                                <input type="text" class="form-control focus:border-blue-100 focus:border-2" placeholder="dd/mm/yyyy" id="end_date">
                            </div>
                        </div>
                        <div class="w-full pl-4 sm:w-6/12">
                            <label class="text-sm text-gray-500">Days Requested</label>
                            <span class="text-xl3 font-medium">14</span>
                        </div>
                    </div>

                </form> -->
            </div>
        </div>
    </div>
</template>

<script>

export default {

  data () {
      return{
        dismissModal : () => {
            document.querySelector("#modal").classList.add("hide-modal");
        },

        addLeaveRequest : () => {
            alert(this.dateDiff('18/10/1994', '14/10/1994'));
        },

        dateDiff : (first, second) => {
            // Date should be in the order of day/month/year
            function parseDate(str) {
                var mdy = str.split('/');
                return new Date(mdy[2], mdy[1] - 1, mdy[0]);
            }

            return Math.round((parseDate(second)-parseDate(first))/(1000*60*60*24));
        },

        leaveTypes : ['Annual Leave', 'Compassionate Leave', 'Study Leave', 'Unpaid Leave'],

      }
  }
}
</script>
