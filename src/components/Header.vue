<template>
<!-- Header properties -->
    <div class="fixed z-20 inset-x-0 top-0 h-16 bg-white shadow">

        <i class="fa fa-bars relative float-left text-2xl top-5 left-8 text-gray-400"></i>

        <div class="absolute sm:relative left-10 sm:left-24 md:left-42 lg:left-72 top-2">
            <input type="text" placeholder="Search" class="invisible sm:visible text-gray-400 px-12 form-input px-4 py-3 float-left rounded-md border-2 bg-gray-200 w-2/5 relative border-gray-200 border-solid h-8 top-2">
            <img class="fa fa-search absolute left-8 left top-4" src="../assets/images/lens.png" alt="" />
        </div>

        <div class="relative inline-flex float-right justify-end py-1 px-4 -left-10 h-8 top-4">
            <span class="relative border-2 rounded-md px-6 justify right-8 start text-gray-400 h-7">Scelloo</span>
            <img class="relative inline-flex justify-end h-4 top-1" alt="" src="../assets/images/bell.png">
            <img class="relative inline-flex justify-end left-2 h-4 top-1" alt="" src="../assets/images/gear.png">
            <i class="relative inline-flex justify-end left-5 h-4 top-1 fa fa-th text-gray-300"></i>
            <img alt="" src="../assets/images/profile-icon.png" class="relative inline-flex justify-end left-8 h-6" />
        </div>
    </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
