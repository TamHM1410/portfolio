import ProjectCard from '../components/ProjectCard';
import { getProjects } from './api/projects';
import styles from '../styles/ProjectsPage.module.css';



const listImage = ['/hostie.png', '/public/pc.png', '/occo.png'];

const ProjectsPage = ({ projects }) => {
  return (
    <>
      <h2>Look What I've Built</h2>
      <div className={styles.container}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}  listImage={listImage[project.id-1]}/>
        ))}
      </div>
    </>
  );
};

export async function getStaticProps() {
  const projects = getProjects();

  return {
    props: { title: 'Projects', projects },
  };
}

export default ProjectsPage;
