// Target interface
interface Target {
  request(): void;
}

// Adaptee (несумісний клас)
class OldSystem {
  specificRequest(): void {
    console.log("Specific request from Old System");
  }
}

// Adapter
class Adapter implements Target {
  constructor(private adaptee: OldSystem) {}

  request(): void {
    console.log("Adapter converts request...");
    this.adaptee.specificRequest();
  }
}

// Demo
export function runAdapter() {
  const oldSystem = new OldSystem();
  const adapter = new Adapter(oldSystem);

  adapter.request();
}
