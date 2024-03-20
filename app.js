function encode() {
    let input = document.getElementById('input-text').value;
    let output = '';
    for (let i = 0; i < input.length; i++) {
        let char = input[i];
        switch (char) {
            case 'e':
                output += 'enter';
                break;
            case 'i':
                output += 'imes';
                break;
            case 'a':
                output += 'ai';
                break;
            case 'o':
                output += 'ober';
                break;
            case 'u':
                output += 'ufat';
                break;
            default:
                output += char;
        }
    }
    document.getElementById('output').innerText = output;
}

function decode() {
    let input = document.getElementById('input-text').value;

    let output = input.replace(/enter/g, 'e')
                      .replace(/imes/g, 'i')
                      .replace(/ai/g, 'a')
                      .replace(/ober/g, 'o')
                      .replace(/ufat/g, 'u');

    document.getElementById('output').innerText = output;
}
function copyOutputToClipboard() {
    var outputText = document.getElementById("output").textContent;
    var textarea = document.createElement("textarea");
    textarea.textContent = outputText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);

    var popup = document.getElementById("copy-output-popup");
    popup.style.display = "block";
}

function closePopup() {
    var popup = document.getElementById("copy-output-popup");
    popup.style.display = "none";
}

