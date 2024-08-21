<script setup>
import CarouselPag from '../components/CarouselPag.vue'
import CardProduct from '../components/CardProduct.vue'
import CardAcessorios from '../components/CardAcessorios.vue'
import CardPhone from '../components/CardPhone.vue'
import FooterBar from "../components/FooterBar.vue";
</script>

<template>
  <NavBar />
  <CarouselPag />
  <section class="container-main">
    <div class="titleProduct">
      <h2>Acessórios</h2>
      <img
        src="https://s3-alpha-sig.figma.com/img/a70c/d2ff/f08140516b79ed9eb58009031134fef9?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EijTHJ5fYdgg2tph8KrpgLmObjn8dLvR-lbzFX5mtHbbO1HkvcdyNhT31W2VaQLcI1vCnefZdwu-ykr6FYdGBvkrOQ~jWkfN8AEX9gy8M101kE9D0-nVNLjnWycjY1EUirHO5sdkmSTlAjEAtVwgmFk1-nePiYtI8DwEeeWNTBVZhp5IAfCDef-DbiYkx9HCXmfsV4Ix5dKu1ekA5QuKLWsXr8hOLeRq6~W3dZ4KetFzMYTi9bEHdrQ5IwToUfU9brSyJpJjFFyvlSXH92oEcu7BgIzO1tCuXQCoQYS1RK0V298Ns3c~GO6N8czscVgiq3otBAcPFY3zZuvWqtf8UA__"
        alt="seta tortinha" />
    </div>
    <div class="produtos">
      <button class="left-button">
        <img
          src="https://s3-alpha-sig.figma.com/img/2848/9d8b/77c472166b57c0782ccc277f85ccd4b7?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CXaR4AyHRAgOfilunL-S5aLzE7JYIcmJciLHEg81AE0JvFbe7XN-qhagwSbNIDAVULFKFSi2sdN3c3eqlQdUPdphBrrKIW9HhnDNoiXW3cCf~9GjXWy1mdmGmYYWhs5Z-GygiaqZqBHxM36M9FPbr408KZyo9ei1-pkk1PgkOEsN2eVEdyFIiv9ufmsflTodBwph00mn0c-t-GXCoQoyhNSBgHIJT6jcRnhYyfE4xzrzevgQkILyR5AiDT6cdmJfvy~V7XyRFAlhBy3q46BPCZobzCdFn-mwI3aMmxIyoIv33ioGGUEVBESu0D789~2c6JtxPYKsdH-i4VgyWiNyig__"
          alt="" />
      </button>
      <CardAcessorios />
      <CardAcessorios />
      <CardAcessorios />
      <CardAcessorios />
      <button class="right-button">
        <img
          src="https://s3-alpha-sig.figma.com/img/2848/9d8b/77c472166b57c0782ccc277f85ccd4b7?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CXaR4AyHRAgOfilunL-S5aLzE7JYIcmJciLHEg81AE0JvFbe7XN-qhagwSbNIDAVULFKFSi2sdN3c3eqlQdUPdphBrrKIW9HhnDNoiXW3cCf~9GjXWy1mdmGmYYWhs5Z-GygiaqZqBHxM36M9FPbr408KZyo9ei1-pkk1PgkOEsN2eVEdyFIiv9ufmsflTodBwph00mn0c-t-GXCoQoyhNSBgHIJT6jcRnhYyfE4xzrzevgQkILyR5AiDT6cdmJfvy~V7XyRFAlhBy3q46BPCZobzCdFn-mwI3aMmxIyoIv33ioGGUEVBESu0D789~2c6JtxPYKsdH-i4VgyWiNyig__"
          alt="" />
      </button>
    </div>

    <div class="titleProduct">
      <h2>Produtos em Destaque</h2>
      <img
        src="https://s3-alpha-sig.figma.com/img/a70c/d2ff/f08140516b79ed9eb58009031134fef9?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EijTHJ5fYdgg2tph8KrpgLmObjn8dLvR-lbzFX5mtHbbO1HkvcdyNhT31W2VaQLcI1vCnefZdwu-ykr6FYdGBvkrOQ~jWkfN8AEX9gy8M101kE9D0-nVNLjnWycjY1EUirHO5sdkmSTlAjEAtVwgmFk1-nePiYtI8DwEeeWNTBVZhp5IAfCDef-DbiYkx9HCXmfsV4Ix5dKu1ekA5QuKLWsXr8hOLeRq6~W3dZ4KetFzMYTi9bEHdrQ5IwToUfU9brSyJpJjFFyvlSXH92oEcu7BgIzO1tCuXQCoQYS1RK0V298Ns3c~GO6N8czscVgiq3otBAcPFY3zZuvWqtf8UA__"
        alt="seta tortinha" />
    </div>
    <div class="produtos">
      <button class="left-button">
        <img
          src="https://s3-alpha-sig.figma.com/img/2848/9d8b/77c472166b57c0782ccc277f85ccd4b7?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CXaR4AyHRAgOfilunL-S5aLzE7JYIcmJciLHEg81AE0JvFbe7XN-qhagwSbNIDAVULFKFSi2sdN3c3eqlQdUPdphBrrKIW9HhnDNoiXW3cCf~9GjXWy1mdmGmYYWhs5Z-GygiaqZqBHxM36M9FPbr408KZyo9ei1-pkk1PgkOEsN2eVEdyFIiv9ufmsflTodBwph00mn0c-t-GXCoQoyhNSBgHIJT6jcRnhYyfE4xzrzevgQkILyR5AiDT6cdmJfvy~V7XyRFAlhBy3q46BPCZobzCdFn-mwI3aMmxIyoIv33ioGGUEVBESu0D789~2c6JtxPYKsdH-i4VgyWiNyig__"
          alt="" />
      </button>
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <CardProduct />
      <button class="right-button">
        <img
          src="https://s3-alpha-sig.figma.com/img/2848/9d8b/77c472166b57c0782ccc277f85ccd4b7?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CXaR4AyHRAgOfilunL-S5aLzE7JYIcmJciLHEg81AE0JvFbe7XN-qhagwSbNIDAVULFKFSi2sdN3c3eqlQdUPdphBrrKIW9HhnDNoiXW3cCf~9GjXWy1mdmGmYYWhs5Z-GygiaqZqBHxM36M9FPbr408KZyo9ei1-pkk1PgkOEsN2eVEdyFIiv9ufmsflTodBwph00mn0c-t-GXCoQoyhNSBgHIJT6jcRnhYyfE4xzrzevgQkILyR5AiDT6cdmJfvy~V7XyRFAlhBy3q46BPCZobzCdFn-mwI3aMmxIyoIv33ioGGUEVBESu0D789~2c6JtxPYKsdH-i4VgyWiNyig__"
          alt="" />
      </button>
    </div>
    <div class="titleProduct">
      <h2>Celulares e Smartphones</h2>
      <img
        src="https://s3-alpha-sig.figma.com/img/a70c/d2ff/f08140516b79ed9eb58009031134fef9?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=EijTHJ5fYdgg2tph8KrpgLmObjn8dLvR-lbzFX5mtHbbO1HkvcdyNhT31W2VaQLcI1vCnefZdwu-ykr6FYdGBvkrOQ~jWkfN8AEX9gy8M101kE9D0-nVNLjnWycjY1EUirHO5sdkmSTlAjEAtVwgmFk1-nePiYtI8DwEeeWNTBVZhp5IAfCDef-DbiYkx9HCXmfsV4Ix5dKu1ekA5QuKLWsXr8hOLeRq6~W3dZ4KetFzMYTi9bEHdrQ5IwToUfU9brSyJpJjFFyvlSXH92oEcu7BgIzO1tCuXQCoQYS1RK0V298Ns3c~GO6N8czscVgiq3otBAcPFY3zZuvWqtf8UA__"
        alt="seta tortinha" />
    </div>
    <div class="produtos">
      <button class="left-button">
        <img
          src="https://s3-alpha-sig.figma.com/img/2848/9d8b/77c472166b57c0782ccc277f85ccd4b7?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CXaR4AyHRAgOfilunL-S5aLzE7JYIcmJciLHEg81AE0JvFbe7XN-qhagwSbNIDAVULFKFSi2sdN3c3eqlQdUPdphBrrKIW9HhnDNoiXW3cCf~9GjXWy1mdmGmYYWhs5Z-GygiaqZqBHxM36M9FPbr408KZyo9ei1-pkk1PgkOEsN2eVEdyFIiv9ufmsflTodBwph00mn0c-t-GXCoQoyhNSBgHIJT6jcRnhYyfE4xzrzevgQkILyR5AiDT6cdmJfvy~V7XyRFAlhBy3q46BPCZobzCdFn-mwI3aMmxIyoIv33ioGGUEVBESu0D789~2c6JtxPYKsdH-i4VgyWiNyig__"
          alt="" />
      </button>
      <CardPhone />
      <CardPhone />
      <CardPhone />
      <CardPhone />
      <button class="right-button">
        <img
          src="https://s3-alpha-sig.figma.com/img/2848/9d8b/77c472166b57c0782ccc277f85ccd4b7?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CXaR4AyHRAgOfilunL-S5aLzE7JYIcmJciLHEg81AE0JvFbe7XN-qhagwSbNIDAVULFKFSi2sdN3c3eqlQdUPdphBrrKIW9HhnDNoiXW3cCf~9GjXWy1mdmGmYYWhs5Z-GygiaqZqBHxM36M9FPbr408KZyo9ei1-pkk1PgkOEsN2eVEdyFIiv9ufmsflTodBwph00mn0c-t-GXCoQoyhNSBgHIJT6jcRnhYyfE4xzrzevgQkILyR5AiDT6cdmJfvy~V7XyRFAlhBy3q46BPCZobzCdFn-mwI3aMmxIyoIv33ioGGUEVBESu0D789~2c6JtxPYKsdH-i4VgyWiNyig__"
          alt="" />
      </button>
    </div>
  </section>


</template>

<style scoped>
.container-main {
  background-color: #ffffff;
  margin: 0 12rem;
  min-height: 100px;
  margin-top: 10px;
}

.titleProduct {
  display: flex;
  margin: 8px 10px 22px 50px;
}

.titleProduct img {
  margin-top: 23px;
  margin-left: 10px;
  width: 25px;
  height: 28px;
  rotate: -20deg;
}

.titleProduct h2 {
  font-family: 'Inter', sans-serif;
  font-size: 23px;
  font-style: italic;
  font-weight: 600;
  text-align: left;
  color: #00477a;
}

.produtos {
  display: flex;
  justify-content: space-between;
}

.produtos:not(:last-child) {
  margin-bottom: 90px;
}

.produtos:last-child {
  padding-bottom: 200px;
}

.left-button,
.right-button {
  border: 0;
  background-color: white;
}

.left-button img {
  width: 20px;
  height: 20px;
  rotate: 180deg;
  border: 0;
  background-color: none;
}

.right-button img {
  width: 20px;
  height: 20px;
  border: 0;
  background-color: none;
}

button {
  padding-bottom: 15px;
  transition-duration: 200ms;
  transition-timing-function: linear;
}

button:hover {
  transition-duration: 200ms;
  transition-timing-function: linear;
  background-color: #e9e9e9;
}
</style>
