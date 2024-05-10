import { useFormContext } from "react-hook-form";
export default function FormField(props) {
  const { register, getFieldState, formState } = useFormContext();
  const { invalid, error } = getFieldState(props.name, formState);
  return (
    <>
      <label htmlFor={props.name} className={`text-sm font-bold ${!invalid ? "text-gray-700" : "text-red-300"}`}>
        {props.label}
      </label>
      {props.multiline ? (
        <textarea
          type={props.type}
          placeholder={props.placeholder}
          rows={props.rows}
          className={`p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border focus:outline-none ${
            invalid ? "border-red-300" : "border-gray-300"
          }`}
          {...register(props.name, props.validation)}
        ></textarea>
      ) : (
        <input
          type={props.type}
          placeholder={props.placeholder}
          {...register(props.name, props.validation)}
          className={`shadow border rounded w-full py-2 px-3 text-gray-700 focus:outline-none ${
            invalid ? "border-red-300" : "border-gray-300"
          }`}
        />
      )}
      <p className="text-red-300 text-right">{error?.message}</p>
    </>
  );
}
