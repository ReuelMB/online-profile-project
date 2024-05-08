import { MapPinIcon } from "@heroicons/react/24/outline";
export default function About() {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center">
      <div className="flex-1 flex flex-col justify-center items-center md:items-start">
        <h2 className="text-4xl text-gray-900 font-bold">About Me</h2>
        <p className="text-center md:text-start text-gray-500">
          I am Reuel Bigo from the Philippines with 5 years of expirience in the
          development, and maintenance of web and mobile applications.
        </p>
        <div className="flex flex-row">
          <a href="https://maps.app.goo.gl/r2dvrWJx2jMTjdsU9" target="_blank">
            <MapPinIcon className="h-6 w-6" />
          </a>
          <p className="text-gray-500">Baguio City, Philippines</p>
        </div>
        <button className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black">
          Download CV
        </button>
      </div>
      <div className="flex-1 bg-gradient-to-br from-slate-50 to-blue-500 shadow-xl flex justify-end">
        <img src="/about_section_photo.png" alt="About Profile Photo" />
      </div>
    </div>
  );
}
