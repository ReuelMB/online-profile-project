import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
export const sendEmail = (data) => {
    emailjs
        .send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, data, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY
        })
        .then(
            () => {
                toast("Email has been sent successfully!");
            },
            (error) => {
                console.log("FAILED...", error.text);
                toast("An issue was encountered while sending the email. Please message me on social media instead.");
            }
        );
};