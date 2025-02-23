function criar(){
    var login = document.getElementById("name").value
    var pass = document.getElementById("password").value

    localStorage.setItem("loginset", login)
    localStorage.setItem("passset", pass)
    
}

function entrar(){
    var login1 = localStorage.getItem("loginset")
    var pass1 = localStorage.getItem("passset")
    var login2 = window.document.getElementById("name2").value
    var pass2 = window.document.getElementById("password2").value

    if (login1 == login2 && pass1 == pass2){
        jogo()
    } else{
        erro()
    }
}

function jogo(){
    var iframeParent = window.parent.document.getElementById("pop-up2")
    if(iframeParent){
        iframeParent.classList.remove("animar")
        iframeParent.offsetWidth
        iframeParent.classList.add("animar")
    }

    var verificação = 0
    verificação = verificação + 1
    localStorage.setItem("verificar", verificação)

    var botao = window.parent.document.getElementById("btn-2")
    if(botao){
    botao.classList.add("btn-2-1")
    botao.style.backgroundColor = "greenyellow"
    }
}
function erro(){
    var iframeParent = window.parent.document.getElementById("pop-up")
    if(iframeParent){
        // iframeParent.style.top = "10%"
        iframeParent.classList.remove("animar")
        iframeParent.offsetWidth
        iframeParent.classList.add("animar")
    }
}
