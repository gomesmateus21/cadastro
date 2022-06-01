function enviarDados(e){
    e.preventDefault();
    const nome= document.getElementById(`nome`).value
    const email= document.getElementById(`email`).value
    const data= document.getElementById(`data`).value
    const senha= document.getElementById(`senha`).value
    console.log(nome, email, data, senha);
}

