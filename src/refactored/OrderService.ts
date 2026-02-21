import { IPaymentProcessor } from "../interfaces/IPaymentProcessor";
import { IEmailService } from "../interfaces/IEmailService";
import { IOrderRepository } from "../interfaces/IOrderRepository";

export class OrderService {
  constructor(
    private paymentProcessor: IPaymentProcessor,
    private emailService: IEmailService,
    private orderRepository: IOrderRepository
  ) {}

  createOrder(userEmail: string, amount: number): void {
    this.orderRepository.save(amount);
    this.paymentProcessor.process(amount);
    this.emailService.send(userEmail, "Order confirmed");
  }
}
