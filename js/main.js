function enviarDados(){
    const nome = document.getElementById(`nome`).value
    const email = document.getElementById(`email`).value
    const data = document.getElementById(`data`).value
    const senha = document.getElementById(`senha`).value
    console.log(nome, email, data, senha);
}

document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();
    enviarDados();
  });
