// Product
class House {
  public walls?: string;
  public roof?: string;
  public doors?: number;

  show(): void {
    console.log("House built with:");
    console.log("Walls:", this.walls);
    console.log("Roof:", this.roof);
    console.log("Doors:", this.doors);
  }
}

// Builder interface
interface HouseBuilder {
  buildWalls(): void;
  buildRoof(): void;
  buildDoors(): void;
  getResult(): House;
}

// Concrete Builder
class ConcreteHouseBuilder implements HouseBuilder {
  private house: House;

  constructor() {
    this.house = new House();
  }

  buildWalls(): void {
    this.house.walls = "Brick walls";
  }

  buildRoof(): void {
    this.house.roof = "Concrete roof";
  }

  buildDoors(): void {
    this.house.doors = 4;
  }

  getResult(): House {
    return this.house;
  }
}

// Director
class Director {
  constructor(private builder: HouseBuilder) {}

  construct(): House {
    this.builder.buildWalls();
    this.builder.buildRoof();
    this.builder.buildDoors();
    return this.builder.getResult();
  }
}

// Demo
export function runBuilder() {
  const builder = new ConcreteHouseBuilder();
  const director = new Director(builder);
  const house = director.construct();
  house.show();
}
