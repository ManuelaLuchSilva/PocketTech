<script setup></script>
<template>
    <footer>
        <div class="container-footer">
            <div>
                <ul>
                    <li class="tema-footer">Institucional</li>
                    <li>Quem somos</li>
                    <li>Localização</li>
                    <li>Nossas Lojas</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li class="tema-footer">Dúvidas</li>
                    <li>Entrega</li>
                    <li>Garantia</li>
                    <li>Como Comprar</li>
                    <li>Formas de Pagamento</li>
                    <li>Sobre Boletos</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li class="tema-footer">Ajuda</li>
                    <li>SAC</li>
                    <li>Fale Conosco</li>
                    <li>Termos de Aceite</li>
                    <li>Políticas de Privacidade</li>
                </ul>
            </div>
            <div class="redesSociais">
                <p>Siga-nos nas redes sociais</p>
                <div class="redesSociais-img">
                    <a href="">
                        <img src="../../public/imgs/instagram.png"
                            alt="logo Instagram" />
                    </a>
                    <a href="">
                        <img src="../../public/imgs/facebook.png"
                            alt="logo Facebook" />
                    </a>
                    <a href="">
                        <img src="../../public/imgs/twitter.png"
                            alt="logo Twiter" />
                    </a>
                    <a href="">
                        <img id="youtube"
                            src="../../public/imgs/youtube.png"
                            alt="logo Youtube" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Danfo&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Major+Mono+Display&family=Noto+Serif+JP:wght@200..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');

.container-footer {
    width: 100%;
    height: 200px;
    background-color: #00233c;
    bottom: 0;
    display: flex;
    color: white;
}

.container-footer div {
    margin-top: 15px;
    margin-left: 100px;
}

.container-footer ul li {
    list-style: none;
}

ul .tema-footer {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    font-weight: 700;
    text-align: left;
}

ul li {
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    font-weight: 400;
    line-height: 25px;
    text-align: left;
}

div img {
    width: 40px;
    height: 40px;
}

#youtube {
    width: 50px;
    height: 50px;
}

.redesSociais {
    position: absolute;
    right: 200px;
}

.redesSociais .redesSociais-img {
    display: flex;
    margin: 0;
}

.redesSociais-img img{
    margin-right: 20px;
}
</style>
