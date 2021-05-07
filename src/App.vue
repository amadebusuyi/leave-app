<template>
  <div>
    <Header />
    <SideBar />
    <Modal />
    <Dashboard />
    <Footer />
  </div>
</template>

<script>
import SideBar from './components/SideBar'
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'
import Modal from './components/Modal'

export default {
  name: 'App',
  components: {
    SideBar,
    Header,
    Dashboard,
    Footer,
    Modal
  }
}


</script>
