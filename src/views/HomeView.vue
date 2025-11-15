
<template>
  <div class="component-container">
      <h1>Olá, primeiramente, {{ saudacao }}! ^-^</h1>
      <div class="card-container floating">
        <p>Uma breve apresentação do projeto para o teste, me chamo Victor Neves e sou desenvolvedor <span style="color: purple">Front-end</span> há 3 anos. </p>
        <p>Este projeto representa uma parcela do conhecimento que venho adquirindo com o tempo. Ainda estou em processo de aprendizagem do Vue.js, mas já consegui aplicar o que aprendi até agora. Com a combinação desse conhecimento e do estudo contínuo do framework, desenvolvi um sistema de cadastro de usuários com visualização em grade, além de várias outras funcionalidades como:
          <ul style="padding:2px;color: navy; font-size: 18px; border: 1px solid navy; border-radius: 5px">
            <li>Solicitações assíncronas ao Backend.</li>
            <li>Autenticação e validação dos dados e token do usuário.</li>
            <li>Consulta de usuarios ao banco de dados através da pesquisa de usuários.</li>
          </ul>
        </p>
        <br>
        <p style="margin-top: 20px;">
          <strong>API Endpoints:</strong><br>
          • <a href="https://nevesfg.com/desafio-lsmais/api/" target="_blank" style="color: #007bff; text-decoration: none;">API REST</a> - Endpoints da API<br>
          • <a href="https://nevesfg.com/desafio-lsmais/api/doc/" target="_blank" style="color: #007bff; text-decoration: none;">Documentação Swagger</a> - Documentação interativa da API
        </p>
        <br>
        <router-link class="style-input" to="/register">Teste o projeto</router-link>
      </div>
    </div>
</template>

<script setup>
  import {  computed } from 'vue';
  
  const saudacao = computed(() => {
    const horaAtual = new Date().getHours();
    
    if (horaAtual < 12) {
      return "Bom dia";
    } else if (horaAtual < 18) {
      return "Boa tarde";
    } else {
      return "Boa noite";
    }
  });

</script>

<style scoped>

  .style-input{
    color: var(--white);
    text-decoration: none;
    border: 2px solid var(--style-color-contrast);
    width: 100%;
    height: 2rem;
    left: 20pp;
    margin: 28px;
    padding: 0.375rem 0.375rem 0.25rem;
    /* padding-top: 42px; */
    /* min-width: 81px; */
    font-size: 15px;
    /* line-height: 116.6%; */
    padding-top: 3px;
    border-radius: 20px;
    cursor: pointer;
    background-color: var(--bg-input);
  }
  .component-container {
    max-width: 80%;
    display: flex;
    margin: 5vh auto;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
    
  }

  .testebtn{
    color: var(--bg-input) !important;
    border: 3px solid #fff;
    height: 65px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.75);
  } 

  .component-container > h1{
    margin-bottom: 10px;
  }
  .card-container {
    position: relative;
    padding: 1rem 2.25rem 1rem;
    width: 70vh;
    /* display: flex; */
    justify-content: unset;
    align-items: center;
    text-align:justify;
    background-color: rgba(255, 255, 255, 0.1);
    max-width: 100%;
    min-width: 0; 
   /*  height: 500px; */
    border-radius: 22px;
    border: 2px solid #183852;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.75);
  }
  .floating {
  animation-name: floating;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  }
  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0, 10px);
    }
    100% {
      transform: translate(0, -0px);
    }
  }

  @media (max-width: 920px) {
    .card-container {
      padding: 1rem 2.25rem 1rem;
      width: 70vh;

      
    }
  }

@media (max-width: 520px){
  .card-container {
      padding: 1rem 2.25rem 1rem;
      width: 70vh;
  }
}
</style>

<!-- CODIGO PADRÃO DE CRIAÇÃO DO PROJETO -->

<!-- <template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script> -->
