import styles from "./Projects.module.css";
import projects from "../../data/Projects.json";
import { CustomModal } from "../../components/Modal/Modal";
import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { useTranslation } from "react-i18next";

interface Project {
  title: string;
  descriptionEn: string;
  descriptionFr: string;
  technologies: string[];
  role?: string;
  responsibilities?: string[];
  features?: string[];
  challenges?: string;
  outcome?: string;
  liveDemo?: string;
  sourceCode?: string;
  image?: string;
  mobile?: string;
  cover?: string;
}

interface ProjectsProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectsProps) => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleClickIcons = (url: string | undefined) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <CustomModal
        title={project.title}
        image={project.image}
        description={
          i18n.language.startsWith("fr")
            ? project.descriptionFr
            : project.descriptionEn
        }
        open={open}
        handleClose={handleCloseModal}
        tech={project.technologies}
        key={project.title}
      />

      <div className={styles.card} data-aos="slide-up">
        <img
          src={project.cover ? project.cover : project.image}
          alt={project.title}
          className={styles.image}
          loading="lazy"
        />
        <div className={styles.icons}>
          <FaInfoCircle onClick={handleOpenModal} />
          {project?.liveDemo && (
            <TbWorldWww onClick={() => handleClickIcons(project.liveDemo)} />
          )}
          {project?.sourceCode && (
            <FaGithub onClick={() => handleClickIcons(project.sourceCode)} />
          )}
        </div>
      </div>
    </>
  );
};

export const Project = () => {
  return (
    <section>
      <h1 className={styles.titleP} data-aos="slide-down">
        Portfolio
      </h1>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
};
