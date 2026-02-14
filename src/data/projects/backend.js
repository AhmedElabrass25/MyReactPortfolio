import BlogPhpPro from "../../assets/images/BlogPhpPro.webp";
import EcommerceLaravelPro from "../../assets/images/EcommerceLaravelPro.webp";
import SocialMediaLaravelPro from "../../assets/images/SocialMediaLaravelPro.webp";

export const backendProjects = [
  {
    id: 501,
    name: "Blog App – PHP & MySQL",
    desc: "Developed a dynamic Blog Application using PHP and MySQL featuring a relational database structure with two main tables, users and posts. The application implements user authentication and secure session handling to ensure that every user manages only their own content. Demonstrates CRUD operations, database connectivity, and form validation.",
    github: "https://github.com/AhmedElabrass25/Blog-App-PHP-MYSQL-",
    category: "backend",
    image: BlogPhpPro,
    tech: ["PHP", "MySQL", "CRUD", "Auth"],
  },
  {
    id: 502,
    name: "E-Commerce Platform – Laravel",
    desc: "Developed a full-featured E-Commerce web application using Laravel with a structured MVC architecture and RESTful API integration. Includes complete user authentication, product browsing, category filtering, shopping cart management, and a powerful Admin Dashboard for category and product control.",
    github: "https://github.com/AhmedElabrass25/laravel-eccommerce",
    category: "backend",
    image: EcommerceLaravelPro,
    tech: ["Laravel", "REST API", "MySQL", "Admin Dashboard"],
  },
  {
    id: 503,
    name: "Social Media App – Laravel 12",
    desc: "Developed a full-featured Social Media platform using Laravel 12 with a secure RESTful API architecture powered by Sanctum. Features include OTP email verification, post management with image uploads, likes, comments, follows, and real-time notifications.",
    github: "https://github.com/AhmedElabrass25/SocialMediaApp-Laravel-",
    category: "backend",
    image: SocialMediaLaravelPro,
    tech: ["Laravel", "Sanctum", "REST API", "Real-time"],
  },
];
