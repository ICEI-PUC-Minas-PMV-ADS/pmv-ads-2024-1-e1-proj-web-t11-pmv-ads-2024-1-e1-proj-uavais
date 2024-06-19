document.addEventListener('DOMContentLoaded', () => {
    const dataHoraInput = document.getElementById('dataHora');
    const agendaBotao = document.getElementById('agendaBotao');
    const confirmarPopup = document.getElementById('confirmarPopup');
    const cancelarPopup = document.getElementById('cancelarPopup');
    const overlay = document.getElementById('overlay');
    const okBotao = document.getElementById('okBotao');
    const naoBotao = document.getElementById('naoBotao');
    const simBotao = document.getElementById('simBotao');
    const agendaReuniao = document.getElementById('agendaReuniao');

    function updateagendaReuniao() {
        const scheduledData = localStorage.getItem('agendaReuniao');
        if (scheduledData) {
            agendaReuniao.textContent = scheduledData;
            agendaReuniao.style.cursor = 'pointer';
        } else {
            agendaReuniao.textContent = 'Sem reunião agendada';
            agendaReuniao.style.cursor = 'default';
        }
    }

    agendaBotao.addEventListener('click', () => {
        const selecteddataHora = dataHoraInput.value;
        if (selecteddataHora) {
            localStorage.setItem('agendaReuniao', selecteddataHora);
            updateagendaReuniao();
            overlay.style.display = 'block';
            confirmarPopup.style.display = 'block';
        } else {
            alert('Por favor, selecione uma data e hora.');
        }
    });

    okBotao.addEventListener('click', () => {
        overlay.style.display = 'none';
        confirmarPopup.style.display = 'none';
    });

    agendaReuniao.addEventListener('click', () => {
        if (localStorage.getItem('agendaReuniao')) {
            overlay.style.display = 'block';
            cancelarPopup.style.display = 'block';
        }
    });

    naoBotao.addEventListener('click', () => {
        overlay.style.display = 'none';
        cancelarPopup.style.display = 'none';
    });

    simBotao.addEventListener('click', () => {
        localStorage.removeItem('agendaReuniao');
        updateagendaReuniao();
        overlay.style.display = 'none';
        cancelarPopup.style.display = 'none';
    });

    updateagendaReuniao();
});
