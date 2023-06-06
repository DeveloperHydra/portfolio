import { LinksFunction } from "@remix-run/node";
import projectsStyles from "~/styles/projects.css"; // IMPORT STYLES


export const links: LinksFunction = () => [
    { rel: "stylesheet", href: projectsStyles }, // ADD STYLES HERE COPY ABOVE ^
  ];

export default function Projects() {
  return (
    <div className="projects-text">
      <p>Projects</p>
    </div>
  );
}
