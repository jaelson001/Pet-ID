document.getElementById("pet-registration-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores do formulário
    const petData = {
        petName: document.getElementById("pet-name").value,
        petSex: document.querySelector('input[name="pet-sex"]:checked').value,
        petBreed: document.getElementById("pet-breed").value,
        petOrigin: document.getElementById("pet-origin").value,
        petNeutered: document.querySelector('input[name="pet-neutered"]:checked').value,
        ownerName: document.getElementById("owner-name").value,
        ownerWhatsapp: document.getElementById("owner-whatsapp").value,
        type: document.getElementById('pet-type').value,
        birthDate: document.getElementById('pet-birthdate').value,
        color: document.getElementById('pet-color').value
    };

    // Codifica os dados em Base64
    const encodedData = btoa(JSON.stringify(petData));

    // Redireciona para a página de resultados com o objeto codificado na URL
    window.location.href = `result.html?data=${encodedData}`;
});