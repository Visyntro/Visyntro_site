const registrationInput = [
  {
    id: "organization",
    label: "Organization Name",
    required: true,
  },
  { id: "name", label: "Name", required: true },
  {
    id: "email",
    label: "Email Address",
    type: "email",
    required: true,
  },
  {
    id: "phone",
    label: "Phone No.",
    type: "number",
    required: true,
  },
  {
    id: "business",
    label: "What is your business?",
    required: false,
  },
];

export default registrationInput;
