window.addEventListener("load", () =>{
    const form = document.getElementById("form");
    const name = document.getElementById("inputName");
    const email = document.getElementById("inputEmail");
    const tel = document.getElementById("inputTelefono");
    
    form.addEventListener("submit", (e) =>{
        e.preventDefault()
        validarCampos()
    })

    const validarCampos = () => {
        const nameValue = name.value.trim()
        const emailValue = email.value.trim();
        const telValue = tel.value.trim();

        if(!nameValue){
            validarFalla(name, 'Campo vacio')
        }else{
            validarOk(name, '')
        }

        if(!emailValue){
            validarFalla(email, 'Campo Vacio')
        }else if(!validarEmail(emailValue)){
            validarFalla(email, 'El email no es valido')
        }else{
            validarOk(email, '')
        }
    }

    const validarFalla = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje

        formControl.className = 'form-control falla'
    }

    const validarOk = (input, msje) => {
        const formControl = input.parentElement
        const aviso = formControl.querySelector('p')
        aviso.innerText = msje
        formControl.className = 'form-control ok'
    }

    const validarEmail = (email) => {
        return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email);
    }

})
