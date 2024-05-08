export default function ExpirienceCard(props) {
  return (
    <div className="flex flex-col shadow-md w-full">
      <div className="px-5 pt-5">
        <h4 className="text-xl font-semibold text-blue-500">{props.companyName}</h4>
        <p className="text-sm font-semibold text-gray-700">
          {props.jobType} &#x2022; {props.timeSpan}
        </p>
        <p className="font-normal text-gray-500 pt-1">{props.description}</p>
      </div>
      <div className="px-10 pb-5">
        {props.positions.map((position) => (
          <div key={position.jobTitle} className="border-l-2 border-dashed">
            <div className="relative w-full">
              <img
                className="absolute -top-0.5 z-10 -ml-3.5 h-7 w-7"
                src="/online-profile-project/check.svg"
                alt="Check Icon"
              />
              <div className="ml-6">
                <h4 className="font-bold text-gray-700">{position.jobTitle}</h4>
                <p className="text-sm text-gray-600">
                  {position.from} &#45; {position.to} &#x2022;{" "}
                  {position.timeSpan}
                </p>
                <p className="text-normal text-gray-500 pt-1">
                  {position.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
