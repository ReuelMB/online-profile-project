export const ContactMeFields = [
    {
      name: "name",
      type: "text",
      placeholder: "Your full name...",
      label: "Full Name",
      validation: {
        required: {
          value: true,
          message: "Name is required.",
        },
      },
    },
    {
      name: "email",
      type: "email",
      placeholder: "Your email...",
      label: "Email",
      validation: {
        required: {
          value: true,
          message: "Email is required.",
        },
        pattern: {
          value:
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          message: "Not a valid email address.",
        },
      },
    },
    {
      name: "message",
      multiline: true,
      placeholder: "Your message...",
      rows: "4",
      label: "Message",
      validation: {
        required: {
          value: true,
          message: "Message is required.",
        },
      },
    },
  ];