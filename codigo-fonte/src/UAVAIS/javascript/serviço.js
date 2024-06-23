function salvarMsg() {
    const msg = document.getElementById('msg').value;
    var data = new Date();
    var opcoesFormatacao = { timeZone: 'America/Sao_Paulo' };
    var dataFormatada = data.toLocaleString('pt-BR', opcoesFormatacao);
   
    localStorage.setItem('salvarMsg', msg);
    document.getElementById('salvarMsg').innerText = 'Historico: ' + msg  + " "+ dataFormatada;
}
window.onload = function() {
    const savedMessage = localStorage.getItem('salvarMsg');
    if (savedMessage) {
        document.getElementById('salvarMsg').innerText = 'Historico: ' + salvarMsg;
    }
};