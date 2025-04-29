import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Food Website",
    description: "A modern food website built with HTML, CSS, and JavaScript.",
    image: "/Picture/pro1.jpg",
  },
  {
    id: 2,
    title: "React Portfolio App",
    description: "A portfolio website showcasing my projects, built with React.js.",
    image: "/Picture/pro2.jpg",
  },
  {
    id: 3,
    title: "E-commerce Cake Shop",
    description: "An online store for a cake shop using Angular and MySQL.",
    image: "/Picture/pro3.jpg",
  },
];

const Projects = () => {
  return (
    <div className="container px-4 py-10 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center text-green-600">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-3 ">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="p-4 bg-white border-l-4 border-green-500 rounded-lg shadow-lg"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: project.id * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.title} className="object-cover w-full rounded-md h-60" />
            <h2 className="py-4 mt-4 text-xl font-semibold text-tight-green-500">{project.title}</h2>
            <p className="py-2 mt-2 text-gray-500">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
