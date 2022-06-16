import React, {useEffect} from 'react';
import AOS from 'aos'
import 'aos/dist/aos.css';
import poly2 from '/public/img/poly2.png';
import poly3 from '/public/img/poly3.png';

const Project = ({project,index}) => {
    console.log(project,'project')
    let right = false;
    let direction;
    let shapeProject;
    if(index%2 != 0){
        right = true;
        direction = 'right'
        shapeProject =  <img src={poly2.src} className="shapeProject" alt="future deep tech" />;
    }else{
        right = false;
        direction = 'left'
        shapeProject = <img src={poly3.src} className="shapeProject" alt="future deep tech"/>;
    }
    useEffect(() => {
        AOS.init();
    }, [])

    let video;
    if (project.video.filename) {
        video =  
            <div className="projectVi position-relative d-flex"  data-aos={right ? 'fade-left': 'fade-right' } data-aos-duration="1500">
                <video 
                    src={project.video.filename}  
                    autoPlay
                    muted
                    className="position-absolute"/>
            </div>;
    }

    let pdf;
    if (project.title == 'Metaverse') {
        pdf = <a href="https://a.storyblok.com/f/128931/x/48032724a1/metaverse_dec17.pdf" target="_blank" className="pdf-link mt-3">More Information</a>
    }

    return (
        <div className="project py-5 my-5" direction={direction}>
            {shapeProject}
            {video}
            <div className="projectDes position-relative d-flex flex-column py-5" data-aos="zoom-in" data-aos-duration="1000"> 
                <h4>{project.title}</h4>
                <p className="w-75 m-0">
                    {project.description}
                    <br></br>
                    {project.link &&
                        <a href={project.link.url} target="_blank">
                            {project.link.url}
                        </a>
                    }
                </p>
                {pdf}
            </div>
            <div className="projectImages" data-aos={right ? 'flip-down': 'flip-up' } data-aos-duration="1500">
                <div className="projectImagesBox">
                    {project.images.map((image) => {
                        return <img src={image.filename} alt={image.filename} key={image.id}/>
                    })}
                </div>
                <div className="projectImagesBox 2">
                    {project.images.map((image) => {
                        return <img src={image.filename} alt={image.filename} key={image.id}/>
                    })}
                </div>
            </div>
        </div>
    );
}
export default Project;
