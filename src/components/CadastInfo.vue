<script setup>

</script>

<template>
    <form>
        <div class="entrar">
            <h1 class="tit">Cadastrar</h1>
            <hr>
            <p class="infoDados">Informe os seus dados abaixo.</p>
        </div>
            <div>
            <input type="text" class="prench1" placeholder="Nome">
            <input type="text" class="prench1" placeholder="Sobrenome">
        </div>
            <input type="number" class="prench2" placeholder="CPF*">
            <div>
                <input type="email" class="prench3" placeholder="E-mail*">
                <input type="password" class="prench3" placeholder="Senha">
            </div>

        <div class="confirm">
            <div class="checkboxLembrar">
            <input type="checkbox" class="termos">
            <label for="" class="concordo">Estou ciente e CONCORDO com os termos de aceite e políticas de privacidade da Pocket Tech</label>
            </div>
            <input class="buttonCadastro" type="button" value="CRIAR CONTA">
            <div class="voltarCadastro"> 
            <p class="cadastro"><RouterLink to="/login">Voltar para o login</ROUTERLINK></p>
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
    margin-left: 310px;
    padding-top: 20px;
}

hr{
    max-width: 700px;
}

.infoDados{
    margin-left: 260px;
}

.log{
    max-width: 100px;
    margin-left: 50px;
    margin-top: 50px;
    margin-bottom: 50px;
}

.prench1{
    min-width: 305px;
    min-height: 27px;
    border: none;
    border-radius: 6px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 45px;
}

.prench2{
    min-width: 305px;
    min-height: 27px;
    border: none;
    border-radius: 6px;
    margin-top: 20px;
    margin-bottom: 5px;
    margin-left: 45px;
}

.prench3{
    min-width: 660px;
    min-height: 27px;
    border: none;
    border-radius: 6px;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: 45px;
    display: block;
}

.checkboxLembrar{
    display: flex;
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 15px;
    max-width: 300px;
    
}
.termos{
    margin-bottom: 18px;
    background-color: #D9D9D9;
}

.concordo{
    font-size: 12px;
}

.buttonCadastro{
    min-width: 190px;
    min-height: 35px;
    max-width: min-content;
    max-height: min-content;
    background-color: #00233C;
    color: #FFFF;
    border-radius: 8px;
}

.voltarCadastro{
    font-size: 11px;
    margin-top: 15px;
    margin-bottom: 10px;
    margin-right: 5px;
}


.cadastro{
    margin-left: 12px;
    margin-top: 15px;
    font-size: 15px;
}
</style>