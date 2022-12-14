interface IMailTo {
    name : string;
    email: string;
}

interface IMailMessage {
    subject: string;
    body: string;
    attachment?: string[];
}

interface IMessageDTO {
    to: IMailTo,
    message: IMailMessage
}

interface IEmailService {
    sendEmail(request: IMessageDTO): void;
}
//DTO: Data Transfer Object 

class EmailService implements IEmailService {
    sendEmail({to, message} : IMessageDTO) {
        console.log(`Email enviado para ${to.email} : ${message.subject}`);
    }
}

export default EmailService;