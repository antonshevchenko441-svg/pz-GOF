import { IEmailService } from "../interfaces/IEmailService";

export class EmailService implements IEmailService {
  send(email: string, message: string): void {
    console.log(`Email sent to ${email}: ${message}`);
  }
}

