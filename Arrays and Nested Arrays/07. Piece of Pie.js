function solve(pie,firstFlavor,secondFlavor) {
    let start = pie.indexOf(firstFlavor);
    let end = pie.indexOf(secondFlavor) + 1;
    let newPie = pie.slice(start, end);
    return newPie;
}

solve(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie')