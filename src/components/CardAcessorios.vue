<script setup>
</script>
<template>
    <div class="acessories-card">
        <div class="acessories-content">

        </div>
        <div class="acessories-price"></div>
        <button class="see-more">Ver produtos</button>
    </div>
</template>
<style scoped>
.acessories-card {
    border: 1px solid #ddd;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.5);
    width: 18%;
}

.acessories-content {
    height: 150px;
    width: 100%;
    background-color: #f5f5f5;
    border-radius: 5px;
    margin-bottom: 10px;
}
button{
    border: 0;
    background-color: white;
}
.see-more {
    color: #00477A;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-style: italic;
    font-weight: 600;
    margin-left: 60px;
}
</style>