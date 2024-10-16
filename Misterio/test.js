function checkAnswers() {
    const correctAnswers = {
        q1: 'A',
        q2: 'C',
        q3: 'B',
        q4: 'A',
        q5: 'A'
    };

    const form = document.getElementById('quizForm');
    let allCorrect = true;

    for (const question in correctAnswers) {
        const selected = form.elements[question].value;
        if (selected !== correctAnswers[question]) {
            allCorrect = false;
            break;
        }
    }

    const message = document.getElementById('message');
    if (allCorrect) {
        window.location.href = "";
    } else {
        message.textContent = "Algunas respuestas son incorrectas. ¡Inténtalo de nuevo!";
        message.style.color = 'red';
    }
}
