document.getElementById('run-tests').addEventListener('click', function () {
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = '';

    const testCases = [
        { input: [1, 2, 2, 3, 4, 4, 5], expected: [1, 2, 3, 4, 5] },
        { input: [7, 7, 7, 7], expected: [7] },
        { input: [1, 1, 2, 2, 3, 3, 4, 4, 5], expected: [1, 2, 3, 4, 5] },
        { input: [], expected: [] },
        { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
    ];

    testCases.forEach((test, index) => {
        try {
            const result = rimuoviDuplicati(test.input);
            const passed = JSON.stringify(result) === JSON.stringify(test.expected);
            const message = `Test ${index + 1}: Input = [${test.input}] => Risultato: [${result}] | Atteso: [${test.expected}] | ${passed ? 'Successo' : 'Fallito'}`;
            const resultElement = document.createElement('p');
            resultElement.textContent = message;
            resultElement.style.color = passed ? 'green' : 'red';
            resultsContainer.appendChild(resultElement);
        } catch (error) {
            const message = `Test ${index + 1}: Input = [${test.input}] ha generato un errore: ${error.message}`;
            const resultElement = document.createElement('p');
            resultElement.textContent = message;
            resultElement.style.color = 'red';
            resultsContainer.appendChild(resultElement);
        }
    });
});
