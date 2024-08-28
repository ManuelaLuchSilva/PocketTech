<script setup>
import NavbarAdm from '@/components/NavbarAdm.vue';
import EntradaESaida from '@/components/EntradaESaida.vue';
import FooterBar from '@/components/FooterBar.vue';
import SidebarAdm from '@/components/SidebarAdm.vue';
</script>

<template>
<NavbarAdm />
<SidebarAdm class="sideBar" />
<EntradaESaida class="EES" />
<FooterBar class="footerBar" />
</template>

<style scoped>
.sideBar{
    position: absolute;
    min-height: 670px;
}

.ESS{
    position: relative;
}

.footerBar{
    margin-top: 331px;
}


</style>