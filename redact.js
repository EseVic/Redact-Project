// function redactText(text, wordsToRedact, replacement, status = '****') {
//     const words = text.split(/\s+/); // Split text into words
//     let redactedText = '';

//     words.forEach(word => {
//         // Check if the word is in the list of words to redact
//         if (wordsToRedact.includes(word.toLowerCase())) {
//             // If yes, replace with the specified replacement characters
//             redactedText += replacement.repeat(word.length) + ' ';
//         } else {
//             // If no, keep the word as it is
//             redactedText += word + ' ';
//         }
//     });

//     return redactedText.trim(); // Trim extra spaces from the end
// }

// // Example usage
// const originalText = "This is a sample text to be redacted.";
// const wordsToRedact = ["sample", "redacted"];

// const redactedText = redactText(originalText, wordsToRedact);
// console.log(redactedText); // Output: "Th



// document.addEventListener('DOMContentLoaded', ()=> {
//     const form = document.getElementById('redaction-form');
//     const originalText = document.getElementById('original-text');
//     const wordsToRedact = document.getElementById('words-to-redact');
//     const replacementOption = document.getElementById('replacement-option');
//     const redactedContent = document.getElementById('redacted-content');
//     const status = document.getElementById('status');

//     form.addEventListener('submit', (event) => {
//         event.preventDefault();

//         const text = originalText.value;
//         const words = wordsToRedact.value.split(' ');
//         const replacement = replacementOption.value;

//         const redactedText = redactText(text, words, replacement);
//         redactedContent.textContent = redactedText;

//         const wordsScanned = text.split(' ').length;
//         const wordsRedacted = words.length;
//         const charactersRedacted = redactedText.length;
//         const timeTaken = calculateTimeTaken();

//         status.textContent = `Words scanned: ${wordsScanned}, Words redacted: ${wordsRedacted}, Characters redacted: ${charactersRedacted}, Time taken: ${timeTaken} seconds`;
//     });

//     function redactText(text, words, replacement) {
//         let redactedText = text;
//         words.forEach(word => {
//             const regex = new RegExp('\\b' + word + '\\b', 'gi');
//             redactedText = redactedText.replace(regex, replacement.repeat(word.length));
//         });
//         return redactedText;
//     }

//     function calculateTimeTaken() {
//         // Placeholder function to calculate time taken (in seconds)
//         return Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
//     }
// });

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('redaction-form');
    const originalText = document.getElementById('original-text');
    const wordsToRedactInput = document.getElementById('words-to-redact');
    const replacementOption = document.getElementById('replacement-option');
    const redactedContent = document.getElementById('redacted-content');
    const status = document.getElementById('status');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        const text = originalText.value;
        const words = wordsToRedactInput.value.split(' ');
        const replacement = replacementOption.value;

        const redactedText = redactText(text, words, replacement);
        redactedContent.textContent = redactedText;

        const wordsScanned = text.split(' ').length;
        const wordsRedacted = words.length;
        const charactersRedacted = redactedText.length;
        const timeTaken = calculateTimeTaken();

        status.textContent = `Words scanned: ${wordsScanned}, Words redacted: ${wordsRedacted}, Characters redacted: ${charactersRedacted}, Time taken: ${timeTaken} seconds`;
    });

    function redactText(text, words, replacement) {
        let redactedText = text;
        words.forEach(word => {
            const regex = new RegExp('\\b' + word + '\\b', 'gi');
            redactedText = redactedText.replace(regex, replacement.repeat(word.length));
        });
        return redactedText;
    }

    function calculateTimeTaken() {
        // Placeholder function to calculate time taken (in seconds)
        return Math.floor(Math.random() * 10) + 1; // Random number between 1 and 10
    }
});