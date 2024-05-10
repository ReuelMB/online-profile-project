import { SectionHead } from "../Components";
import { ContactMeForm } from "../Forms";
export default function ContactMe() {
  return (
    <div className="flex flex-col">
      <SectionHead
        title="Contact Me"
        description="This will send an email to me with the information you provided in the form."
      />
      <ContactMeForm/>
    </div>
  );
}
