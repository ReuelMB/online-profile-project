export default function Link(props) {
  const icon = props.icon ? (
    <img src={props.icon} alt={props.label} className="w-10" />
  ) : null;
  const text = props.text ? <span className="underline text-blue-500">{props.text}</span> : null;
  return (
    <>
      <a href={props.href} target="_blank">
        {icon}
        {text}
      </a>
    </>
  );
}
