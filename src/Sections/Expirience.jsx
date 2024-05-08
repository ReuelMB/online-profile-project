import { SectionHead } from "../Components"
import ExpirienceCard from "../Components/ExpirienceCard";
import { expiriences, tools } from "../Constants";

export default function Expirience() {
  return (
    <div className="flex flex-col justify-center">
      <SectionHead
        title="Expirience"
        text="I thrive in dynamic work environments and even with a hybrid work model, I’ve consistently delivered high-quality results. My adaptability shines whether working independently with minimal supervision or collaborating effectively within a team. This section showcases the timeline of my job experience and some of the tools and technologies I am familiar with."
      />
      <div className="flex flex-col lg:flex-row">
        <div className="flex-1 flex flex-col items-center justify-start p-2 shadow-sm bg-gray-50">
          <h3 className="w-full border-b-2 p-2 text-2xl text-center font-semibold justify-start">
            Time Line
          </h3>
          {expiriences.map((expirience) => (
            <ExpirienceCard
              key={expirience.companyName}
              {...expirience}
            />
          ))}
        </div>
        <div className="flex-1 flex flex-col items-center justify-start p-2 shadow-sm bg-gray-50">
          <h3 className="w-full border-b-2 p-2 text-2xl text-center font-semibold justify-start">
            Tools and Technologies
          </h3>
          <div className=" flex flex-wrap items-center justify-center text-center">
            {tools.map((tool) => (
              <div
                key={tool.label}
                className="flex flex-col items-center justify-center shadow-md p-6"
              >
                <img className="w-28 xl:w-40" src={tool.icon} alt={tool.label} />
                <p className="text-gray-500">{tool.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
