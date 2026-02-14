import Lottie from "lottie-react";
import messageAnim from "../../assets/animation/email.json";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { FaPaperPlane } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import ScrollReveal from "../Shared/ScrollReveal";

// Define Validation Schema
const contactSchema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters"),
  email: z.string().email("Please enter a valid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data) => {
    setLoading(true);

    const SERVICE_ID = "service_n3f4hrk";
    const TEMPLATE_ID = "template_g40nmyt";
    const PUBLIC_KEY = "4MQ_vWet-Eg6xBdWx";

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      
      toast.success("Message sent successfully! I'll get back to you soon.", {
        position: "bottom-center",
        duration: 4000,
      });
      reset();
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("Sorry, failed to send. Check your connection or IDs.", {
        position: "bottom-center",
        duration: 4000,
      });
    } finally {
      setLoading(false);
    }
  };

  const inputStyle =
    "w-full bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 py-3 px-5 text-gray-800 dark:text-white text-lg rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-200 resize-none placeholder-gray-500 dark:placeholder-gray-400";

  return (
    <section className="contactSection py-20" id="contact">
      <div className="container mx-auto px-4">
        {/* Title */}
        <ScrollReveal>
          <div className="flex flex-col items-center mb-16">
            <i className="fas fa-envelope text-5xl mb-4 text-blue-500 dark:text-blue-400"></i>
            <h1 className="text-4xl sm:text-5xl capitalize font-extrabold text-gray-900 dark:text-white">
              Get In Touch
            </h1>
            <p className="mt-2 text-lg text-gray-600 dark:text-gray-400 font-medium">
              I'd love to hear about your next project or opportunity.
            </p>
          </div>
        </ScrollReveal>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Left Side: Contact Form */}
          <div className="w-full md:w-1/2">
            <ScrollReveal delay={0.2}>
              <form
                ref={formRef}
                className="w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-100 dark:border-gray-700"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="mb-6">
                  <label htmlFor="name" className="sr-only">
                    Your Name
                  </label>
                  <input
                    {...register("name")}
                    type="text"
                    id="name"
                    className={`${inputStyle} ${errors.name ? 'border-red-500 focus:ring-red-500 outline-none' : ''}`}
                    placeholder="Your Name (Required)"
                  />
                  {errors.name && (
                    <p className="mt-2 text-sm text-red-500 font-bold">{errors.name.message}</p>
                  )}
                </div>

                <div className="mb-6">
                  <label htmlFor="email" className="sr-only">
                    Your Email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className={`${inputStyle} ${errors.email ? 'border-red-500 focus:ring-red-500 outline-none' : ''}`}
                    placeholder="Your Email (Required)"
                  />
                  {errors.email && (
                    <p className="mt-2 text-sm text-red-500 font-bold">{errors.email.message}</p>
                  )}
                </div>

                <div className="mb-8">
                  <label htmlFor="message" className="sr-only">
                    Your Message
                  </label>
                  <textarea
                    {...register("message")}
                    className={`${inputStyle} h-40 ${errors.message ? 'border-red-500 focus:ring-red-500 outline-none' : ''}`}
                    id="message"
                    placeholder="Tell me about your project or message..."
                  ></textarea>
                  {errors.message && (
                    <p className="mt-2 text-sm text-red-500 font-bold">{errors.message.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="flex items-center justify-center gap-3 text-white bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-xl text-lg w-full px-6 py-4 transition duration-300 shadow-lg shadow-blue-500/20 active:scale-[0.98]"
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
            </ScrollReveal>
          </div>

          {/* Right Side: Animation */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 max-w-sm md:max-w-full lg:p-12 text-center">
            <ScrollReveal delay={0.4}>
              <Lottie animationData={messageAnim} style={{ width: "100%", maxWidth: "450px", margin: "0 auto" }} />
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
