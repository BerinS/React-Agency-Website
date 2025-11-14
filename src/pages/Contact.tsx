import { useLayoutEffect } from "react";
import ContactUs from "../components/ContactUs"

function Contact(){
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  return(
    <ContactUs />
  )
}

export default Contact;