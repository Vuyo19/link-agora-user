import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart 

class EmailSender: 

    def __init__(self, sender_email, sender_password):
        self.sender_email = sender_email
        self.sender_password = sender_password

    def send_email(self, receiver_email, subject, body):
        # Create the email content
        msg = MIMEMultipart()
        msg["From"] = self.sender_email
        msg["To"] = receiver_email
        msg["Subject"] = subject
        msg.attach(MIMEText(body, "plain"))

        # Set up the SMTP server
        server = smtplib.SMTP("smtp.gmail.com", 587)
        server.starttls()  # Start TLS encryption

        # Log in to your Gmail account
        server.login(self.sender_email, self.sender_password)

        # Send the email
        server.sendmail(self.sender_email, receiver_email, msg.as_string())

        # Quit the SMTP server
        server.quit()