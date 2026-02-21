// Observer interface
interface Observer {
  update(message: string): void;
}

// Subject interface
interface Subject {
  attach(observer: Observer): void;
  detach(observer: Observer): void;
  notify(message: string): void;
}

// Concrete Subject
class NewsAgency implements Subject {
  private observers: Observer[] = [];

  attach(observer: Observer): void {
    this.observers.push(observer);
  }

  detach(observer: Observer): void {
    this.observers = this.observers.filter(o => o !== observer);
  }

  notify(message: string): void {
    for (const observer of this.observers) {
      observer.update(message);
    }
  }
}

// Concrete Observer
class NewsChannel implements Observer {
  constructor(private name: string) {}

  update(message: string): void {
    console.log(`${this.name} received news: ${message}`);
  }
}

// Demo
export function runObserver() {
  const agency = new NewsAgency();

  const channel1 = new NewsChannel("Channel 1");
  const channel2 = new NewsChannel("Channel 2");

  agency.attach(channel1);
  agency.attach(channel2);

  agency.notify("New Design Pattern implemented!");
}
