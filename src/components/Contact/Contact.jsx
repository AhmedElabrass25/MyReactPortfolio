import Lottie from "lottie-react";
import message from "../../assets/animation/email.json"; // Placeholder for Lottie animation data
import { useRef, useState } from "react";
// import emailjs from "@emailjs/browser"; // Commented out as emailjs cannot be initialized here
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";

// Dummy emailjs object for structure reference and to prevent runtime errors
const emailjs = {
  sendForm: async (serviceId, templateId, formRef, publicKey) => {
    return new Promise((resolve, reject) => {
      // Simulate API delay
      setTimeout(() => {
        if (Math.random() > 0.1) {
          // 90% success rate simulation
          resolve({ status: 200, text: "OK" });
        } else {
          reject({ text: "Failed to connect to email service." });
        }
      }, 1500);
    });
  },
};

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  // >>>>>>>>> Handle Submit (using simulated emailjs for demonstration) >>>>>>>>>>>
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true); // Start loading

    // NOTE: Replace these placeholder IDs with your actual EmailJS credentials for production use.
    // Ensure you uncomment 'import emailjs from "@emailjs/browser";' when using real IDs.
    const SERVICE_ID = "service_xxxxxxxx";
    const TEMPLATE_ID = "template_xxxxxxxx";
    const PUBLIC_KEY = "xxxxxxxxxxxxxxxxxxxx";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        toast.success("Message sent successfully! I'll get back to you soon.", {
          position: "bottom-center",
          duration: 4000,
        });
        if (form.current) {
          form.current.reset(); // Clear input fields
        }
        setLoading(false);
      },
      (error) => {
        console.error("EmailJS Error:", error);
        toast.error(error.text || "Sorry, an error occurred while sending.", {
          position: "bottom-center",
          duration: 4000,
        });
        setLoading(false);
      }
    );
  }

  // Input Field base style
  const inputStyle =
    "w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 py-3 px-5 text-gray-800 dark:text-white text-lg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-none placeholder-gray-500 dark:placeholder-gray-400";

  return (
    <section className="contactSection py-20" id="contact">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="flex flex-col items-center mb-16">
          <i className="fas fa-envelope text-5xl mb-4 text-blue-500 dark:text-blue-400"></i>
          <h1 className="text-4xl sm:text-5xl capitalize font-extrabold text-gray-900 dark:text-white">
            Get In Touch
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            I'd love to hear about your next project or opportunity.
          </p>
        </div>

        {/* Form and Animation Layout */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Contact Form */}
          <div className="w-full md:w-1/2">
            <form
              ref={form}
              className="w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl"
              onSubmit={handleSubmit}
            >
              <div className="mb-8">
                <label htmlFor="user_email" className="sr-only">
                  Your Email
                </label>
                <input
                  type="email"
                  id="user_email"
                  className={inputStyle}
                  placeholder="Your Email (Required)"
                  required
                  name="user_email"
                />
              </div>

              <div className="mb-8">
                <label htmlFor="message" className="sr-only">
                  Your Message
                </label>
                <textarea
                  required
                  className={`${inputStyle} h-40`}
                  name="message"
                  id="message"
                  placeholder="Tell me about your project or message..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-lg w-full px-6 py-3 transition duration-300 transform hover:scale-[1.01]"
              >
                {loading ? (
                  <i className="fas fa-spinner fa-spin text-xl"></i>
                ) : (
                  <>
                    <FaPaperPlane className="text-xl" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Side: Lottie Animation */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 max-w-sm md:max-w-full">
            <Lottie animationData={message} style={{ width: "100%" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
