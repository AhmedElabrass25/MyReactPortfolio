import BlogPhpPro from "../../assets/images/BlogPhpPro.webp";
import EcommerceLaravelPro from "../../assets/images/EcommerceLaravelPro.webp";
import SocialMediaLaravelPro from "../../assets/images/SocialMediaLaravelPro.webp";
import backendAdmin from "../../assets/images/backend_admin.png";
import backendApi from "../../assets/images/backend_api.png";
import ELearningPlatformImage from "../../assets/images/ElearnPlatform/ElearnPlatform.png";
import ELearningDashboard from "../../assets/images/ElearnPlatform/dashboard.png";
import ELearningCourses from "../../assets/images/ElearnPlatform/courses.png";
import ELearningPaths from "../../assets/images/ElearnPlatform/paths.png";
import ELearningAboutUs from "../../assets/images/ElearnPlatform/aboutus.png";




export const backendProjects = [
  {
    id: 501,
    name: "Blog App – PHP & MySQL",
    desc: "Developed a dynamic Blog Application using PHP and MySQL featuring a relational database structure with two main tables, users and posts. The application implements user authentication and secure session handling to ensure that every user manages only their own content. Demonstrates CRUD operations, database connectivity, and form validation.",
    github: "https://github.com/AhmedElabrass25/Blog-App-PHP-MYSQL-",
    category: "backend",
    image: BlogPhpPro,
    subImages: [backendAdmin, backendApi],
    tech: ["PHP", "MySQL", "CRUD", "Auth"],
    featured: true,
  },
  {
    id: 502,
    name: "E-Commerce Platform – Laravel",
    featured: true,
    desc: "Developed a full-featured E-Commerce web application using Laravel with a structured MVC architecture and RESTful API integration. Includes complete user authentication, product browsing, category filtering, shopping cart management, and a powerful Admin Dashboard for category and product control.",
    github: "https://github.com/AhmedElabrass25/laravel-eccommerce",
    category: "backend",
    image: EcommerceLaravelPro,
    subImages: [backendAdmin, backendApi],
    tech: ["Laravel", "REST API", "MySQL", "Admin Dashboard"],
  },
  {
    id: 503,
    name: "Social Media App – Laravel 12",
    featured: true,
    desc: "Developed a full-featured Social Media platform using Laravel 12 with a secure RESTful API architecture powered by Sanctum. Features include OTP email verification, post management with image uploads, likes, comments, follows, and real-time notifications.",
    github: "https://github.com/AhmedElabrass25/SocialMediaApp-Laravel-",
    category: "backend",
    image: SocialMediaLaravelPro,
    subImages: [backendAdmin, backendApi],
    tech: ["Laravel", "Sanctum", "REST API", "Real-time"],
  },
  {
    id: 504,
    name: "ELearning Platform",
    featured: true,
    desc: "A modern, scalable SaaS platform designed to deliver subscription-based educational content and digital services through a seamless user experience. The platform enables users to explore, enroll, and subscribe to courses with an integrated system for payments and subscription management, all managed through a centralized and dynamic dashboard. It includes secure payment integration, flexible subscription plans, and smooth user flows from registration to course access. The system is built with clean architecture and well-structured data handling to ensure scalability and high performance, while also supporting third-party integrations and future expansion.",
    github: "https://github.com/AhmedElabrass25/ELearnPlatform",
    category: "backend",
    image: ELearningPlatformImage,
    subImages: [ELearningDashboard, ELearningCourses, ELearningPaths, ELearningAboutUs],
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion","Tanstack Query"],
  },

];
