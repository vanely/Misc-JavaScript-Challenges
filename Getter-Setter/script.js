function Person(name) {

}

Person.prototype = {
    setName(n) {
        name = n;
    },

    getName() {
        return name;
    }
};

let erica = new Person('Erica');

erica.setName('Erica');
console.log(erica.getName());
