import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { useTranslation } from "react-i18next";

const projects = [
  {
    name: "Vacation of Africa",
    year: "Mar2022",
    align: "right",
    image: "../../public/images/website-img-1.jpg",
    link: "#",
  },
  {
    name: "Moola App",
    year: "Sept2022",
    align: "left",
    image: "../../public/images/website-img-2.webp",
    link: "#",
  },
  {
    name: "Tourzania",
    year: "Jan2023",
    align: "right",
    image: "../../public/images/website-img-3.jpg",
    link: "#",
  },
  {
    name: "Bank of Luck",
    year: "May2024",
    align: "left",
    image: "../../public/images/website-img-4.jpg",
    link: "#",
  },
];

const ProjectsMain = () => {
  const { t } = useTranslation();
  let projectsList = t('projects.list',  { returnObjects: true });
  console.log(projectsList, 'projectsList');

  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("top", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projectsList.map((project, index) => {
          return (
            <SingleProject
              key={index}
              name={project.title}
              techStack={project.techStack}
              align={project.align}
              desc={project.description}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;
