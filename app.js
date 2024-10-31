const webhookURL = 'https://discord.com/api/webhooks/1301347024217706496/aFmAETsHxrZUMnot5AKbH6Ui__guh9sq5EK2GzTdNyuwzxYTHsBjyvnmoSbubr4fS7n2';

document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const talla = document.getElementById('talla').value;
    const genero = document.getElementById('genero').value;
    const entrega = document.getElementById('entrega').value;
    const valor = document.getElementById('valor').value;
    const instagram = document.getElementById('instagram').value;
    const nota = document.getElementById('nota').value;

    const mensaje = {
        content: `☆ ☆ ☆ ☆ ☆ Nuevo pedido ☆ ☆ ☆ ☆ ☆\n**Nombre:** ${nombre}\n**Talla:** ${talla}\n**Género:** ${genero}\n**Entrega:** ${entrega}\n**Valor:** ${valor}\n**Instagram:** ${instagram}\n**Nota:** ${nota}`
    };


    fetch(webhookURL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(mensaje)
    })
    .then(response => {
        if (response.ok) {
            showModal('Mensaje enviado correctamente!', true);
        } else {
            throw new Error('Error al enviar el mensaje');
        }
    })
    .catch(error => {
        showModal('Error al enviar el mensaje: ' + error.message, false);
    });

    document.getElementById('contactForm').reset();
});

function showModal(message, isSuccess) {
    const modalMessage = document.getElementById('modalMessage');
    modalMessage.innerText = message;


    const modal = new bootstrap.Modal(document.getElementById('myModal'));
    modal.show();
}

document.querySelector('.btn-close').addEventListener('click', function() {
    const modal = bootstrap.Modal.getInstance(document.getElementById('myModal'));
    modal.hide();
});
