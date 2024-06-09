function salvarMsg() {
    const msg = document.getElementById('msg').value;
    localStorage.setItem('salvarMsg', msg);
    document.getElementById('salvarMsg').innerText = 'Historico: ' + msg;
}
window.onload = function() {
    const savedMessage = localStorage.getItem('salvarMsg');
    if (savedMessage) {
        document.getElementById('salvarMsg').innerText = 'Historico: ' + salvarMsg;
    }
};