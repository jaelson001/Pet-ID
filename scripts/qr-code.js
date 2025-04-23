const qrCodeContainer = document.getElementById('qr-code');
const petDetailsContainer = document.getElementById('pet-details');

function generateQRCode(data) {
    new QRCode(qrCodeContainer, {
        text: data,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
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
        <p><strong>Nome do Pet:</strong> ${petData.petName}</p>
        <p><strong>Sexo:</strong> ${petData.petSex === 'm' ? 'Masculino' : 'Feminino'}</p>
        <p><strong>Raça:</strong> ${petData.petBreed}</p>
        <p><strong>Naturalidade:</strong> ${petData.petOrigin}</p>
        <p><strong>Castrado:</strong> ${petData.petNeutered === 's' ? 'Sim' : 'Não'}</p>
        <p><strong>Nome do Dono:</strong> ${petData.ownerName}</p>
        <p><strong>WhatsApp do Dono:</strong> ${petData.ownerWhatsapp}</p>
    `;

    generateQRCode(window.location.href);
});