<script setup>
import { reactive } from 'vue'

const form = reactive({
  codigo: '',
  dados: ''
})

const produtos = [
  { 
    codigo: '12345', 
    descricao: 'Tela para iPhone 12', 
    quantidade: 5,
    subDescricao: 'Tela original de alta qualidade para substituir a tela quebrada do iPhone 12. Inclui ferramentas de instalação.' 
  },
  { 
    codigo: '67890', 
    descricao: 'Bateria para Samsung S21', 
    quantidade: 10,
    subDescricao: 'Bateria de longa duração para Samsung S21, compatível com o modelo original. Inclui instruções de instalação.' 
  },
  { 
    codigo: '11223', 
    descricao: 'Carregador USB-C', 
    quantidade: 7,
    subDescricao: 'Carregador USB-C rápido para diversos modelos de smartphones. Inclui cabo de 1 metro.' 
  },
  {
    codigo: '44556',
    descricao: 'Câmera Traseira para Xiaomi Mi 11',
    quantidade: 8,
    subDescricao: 'Câmera traseira de alta resolução para Xiaomi Mi 11. Perfeita para capturar fotos nítidas e vídeos de alta qualidade. Inclui suporte de instalação.'
  },
  {
    codigo: '78901',
    descricao: 'Fone de Ouvido Bluetooth',
    quantidade: 15,
    subDescricao: 'Fones de ouvido Bluetooth com cancelamento de ruído. Ideal para chamadas e música com som cristalino e conforto prolongado. Bateria de longa duração.'
  },
  {
    codigo: '23456',
    descricao: 'Suporte para Celular com Ventosa',
    quantidade: 20,
    subDescricao: 'Suporte para celular com ventosa para uso em carros. Mantém seu celular seguro e acessível enquanto dirige. Compatível com diversos modelos.'
  },
  {
    codigo: '34567',
    descricao: 'Película Protetora para Samsung Galaxy A52',
    quantidade: 12,
    subDescricao: 'Película protetora de vidro temperado para Samsung Galaxy A52. Protege a tela contra arranhões e impactos. Fácil de aplicar e não compromete a sensibilidade da tela.'
  },
  {
    codigo: '45678',
    descricao: 'Carregador Sem Fio Qi',
    quantidade: 6,
    subDescricao: 'Carregador sem fio Qi com design elegante e eficiente. Compatível com todos os dispositivos que suportam carregamento sem fio. Inclui cabo de alimentação.'
  },
  {
    codigo: '56789',
    descricao: 'Capinha de Silicone para iPhone 13',
    quantidade: 18,
    subDescricao: 'Capinha de silicone macio e durável para iPhone 13. Oferece proteção contra impactos e arranhões, com um toque confortável. Disponível em várias cores.'
  },
  {
    codigo: '67891',
    descricao: 'Adaptador USB para HDMI',
    quantidade: 9,
    subDescricao: 'Adaptador USB para HDMI que permite conectar seu dispositivo a uma tela externa. Ideal para apresentações e streaming em alta definição.'
  }
];


const buscarDados = () => {
  const produtoEncontrado = produtos.find((produto) => produto.codigo === form.codigo)
  form.dados = produtoEncontrado
    ? `Descrição: ${produtoEncontrado.descricao}<br>Quantidade: ${produtoEncontrado.quantidade}<br>${produtoEncontrado.subDescricao}`
    : 'Produto não encontrado'
}
</script>

<template>
  <div class="codigo">
    <label>Informe o Código Para Retirada</label>
    <div class="codInput">
      <input v-model="form.codigo" type="text" placeholder="Código" @input="buscarDados" />
    </div>
  </div>
  <div class="dados">
    <label>Dados</label>
    <div class="dadosInput">
      <p v-html="form.dados"></p>
    </div>
  </div>
</template>

<style scoped>
.codigo,
.dados {
  margin-bottom: 20px;
}

.codInput,
.dadosInput {
  background-color: #ffffff;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}

.codInput {
  width: 200px;
}

.dadosInput {
  width: 500px;
  height: 100px;
}
.dadosInput input {
  height: 100%;
}

input {
  border: 0;
  width: 100%;
  box-sizing: border-box;
  overflow-wrap: break-word;
}
</style>
