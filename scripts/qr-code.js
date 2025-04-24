const qrCodeContainer = document.getElementById('qr-code');
const petDetailsContainer = document.getElementById('pet-details');

function generateQRCode(data) {
    new QRCode(qrCodeContainer, {
        text: data,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#f2fbf7",
        correctLevel: QRCode.CorrectLevel.L,
    });
}

function getDecodedData() {
    const params = new URLSearchParams(window.location.search);
    const encodedData = params.get('data');
    if (!encodedData) {
        return null;
    }
    try {
        return JSON.parse(atob(encodedData)); // Decodifica o Base64 e converte para objeto
    } catch (error) {
        console.error("Erro ao decodificar os dados:", error);
        return null;
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const petData = getDecodedData();

    if (!petData) {
        petDetailsContainer.innerHTML = `<p class="text-danger">Erro: Não foi possível carregar os dados do pet.</p>`;
        return;
    }

    // Exibe os detalhes do pet na tela
    petDetailsContainer.innerHTML = `
        <p style="width:60%"><strong>Nome do Pet:</strong> ${petData.petName.toUpperCase()}</p>
        <p style="width:20%"><strong>Sexo:</strong> ${petData.petSex === 'm' ? 'MACHO' : 'FÊMEA'}</p>
        <p><strong>Pet:</strong> ${petData.type.toUpperCase()} </p>
        <p style="width:50%"><strong>Raça:</strong> ${petData.petBreed.toUpperCase()} (${petData.color.toUpperCase()})</p>
        <p style="width:60%"><strong>Naturalidade:</strong> ${petData.petOrigin} (${petData.birthDate.split("-").reverse().join("/")})</p>
        <p style="width:20%"><strong>Castrado:</strong> ${petData.petNeutered === 's' ? 'SIM' : 'NÃO'}</p>
        <p style="width:80%"><strong>Nome do Tutor:</strong> ${petData.ownerName.toUpperCase()}</p>
        <p style="width:80%"><strong>WhatsApp do Tutor:</strong> ${petData.ownerWhatsapp}</p>
    `;

    generateQRCode(window.location.href);
});