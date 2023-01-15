class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    // може да се дефинира и като get diameter 
    //  и после го викаме като console.log(c.diameter);
    // ако ги зададем като get diameter & set diameter 
    // задължително трябва да бъдат с едни и същи имена
    
    get diameter() { 
        return 2*this.radius;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }

    get area () {
        return Math.PI * this.radius * this.radius;
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);