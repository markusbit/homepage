import React from "react";
import ProjectCard from "../../components/Card";

function Projects() {
    return (
        <div className="page-content">
            <div className="d-flex justify-content-between">
                <ProjectCard className="card" title="Farbenhaus Retz-Hollabrunn" description="Farbenhaus Retz-Hollabrunn" demoLink="http://farbenhaus-retz.at/" imgPath="http://farbenhaus-retz.at/img/farbenhaus-logo.jpg" />
                <ProjectCard className="card" title="My Homepage" description="Check out the code to my homepage" demoLink="https://github.com/markusbit/homepage/" imgPath="" />
            </div>
        </div>
    )
}

export default Projects; 