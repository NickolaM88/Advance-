function solve() {

    let selectMenu = document.getElementById('selectMenuTo');
    let binaryOption = document.createElement('option');
    binaryOption.textContent = 'Binary';
    binaryOption.value = 'binary';
    
    let hexadecimalOption = document.createElement('option');
    hexadecimalOption.textContent = 'Hexadecimal';
    hexadecimalOption.value = 'hexadecimal';

    selectMenu.appendChild(binaryOption);
    selectMenu.appendChild(hexadecimalOption);

    let selectMap = {
        'binary': num => num.toString(2),
        'hexadecimal': num => num.toString(16).toUpperCase()
    }

    let convertBtn = document.querySelector('#container > button');

    convertBtn.addEventListener('click', (evt) => {
        let inputData = document.getElementById('input');
        let outputData = document.getElementById('result');

        outputData.value = selectMap[selectMenu.value](+inputData.value);
    })
}