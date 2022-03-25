import {useEffect, useState} from "react";

export default function (ref) {
  let [isOpen, setIsOpen] = useState(false);

  const isBrowser = typeof window !== "undefined";

  const open = () => {
    if (isBrowser) document.body.classList.add('sidebar-open');
    setIsOpen(true)
  }

  const close = () => {
    if (isBrowser) document.body.classList.remove('sidebar-open');
    setIsOpen(false);
  }

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        close()
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);


  return {isOpen, open, close}
}
