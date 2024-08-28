<script setup>

</script>

<template>
    <div class="codigo">
        <label>Informe o Código Para Retirada</label>
        <br>
        <input type="text" placeholder="Código" class="preench1">
    </div>
    <div class="dados">
        <label>Dados</label>
        <br>
        <input type="text" placeholder="Os dados dos produtos aparecerão aqui" class="preench2">
    </div>
</template>

<style scoped>
.codigo{
    margin-left: 300px;
    margin-top: 40px;
}
.preench1{
    border: none;
    border-radius: 6px;
    min-width: 300px;
    max-width: 300px;
    min-height: 30px;
    max-height: 30px;
    margin-top: 10px;
}

.dados{
    margin-left: 300px;
    margin-top: 60px;
}

.preench2{
    border: none;
    border-radius: 6px;
    min-width: 600px;
    max-width: 600px;
    min-height: 170px;
    max-height: 170px;
    margin-top: 10px;
}


</style>