import { tools } from "../Constants";
import { Link } from "../Components";
export default function ProjectCard(props) {
  return (
    <div
      className="flex flex-col border justify-center items-center p-6"
      key={props.label}
    >
      <p className="font-bold">{props.label}</p>
      {props.currentPlatform === "ALL" ? (
        <p className="font-semibold text-gray-500">{props.platform}</p>
      ) : (
        ""
      )}
      <p className="font-normal text-center text-gray-500">{props.text}</p>
      <div className="flex flex-col w-full items-center justify-center">
        <div className="rounded-md shadow-sm w-60 md:w-80">
          <img src={props.image} alt={props.label} />
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="font-semibold">Stack</p>
          <div className="flex flex-wrap">
            {props.stack.map((toolId) => {
              const tool = tools.find((tool) => tool.id === toolId);
              return (
                <img
                  className="w-10"
                  src={tool.icon}
                  alt={tool.label}
                  key={tool.id}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Link href={props.href} text="Visit" />
    </div>
  );
}
