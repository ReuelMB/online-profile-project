import Input from "../Components/FormInput";

export default function ContactForm(attr) {
  const inputFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Your name...",
      label: "Name",
      required: true,
    },
    {
      name: "email",
      type: "email",
      placeholder: "Your email...",
      label: "Email",
      required: true,
    },
    {
      name: "message",
      type: "textarea",
      placeholder: "Your message...",
      rows: "4",
      label: "Message",
      required: true,
    },
  ];

  return (
    <>
      <div className="block p-4">
        {inputFields.map((field) => (
          <Input {...field} key={field.name} />
        ))}
      </div>
    </>
  );
}
