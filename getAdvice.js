async function getAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    document.getElementById('advice').innerHTML = `"${data.slip.advice}"`;
    document.getElementById('advice-id').innerHTML = data.slip.id;
}