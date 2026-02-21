import { runFactoryMethod } from "../src/creational/factory-method/factory";

console.log("=== Factory Method ===");
runFactoryMethod();
import { runBuilder } from "../src/creational/builder/builder";

console.log("\n=== Builder ===");
runBuilder();
import { runAdapter } from "../src/structural/adapter/adapter";

console.log("\n=== Adapter ===");
runAdapter();
import { runDecorator } from "../src/structural/decorator/decorator";

console.log("\n=== Decorator ===");
runDecorator();
import { runStrategy } from "../src/behavioral/strategy/strategy";

console.log("\n=== Strategy ===");
runStrategy();
import { runObserver } from "../src/behavioral/observer/observer";

console.log("\n=== Observer ===");
runObserver();

