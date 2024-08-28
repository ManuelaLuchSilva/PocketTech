<script setup>
import NavbarAdm from "@/components/NavbarAdm.vue";
import FooterBar from "../components/FooterBar.vue";
import Pecas from "@/components/Pecas.vue";
import SideBarAdm from "../components/SidebarAdm.vue";

</script>

<template>
    <NavbarAdm />
    <SideBarAdm class="sideBar" />
    <Pecas class="pecas" />
    <FooterBar class="footerBar" />
</template>

<style scoped>

.sideBar{
    position: absolute;
    min-height: 670px;
}

.pecas{
    position: relative;
    margin-left: 390px;
    margin-bottom: 30px;
}

.footerBar{
    margin-top: 103px;
}


</style> 