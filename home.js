document.addEventListener("DOMContentLoaded", function() {
    const nomeBoletoInput = document.getElementById("nomeBoleto");
    const dataVencimentoInput = document.getElementById("dataVencimento");
    const adicionarBoletoButton = document.getElementById("adicionarBoleto");
    const listaBoletos = document.getElementById("listaBoletos");
    const userProfile = document.getElementById("user-profile");

    // Usuário e foto de perfil fictícios
    const usuario = {
        nome: "Thuany Lopes Tavares Guerra",
        fotoPerfil: "/TESTE SISTEMA FARMACIA/Por-que-a-assistencia-farmaceutica-e-importante-no-SUS.jpg"
    };

    // Atualiza as informações do usuário
    userProfile.querySelector("img").src = usuario.fotoPerfil;
    userProfile.querySelector("h2").textContent = usuario.nome;

    adicionarBoletoButton.addEventListener("click", function() {
        const nomeBoleto = nomeBoletoInput.value;
        const dataVencimento = new Date(dataVencimentoInput.value);

        if (nomeBoleto && dataVencimento) {
            const hoje = new Date();
            const diferencaDias = Math.floor((dataVencimento - hoje) / (1000 * 60 * 60 * 24));
            
            if (diferencaDias >= 0) {
                const listItem = document.createElement("li");
                listItem.innerHTML = `<strong>${nomeBoleto}</strong> vence em ${diferencaDias} dias.`;
                listaBoletos.appendChild(listItem);

                if (diferencaDias <= 3) {
                    alert(`Aviso: O boleto ${nomeBoleto} vence em ${diferencaDias} dias!`);
                }
            } else {
                alert("A data de vencimento deve ser no futuro.");
            }
        } else {
            alert("Preencha o nome do boleto e a data de vencimento.");
        }
    });
});