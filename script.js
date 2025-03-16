function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function showMoodMessage(mood) {
    document.getElementById('mood-message').textContent = `You are feeling ${mood}.`;
}

