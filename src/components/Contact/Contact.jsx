import Lottie from "lottie-react";
import message from "../../assets/animation/email.json";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const form = useRef();
  // >>>>>>>>>  Handle Submit (emailjs liberary)>>>>>>>>>>>
  function handleSubmit(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_6doyv2m",
        "template_9hlo1pw",
        form.current,
        "4MQ_vWet-Eg6xBdWx"
      )
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  }
  return (
    <section className="contactSection my-14" id="contact">
      <div className="container">
        {/* Title */}
        <div className="title flex items-center mb-12">
          <i className="fa-solid fa-envelope text-4xl me-3 text-[#a5a4a4]"></i>
          <h1 className="text-4xl capitalize font-bold text-[var(--title)]">
            contact us
          </h1>
        </div>
        {/* Form */}
        <div className="row justify-between">
          <div className="leftSide w-full md:w-[48%]">
            <form
              ref={form}
              className="w-full"
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="mb-10">
                <input
                  type="email"
                  id="email"
                  className="w-full md:w-3/4 bg-[var(--bgHeader)] border-2 border-[#c9c9c960] py-3 px-6 text-[var(--title)] text-lg rounded-lg focus:border-[var(--blue)] focus:border-2 focus:outline-0"
                  placeholder="Your Email"
                  required
                  name="user_email"
                />
              </div>
              <div className="mb-10">
                <textarea
                  required
                  className="w-full md:w-3/4 h-40 bg-[var(--bgHeader)] border-2 border-[#c9c9c960] py-3 px-6 text-[var(--title)] text-lg rounded-lg focus:border-[var(--blue)] focus:border-2 focus:outline-0"
                  name="message"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button
                type="submit"
                className="text-white bg-[var(--blue)] hover:bg-blue-500 focus:ring-4 focus:outline-none font-bold rounded-lg text-md w-full sm:w-auto px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </form>
          </div>
          <div className="rightSide w-full md:w-[48%]">
            <Lottie animationData={message} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
