function sumTable() {
    // select all data rows (exclude first and last row)
    let rows = Array.from(document.querySelectorAll('tr')).slice(1,-1);
    let sum = 0;
    //for each row
    for (const row of rows) {
        let value = Number(row.lastElementChild.textContent);
        sum += value;
    }
    //display sum in total row
    document.getElementById('sum').textContent = sum;
}