import SocialMediaLinks from "../Components/SocialMediaLinks";
export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="rounded-full p-2 mt-10">
        <img className="h-10 invert" src="/logo_svg.svg" alt="logo" />
      </div>
      <SocialMediaLinks dark={false} />
      <p className="mt-6 text-gray-500">
        <em className="font-semibold italic">Made with love by</em>{" "}
        <strong className="font-bold">Reuel Bigo</strong>
      </p>
      <p className="font-semibold text-gray-500">
        {`@ ${year} RB Software Development - ALL RIGHTS RESERVED`}
      </p>
    </div>
  );
}
