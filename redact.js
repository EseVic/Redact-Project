// document.addEventListener('DomContentLoaded', ()=>{
//     const form = document.getElementById('redaction-form');
//     const originalText = document.getElementById('original-text');
//     const redactedText = document.getElementById('words-to-redact');
//     const replacementOption = document.getElementById('replacement-option');
//     const 
// })


document.addEventListener('DOMContentLoaded', () =>{
    const form = document.getElementById('redaction-form');
    const textWord = document.getElementById('text-word')
    // const originalText = document.getElementById('original-text');
    const wordsToRedactInput = document.getElementById('words-to-redact');
    const replacementOption = document.getElementById('replacement-option');
    const redactedContent = document.getElementById('redacted-content');
    // const status = document.getElementById('status');
    const scanned = document.getElementById('scanned');
    const redat = document.getElementById('redat');
    const charRed = document.getElementById('charRed');
    const time = document.getElementById('time');

    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        const text =textWord.value;
        const words = wordsToRedactInput.value.split(' ');
        const replacement = replacementOption.value;
      
        const redactedText = redactText(text, words, replacement);
        redactedContent.textContent = redactedText;


        const wordsScanned = text.split(' ').length;
        const wordsRedacted = words.length;
        const charactersRedacted = redactedText.length;
        const timeTaken = calculateTimeTaken();

        scanned.textContent = wordsScanned;
        redat.textContent = wordsRedacted;
        charRed.textContent = charactersRedacted;
        time.textContent = timeTaken;
        // status.textContent = `Words scanned: ${wordsScanned}, Words redacted: ${wordsRedacted}, Characters redacted: ${charactersRedacted}, Time taken: ${timeTaken} seconds`;
    });

    function redactText(text, words, replacement) {
        let redactedText = text;
        if(replacement == 'Dash')
            replacement= '-'
        else if (replacement == 'Astericks')
            replacement = '*'
        else if(replacement == 'Underscore')
            replacement = '_'
        else
        replacement = '?'
        
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