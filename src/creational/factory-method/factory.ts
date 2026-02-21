// Product interface
interface Product {
  create(): void;
}

// Concrete Products
class ConcreteProductA implements Product {
  create(): void {
    console.log("Product A created");
  }
}

class ConcreteProductB implements Product {
  create(): void {
    console.log("Product B created");
  }
}

// Creator
abstract class Creator {
  abstract factoryMethod(): Product;

  someOperation(): void {
    const product = this.factoryMethod();
    product.create();
  }
}

// Concrete Creators
class ConcreteCreatorA extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductA();
  }
}

class ConcreteCreatorB extends Creator {
  factoryMethod(): Product {
    return new ConcreteProductB();
  }
}

// Demo
export function runFactoryMethod() {
  const creatorA = new ConcreteCreatorA();
  creatorA.someOperation();

  const creatorB = new ConcreteCreatorB();
  creatorB.someOperation();
}
