function login(){
 
    let usuario = document.getElementById("usuario").value;
    let senha = document.getElementById("senha").value;
 
 
    if(usuario === "admin" && senha === "123456"){
 
        sessionStorage.setItem("logado", "sim");

        window.location.href = "index.html";

    }else{
 
        alert("Usuário ou senha incorretos");
 
    }
 
}
function sair(){
 
    sessionStorage.removeItem("logado");

    window.location.href = "login.html";

}
 
 