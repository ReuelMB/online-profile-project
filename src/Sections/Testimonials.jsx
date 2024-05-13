import SectionHead from "../Components/SectionHead";

export default function Testimonials() {
  return (
    <div className="flex flex-col justify-center">
      <SectionHead
        title="Testimonials"
        text="In my previous work experiences, I demonstrated the ability to work effectively both independently and as part of a team. Colleagues have consistently praised my collaborative approach."
      />
      <iframe
        src="https://widgets.sociablekit.com/linkedin-recommendations/iframe/25411458"
        className="w-full h-[500px]"
      ></iframe>
    </div>
  );
}
