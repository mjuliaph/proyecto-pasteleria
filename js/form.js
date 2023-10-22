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
        }else if(!validarName(nameValue)){
            validarFalla(name, 'El nombre no es valido')
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

        if(!telValue){
            validarFalla(tel, 'Campo Vacio')
        }else if(!validarTel(telValue)){
            validarFalla(tel, 'El telefono no es valido')
        }else{
            validarOk(tel, '')
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

    const validarName = (name) => {
        return /^[A-Z]+$/i.test(name);
    }

    const validarEmail = (email) => {
        return /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(email);
    }

    const validarTel = (tel) => {
        return /^(?:(?:00)?549?)?0?(?:11|[2368]\d)(?:(?=\d{0,2}15)\d{2})??\d{8}$/.test(tel);
    }

})


