import React from "react";
import myProjects from "../data/myProjects";
import SnapchatPage from "./SnapchatPage";
import MetaData from "./MetaData";
import Nav from "./Nav";
import Contact from "./Contact";
import { useLocation } from "react-router-dom";
import LazyLoad from "react-lazyload";

const ProjectPage = () => {
  const location = useLocation();
  const project = myProjects.find(
    (project) => project.title === location.pathname.split("/").pop()
  );
  if (project.title === "WSJ-Snapchat-Discover") {
    return <SnapchatPage />;
  } else {
    return (
      <>
        <Nav />

        <div className="project-page-container">
          <h1 className="project-page-title">
            {project.title.replace(/-/g, " ")}
          </h1>
          <h2 className="project-page-summary">{project.description}</h2>
          <figure className="header-image">
            <LazyLoad>
                  <img
                    className="responsive"
                    src={`../img/${project.title}/header.jpg`}
                    alt={`${project.title} header`}
                  />
            </LazyLoad>
                  <figcaption>{project.imgCaptions.header}</figcaption>
          </figure>
          <MetaData projectData={project} />
          <h3 className="summary">Summary</h3>
          <p className="project-page-content">{project.summary.paraOne}</p>
          {project.summary.paraTwo === undefined ? (
            ""
          ) : (
            <p className="project-page-content">{project.summary.paraTwo}</p>
          )}
          {project.summary.paraThree === undefined ? (
            ""
          ) : (
            <p className="project-page-content">{project.summary.paraThree}</p>
          )}
          {project.summary.paraFour === undefined ? (
            ""
          ) : (
            <p className="project-page-content">{project.summary.paraFour}</p>
          )}
          <figure className="body-image">
            <LazyLoad offset={3000}>
                  <img
                    src={`../img/${project.title}/one.jpg`}
                    alt={`${project.title} 2`}
                  />
            </LazyLoad>
                  <figcaption>{project.imgCaptions.one}</figcaption>
          </figure>

          {project.imgCaptions.two === undefined ? (
            ""
          ) : (
            <figure className="body-image"> 
              <LazyLoad offset={3000}>
                    <img
                      src={`../img/${project.title}/two.jpg`}
                      alt={`${project.title} 3`}
                    />
                    </LazyLoad>
                    <figcaption>{project.imgCaptions.two}</figcaption>
            </figure>
          )}

          {project.imgCaptions.three === undefined ? (
            ""
          ) : (
            <figure className="body-image">
              <LazyLoad offset={3000}>
                    <img
                      src={`../img/${project.title}/three.jpg`}
                      alt={`${project.title} 4`}
                    />
              </LazyLoad>
                    <figcaption>{project.imgCaptions.three}</figcaption>
            </figure>
          )}

          {project.imgCaptions.four === undefined ? (
            ""
          ) : (
            <figure className="body-image">
              <LazyLoad offset={3000}>
                    <img
                      src={`../img/${project.title}/four.jpg`}
                      alt={`${project.title} 5`}
                    />
              </LazyLoad>
                    <figcaption>{project.imgCaptions.four}</figcaption>
            </figure>
          )}

          {project.imgCaptions.five === undefined ? (
            ""
          ) : (
            <figure className="body-image">
              <LazyLoad offset={3000}>
                    <img
                      src={`../img/${project.title}/five.jpg`}
                      alt={`${project.title} 6`}
                    />
              </LazyLoad>
                    <figcaption>{project.imgCaptions.five}</figcaption>
            </figure>
          )}

          <Contact position={"bottom"} />
        </div>

        <span className="frame-border-project frame-border-top"></span>
        <span className="frame-border-project frame-border-bottom"></span>
        <span className="frame-border-project frame-border-left"></span>
        <span className="frame-border-project frame-border-right"></span>
      </>
    );
  }
};

export { ProjectPage as default };
