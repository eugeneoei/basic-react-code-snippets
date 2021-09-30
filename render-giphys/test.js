class Animal {

	constructor(name) {
		this.name = name
	}

	methodOne() {
		console.log('Animal method 1')
	}

	methodOne() {
		console.log('Animal method 2')
	}

}

class Dog extends Animal {

	methodOne() {
		console.log('Dog method 1')
	}

}

const dog = new Dog()

dog.methodOne()