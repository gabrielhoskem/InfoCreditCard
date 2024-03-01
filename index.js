var nomeInput = document.querySelector(".nome")
var numeroInput = document.querySelector(".numero")
var mesInput = document.querySelector(".mes")
var anoInput = document.querySelector(".ano")
var codigoInput = document.querySelector(".codigo")
var btn = document.querySelector(".confirm")

nomeInput.addEventListener("input", (evento) => {
    var nome = nomeInput.value
    var nomeCartao = document.querySelector(".nomecartao")
    nomeCartao.textContent = nome
})

numeroInput.addEventListener("input", (evento) => {
    var numero = numeroInput.value
    var numCartao = document.querySelector(".numerocartao")
    numCartao.innerHTML = numero
    numeroInput.addEventListener("blur", (error) => {
        var arrayN = [...numero]
        if (arrayN.length != 16) {
            numeroInput.classList.add("error")
        } else {
            numeroInput.classList.remove("error")
        }
    })
})

mesInput.addEventListener("input", (evento) => {
    const mes = mesInput.value
    var arrayM = [...mes]

    anoInput.addEventListener("input", (evento) => {
        const ano = anoInput.value
        var anoCard = document.querySelector(".validadecartao")
        anoCard.innerHTML = mes + "/" + ano
        var arrayA = [...ano]
        if (arrayM.length != 2 || arrayA.length != 2) {
            anoInput.classList.add("error")
            mesInput.classList.add("error")
        } else {
            anoInput.classList.remove("error")
            mesInput.classList.remove("error")
        }
    })

})

codigoInput.addEventListener("input", (evento) => {
    var codigo = codigoInput.value
    var codigoCartao = document.querySelector(".codigodeverificacao").innerHTML = codigo
    codigoInput.addEventListener("blur", (error) => {
        var arrayC = [...codigo]
        if (arrayC.length !== 3) {
            codigoInput.classList.add("error")
        } else {
            codigoInput.classList.remove("error")
        }
    }

    )

})

const checarNome = () => {
    var checarNomeVazio = nomeInput.value.trim()
    if (checarNomeVazio == "") {
        return true
    } else {
        return false

    }
}

const checarNumero = () => {
    var checarNumeroVazio = numeroInput.value.trim()
    if (checarNumeroVazio == "") {
        return true
    } else {
        return false

    }
}

const checarMes = () => {
    var checarMesVazio = mesInput.value.trim()
    if (checarMesVazio == "") {
        return true
    } else {
        return false

    }
}

const checarAno = () => {
    var checarAnoVazio = anoInput.value.trim()
    if (checarAnoVazio == "") {
        return true
    } else {
        return false

    }
}

const checarCodigo = () => {
    var checarCodigoVazio = codigoInput.value.trim()
    if (checarCodigoVazio == "") {
        return true
    } else {
        return false

    }
}

btn.addEventListener("click", (enviar) => {
    checarNome()
    var a = numeroInput.classList.contains("error");
    var b = mesInput.classList.contains("error");
    var c = anoInput.classList.contains("error");
    var d = codigoInput.classList.contains("error");
    if (a == true || b == true || c == true || d == true || checarNome() == true || checarNumero() == true || checarMes() == true || checarAno() == true || checarCodigo() == true) {
        alert("Porfavor, preencha os campos corretamente")
    } else {
        const remover = () => {
            var painelbranco = document.querySelector(".painelbranco")
            painelbranco.remove()
        }
        remover()
        var painelbranco2 = document.querySelector(".painelbranco2")
        painelbranco2.classList.remove("desaparece")

    }
})
