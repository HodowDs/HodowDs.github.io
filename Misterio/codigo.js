function checkCode() {
    const correctCode = "filepe + sofu = 2710";
    const codeInput = document.getElementById('codeInput').value;
    const message = document.getElementById('message');

    if (codeInput === correctCode) {
        window.location.href = "https://hodowds.github.io/Misterio/test.html";
    } else {
        message.textContent = "Ese no es, animo amor.";
        message.style.color = 'pink';
    }
}

