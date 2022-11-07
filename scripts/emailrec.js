const formRec = document.getElementById("formRec")
 
const emailRec = document.getElementById("emailRec")

formRec.addEventListener("submit", (e)=> {
    e.preventDefault();

    checkInputsRec();
});

function checkInputsRec(){
    const emailRecValue = emailRec.value;
    
    if(emailRecValue === ""){
        setErrorForRec(emailRec,"O email é obrigatório!")
    }else if (!checkEmailRec(emailRecValue)){
        setErrorForRec(emailRec,"Insira um email já cadastrado.")
    }else {
        setSuccessForRec(emailRec,"Verifique sua caixa de entrada para redefinir sua senha")
    }

    const formRecControls = formRec.querySelectorAll(".formRec-control")

    const formRecIsValid = [...formRecControls].every((formRecControl) =>{
        return (formRecControl.className === "formRec-control success");
    });

    if (formRecIsValid){
        console.log("certo")
        
    }
    else{
        console.log("errado")
    }

}

function succesoRecEmail(p, message){
    const RecEmail = p.parentElement;
    const small = document.querySelector("p")

    small.innerText = message

    RecEmail.className = "messagemEnviadaShow"



}



function setErrorForRec(input, message){
    const formRecControl = input.parentElement;
    const small = formRecControl.querySelector("#messagemError");

    //Adicionar Mensagem de error

    small.innerText = message;


    //Adicionar classe de Error

    formRecControl.className = "formRec-control error";
}

function setSuccessForRec(input, message) {
    const formRecControl = input.parentElement;

    const small = formRecControl.querySelector("#messagemError");
  
    // Adicionar a classe de sucesso
    formRecControl.className = "formRec-control success";


    //adicionar mensagem de sucesso

    small.innerText = message
    
  }



  function checkEmailRec(emailRec) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      emailRec
    );
  }