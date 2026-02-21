export interface IEmailService {
  send(email: string, message: string): void;
}
