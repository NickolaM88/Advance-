function solve() {
  let input = document.getElementById('input').value;
  let output = document.getElementById('output');

  let sentence = input.split('.').filter(s => s.length != 0);

  while (sentence.length > 0) {
    let textForParagraph = sentence.splice(0, 3).join('. ') + '.';
    let p = document.createElement('p');
    p.textContent = textForParagraph;
    output.appendChild(p);
  }
}