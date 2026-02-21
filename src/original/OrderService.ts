export class OrderService {
  createOrder(userEmail: string, amount: number) {
    console.log("Saving order to database...");
    console.log(`Charging ${amount} from user`);
    console.log(`Sending confirmation email to ${userEmail}`);
  }
}