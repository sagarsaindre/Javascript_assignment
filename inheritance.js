function Animal(name) {
  this.name=name;
}

 Animal.prototype.print_name=function() {
  console.log(this.name);
 };

function Dog(name,tail) {
  Animal.call(this,name);
  this.tail=tail;
}

// Inherit the Animal prototype
Dog.prototype = Object.create(Animal.prototype);

// Set the Dog constructor to 'Dog'
Dog.prototype.constructor = Dog;

Dog.prototype.hastail = function() {
    return this.tail;
}


function Human(name,tail) {
  Animal.call(this,name);
  this.tail=tail;
}

Human.prototype=Object.create(Animal.prototype);

Human.prototype.constructor=Human;

Human.prototype.notail=function() {
  return this.tail;
}



var fido = new Dog('Fido','true');

fido.print_name();