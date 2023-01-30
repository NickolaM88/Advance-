function search() {
   let listElement = document.querySelectorAll('ul#towns li');
   let resultElement = document.getElementById('result');
   let searchText = document.getElementById('searchText').value;
   let matches = 0;

   for (const element of listElement) {
      element.style.fontWeight = 'normal';
      element.style.textDecoration = 'none';   
   }

   for (const element of listElement) {
      let text = element.textContent;

      if(text.match(searchText)) {
         matches++;
         element.style.fontWeight = 'bold';
         element.style.textDecoration = 'underline';
      }
   }
   resultElement.textContent = `${matches} matches found`
}