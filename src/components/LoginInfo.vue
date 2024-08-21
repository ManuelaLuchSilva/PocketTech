<script setup>

</script>

<template>
    <form>
        <div class="entrar">
            <h1 class="tit">Entrar</h1>
            <hr>
            <p class="infoDados">Informe os seus dados abaixo para acessá-la.</p>
        </div>

        <div class="log">
            <label for="" >Email:</label>
            <input type="email" class="prench">
            <label for="" >Senha:</label>
            <input type="password" class="prench">
        </div>

        <div class="confirm">
            <div class="checkboxLembrar">
            <input type="checkbox" class="lembrar">
            <label for="">Manter-me logado</label>
            </div>
            <input class="buttonLogin" type="button" value="Login">
            <div class="esquecOrCadastro"> 
            <a href="/" class="esq">Esqueci minha senha</a>
            <p class="cadastro">Novo no Site !<a href="/">CADASTRA-SE</a></p>
            </div>
        </div>
    </form>
</template>

<style scoped>
form{
    min-width: 800px;
    min-height: 500px;
    max-width: min-content;
    max-height: min-content;
    margin: 100px 0px 100px 28%;
    background-color: #D9D9D9;
}

.confirm{
   margin-left: 287px;

}

.tit{
    margin-left: 340px;
    padding-top: 20px;
}

hr{
    max-width: 700px;
}

.infoDados{
    margin-left: 229px;
}

.log{
    max-width: 100px;
    margin-left: 50px;
    margin-top: 50px;
    margin-bottom: 50px;
}

.prench{
    min-width: 390px;
    min-height: 25px;
    border: none;
    margin-top: 5px;
}

.checkboxLembrar{
    display: flex;
    padding-left: 13px;
    font-size: 15px;
}
.lembrar{
    margin-bottom: 18px;
    background-color: #D9D9D9;
}

.buttonLogin{
    min-width: 190px;
    min-height: 35px;
    max-width: min-content;
    max-height: min-content;
    background-color: #00233C;
    color: #FFFF;
    border-radius: 8px;
}

.esquecOrCadastro{
    font-size: 11px;
    margin-top: 15px;
    margin-bottom: 10px;
}

.esq{
    margin-left: 36px;
}

.cadastro{
    margin-left: 17px;
    margin-top: 15px;
}
</style>