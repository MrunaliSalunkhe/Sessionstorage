function saveData() {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;

    sessionStorage.setItem('username', username);
    sessionStorage.setItem('email', email);
    sessionStorage.setItem('age', age);

    console.log('Data saved to session storage:');
    console.log(`Username: ${username}`);
    console.log(`Email: ${email}`);
    console.log(`Age: ${age}`);

    document.getElementById('result').innerText = 'Data saved! Check console for details.';
}

function getData() {
    const username = sessionStorage.getItem('username');
    const email = sessionStorage.getItem('email');
    const age = sessionStorage.getItem('age');

    if (username && email && age) {
        console.log('Retrieved data from session storage:');
        console.log(`Username: ${username}`);
        console.log(`Email: ${email}`);
        console.log(`Age: ${age}`);

        document.getElementById('result').innerText = 'Data retrieved! Check console for details.';
    } else {
        console.log('No data found in session storage.');
        document.getElementById('result').innerText = 'No data found.';
    }
}

function clearData() {
    sessionStorage.removeItem('username');
    sessionStorage.removeItem('email');
    sessionStorage.removeItem('age');

    console.log('Data cleared from session storage.');

    document.getElementById('result').innerText = 'Data cleared! Check console for details.';
}
