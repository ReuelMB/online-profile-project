import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
const sendEmail = (formRef) => {
    emailjs
        .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formRef.current, {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
        })
        .then(
            () => {
                toast("Email has been sent successfully!");
            },
            (error) => {
                console.log("FAILED...", error.text);
                toast("An issue was encountered while sending the email. Please message me on social media instead.");
            }
        ).then(formRef.current.reset());
};

export const sendEmailClicked = (e, formRef, callBack) => {
    e.preventDefault();
    if (callBack) {
        callBack();
    }
    sendEmail(formRef);
};
