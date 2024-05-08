import { useRef } from "react";
import ContactForm from "./ContactFormContent";
import { Button, SectionHead } from "../Components";
import { sendEmailClicked } from "../Utils/Utils";
export default function ContactMe() {
  const contactForm = useRef();
  return (
    <div className="flex flex-col">
      <SectionHead
        title="Contact Me"
        description="This will send an email to me with the information you provided in the form."
      />
      <form
        ref={contactForm}
        onSubmit={(e) => sendEmailClicked(e, contactForm)}
      >
        <ContactForm />
        <div className="flex flex-row items-center justify-center">
          <Button type="reset" label="Reset" variant="secondary" />
          <Button type="submit" label="Send" variant="primary" />
        </div>
      </form>
    </div>
  );
}
