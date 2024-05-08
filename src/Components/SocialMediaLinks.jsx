import { socialMediaLinks } from "../Constants";
import Link from "./Link";
export default function SocialMediaLinks(props) {
  return (
    <div
      className={`flex flex-row justify-center items-center ${
        props.dark ? "invert-0" : "invert"
      }`}
    >
      {socialMediaLinks.map((link) => (
        <Link {...link} />
      ))}
    </div>
  );
}
