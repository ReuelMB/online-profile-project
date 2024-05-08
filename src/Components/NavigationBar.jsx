import { useState, useEffect, useRef } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { sendEmailClicked } from "../Utils/Utils";
import ContactForm from "../Sections/ContactFormContent";
import Button from "./Button";
import Modal from "./Modal";

export default function NavigationBar({ navLinks }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [navBarState, setNavBarState] = useState({
    activeIndex: 0,
    transparent: true,
  });
  const [isOpen, setIsOpen] = useState(false);
  const contactForm = useRef();

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const nearestIndex = (
    currentPosition,
    sectionPositionArray,
    startIndex,
    endIndex
  ) => {
    if (startIndex === endIndex) return startIndex;
    else if (startIndex === endIndex - 1) {
      if (
        Math.abs(
          sectionPositionArray[startIndex].ref.current.offsetTop -
            currentPosition
        ) <
        Math.abs(
          sectionPositionArray[endIndex].ref.current.offsetTop - currentPosition
        )
      )
        return startIndex;
      else return endIndex;
    } else {
      const nextNearest = ~~((startIndex + endIndex) / 2);
      const a = Math.abs(
        sectionPositionArray[nextNearest].ref.current.offsetTop -
          currentPosition
      );
      const b = Math.abs(
        sectionPositionArray[nextNearest + 1].ref.current.offsetTop -
          currentPosition
      );
      if (a < b) {
        return nearestIndex(
          currentPosition,
          sectionPositionArray,
          startIndex,
          nextNearest
        );
      } else {
        return nearestIndex(
          currentPosition,
          sectionPositionArray,
          nextNearest,
          endIndex
        );
      }
    }
  };

  useEffect(() => {
    const handleScroll = (e) => {
      const index = nearestIndex(
        window.scrollY,
        navLinks,
        0,
        navLinks.length - 1
      );
      setNavBarState((prevState) => {
        let navBarState = { ...prevState.navBarState };
        navBarState.activeIndex = index;
        navBarState.transparent = window.scrollY === 0;
        return navBarState;
      });
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 ${
        navBarState.transparent ? "bg-transparent" : "bg-white shadow-sm"
      }`}
    >
      <nav className="flex items-center p-5">
        <div className="flex-1">
          <a href="#">
            <img className="h-10" src="/online-profile-project/logo_svg.svg" alt="logo" />
          </a>
        </div>
        <div className="text-gray-700 md:hidden">
          <button onClick={() => setMobileMenuOpen(true)}>
            <Bars3Icon className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden flex-1 justify-center md:flex md:gap-x-12">
          {navLinks.map((item, index) => {
            if (item.href !== "#contactMe")
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-semibold leading-6 text-gray-900 ${
                    navBarState.activeIndex === index
                      ? "underline underline-offset-2"
                      : ""
                  }`}
                >
                  {item.label}
                </a>
              );
          })}
        </div>
        <div className="hidden flex-1 justify-end md:flex">
          <button
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black"
            onClick={() => openModal()}
          >
            Contact Me
          </button>
        </div>
      </nav>
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex justify-end">
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div
                className="space-y-2 py-6"
                onClick={() => setMobileMenuOpen(false)}
              >
                {navLinks.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 ${
                      navBarState.activeIndex === index
                        ? "underline underline-offset-2"
                        : ""
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      <Modal
        isOpen={isOpen}
        closeModal={closeModal}
        title={"Send me a message"}
        description={
          "This will send me an email with the information you provided in the form."
        }
      >
        <form
          ref={contactForm}
          onSubmit={(e) => sendEmailClicked(e, contactForm, closeModal)}
        >
          <ContactForm />
          <div className="flex flex-row items-center justify-center">
            <Button
              type="button"
              label="Cancel"
              onClick={closeModal}
              variant="secondary"
            />
            <Button type="submit" label="Send" variant="primary" />
          </div>
        </form>
      </Modal>
    </header>
  );
}
