<template>
    <!-- FORM MODAL -->
    <div id="modal" class="flex hide-modal">
        <div class="fixed flex justify-center bg-black bg-opacity-70 shadow z-40 top-0 bottom-0 left-0 right-0" @click="dismissModal()">
            &nbsp;
        </div>

        <div id="modal-popup" class="absolute w-full sm:w-3/4 lg:w-2/4 mx-auto top-0 bottom-0 bg-white border-2 rounded-md z-50" style="left:50%; transform: translateX(-50%)">
            <i class="cursor-pointer absolute right-4 top-4 fa fa-times z-50" @click="dismissModal()"></i>
            <div class="relative p-12 top-2 flex flex-row">
                <div class="font-medium mt-5 py-5 text-2xl text-gray-500">Request Leave</div>
                <div class="absolute right-12 float-right flex justify-center rounded-full h-24 bg-blue-200">
                    <div class="my-auto flex flex-col">
                        <span class="font-bold w-24 text-3xl text-center">16</span>
                        <span class="font-sm w-24 text-center">days left</span>
                    </div>
                </div>
                <div class="flex relative top-5">
                    <form action="" method="get" @submit="addLeaveRequest()">
                        <select id="leave-type">
                            <option>Student Leave</option>
                            <option>Parent Leave</option>
                            <option>Student Leave</option>
                            <option>Student Leave</option>
                        </select>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Modal',
  data () {
      return{
          dismissModal : () => {
              document.querySelector("#modal").classList.add("hide-modal");
          },

          addLeaveRequest : () => {
              
          }

      }
  }
}
</script>
