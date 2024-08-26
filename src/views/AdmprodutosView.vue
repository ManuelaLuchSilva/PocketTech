<script setup>
import NavbarAdm from '../components/NavbarAdm.vue';
import SidebarAdm from "../components/SidebarAdm.vue";
import Footerbar from '../components/FooterBar.vue'
</script>
<template>
    <NavbarAdm />

    <div class="container">

        <SidebarAdm />
        <section class="content">
            <table>
                <tr>
                    <th>&nbsp;</th>
                    <th>Principais Clientes</th>
                    <th>&nbsp;</th>
                </tr>
                <tr>
                    <td>Nome</td>
                    <td>CPF</td>
                    <td>Quantidade de serviços prestados</td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </section>
    </div>
    <Footerbar />
</template>
<style scoped>
.container {
    display: flex;
    width: calc(100% - 16rem);
}

.content {
    margin-top: 60px;
    margin-left: 3rem;
    display: grid;

}

table {
    background-color: #D9D9D9;
    border: 1px solid black;
}
td{
    border: 1px solid black;
}

tr {
    display: flex;
    justify-content: space-between;
}
</style>