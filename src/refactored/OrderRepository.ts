import { IOrderRepository } from "../interfaces/IOrderRepository";

export class OrderRepository implements IOrderRepository {
  save(amount: number): void {
    console.log(`Order saved with amount: ${amount}`);
  }
}
