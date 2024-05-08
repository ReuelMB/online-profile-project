export default function FormInput({label,...attr}) {
  let inputField = null;
  switch (attr.type) {
    case "textarea":
      inputField = <textarea {...attr} className="p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"/>;
      break;
    default:
      inputField = <input {...attr} className="shadow border rounded w-full py-2 px-3 text-gray-700"/>;
  }
  return (
    <>
      <label
        htmlFor={attr.name}
        className=" text-gray-700 text-sm font-bold"
      >
        {label}
      </label>
      {inputField}
    </>
  );
}
