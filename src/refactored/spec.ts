import { OrderService } from "./OrderService";

class MockPayment {
  process(amount: number): void {}
}

class MockEmail {
  send(email: string, message: string): void {}
}

class MockRepository {
  save(amount: number): void {}
}

describe("OrderService", () => {
  it("should create order without errors", () => {
    const orderService = new OrderService(
      new MockPayment(),
      new MockEmail(),
      new MockRepository()
    );

    expect(() => {
      orderService.createOrder("test@email.com", 100);
    }).not.toThrow();
  });
});

