import { SocialMediaLinks } from "../Components";

export default function HeroBanner() {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center">
      <h1 className="flex flex-col  text-gray-900 items-center">
        <span className="text-3xl font-semibold">HELLO,</span>
        <strong className="text-5xl font-bold">I'm Reuel.</strong>
        <span className="text-2xl font-semibold">
          Full Stack Software Developer at Your Service.
        </span>
      </h1>
      <SocialMediaLinks dark={true}/>
    </div>
  );
}
