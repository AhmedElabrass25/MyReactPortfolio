import apiImage from "../../assets/images/api.webp";
import appImage from "../../assets/images/app.webp";
import manageImage from "../../assets/images/manage.webp";
import speedImage from "../../assets/images/speed.webp";
import responsiveImage from "../../assets/images/responsive.webp";
import interfaceImage from "../../assets/images/interface.webp";

const Services = () => {
  const services = [
    {
      image: apiImage,
      title: "API Integrations",
      description:
        "Seamless integration for smooth data sharing and functionality.",
    },
    {
      image: appImage,
      title: "Web Applications",
      description: "Tailored web apps built with the latest technologies.",
    },
    {
      image: manageImage,
      title: "Website Management",
      description: "Easy content management systems with flexible controls.",
    },
    {
      image: speedImage,
      title: "Speed Optimization",
      description: "Boost performance with faster load times and optimization.",
    },
    {
      image: responsiveImage,
      title: "Responsive Designs",
      description:
        "Adaptive designs that fit all screens, ensuring great user experiences.",
    },
    {
      image: interfaceImage,
      title: "User Interfaces",
      description:
        "Engaging, responsive front-end designs enhancing user interactions.",
    },
  ];
  return (
    <>
      <section className="py-14 mt-5" id="skills">
        {/* <<<<<<<<<< Title >>>>>>>>>>> */}
        <h1 className="text-3xl font-bold capitalize w-full text-center mb-12">
          How can i help you ?
        </h1>
        <div className="container">
          <div className="row justify-between gap-10 md:gap-14">
            {services.map((serv, index) => {
              return (
                <div
                  key={index}
                  className="w-full sm:w-[49%] md:w-[42%] p-8 rounded-md border--[2px] border-[var(--border)] bg-[var(--bgHeader)] flex flex-col items-center justify-center hover:border-[var(--subtitle)] hover:border-[2px] transition-all duration-300"
                >
                  <img
                    src={serv.image}
                    alt={serv.title}
                    className="mb-5 w-14 h-14"
                  />
                  <h1 className="mb-5 capitalize text-lg  xl:text-2xl font-bold text-[var(--title)] ">
                    {serv.title}
                  </h1>
                  <p className="text-[var(--subtitle)] w-full text-center line-clamp-2">
                    {serv.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
