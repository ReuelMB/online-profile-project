export default function SectionHead({ title, text }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h2 className="text-4xl text-gray-900 font-bold">{title}</h2>
      <p className="text-center text-gray-500">{text}</p>
      <hr />
    </div>
  );
}
