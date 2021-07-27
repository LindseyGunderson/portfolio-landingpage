import './works.scss';
import { useState } from 'react';
import { allProjects } from '../../data';

export default function Works() {

    const [currentSlide, setCurrentSlide] = useState(0);



    const recentProjects = [

        {

            id: 1,
            title: "Learning Mangement System",
            dis: "Web Dev",
            desc: "Upload tutorials and videos on your expertise! User's are able to add new tutorials and videos they create",
            img: "assets/learnR.jpg"

        },
        {

            id: 2,
            title: "PHP Bug Tracker Application",
            dis: "Web Dev",
            desc: "Quality Assurance plays a huge role when developing new features. Through this QA bug tracker, users can record, comment, and resolve issues.",
            img: "assets/laptop_mockup.jpg"

        },
        {

            id: 3,
            title: "Bookmark Audiobook App",
            dis: "Web Dev",
            desc: "Bookmark is an app that allows users to listen to their audiobooks all in one location. Users can import, create collections and find recommendations.",
            img: "assets/Audiobook-CaseStudy-MockUp.jpg"

        }


    ];

    const handleClick = (direction) => {

        direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) : setCurrentSlide(currentSlide < recentProjects.length - 1 ? currentSlide + 1 : 0)
    }

    return (
        <div className="works" id="works">


        <h2>// Recent Projects</h2>
            
            <div className="slider" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>

                {recentProjects.map(project => (
                    
                <div className="container">

                    <div className="slide">

                        <div className="left">

                            <div className="leftContainer">
                                
                                    <h3>{ project.title }</h3>
                                    <span> { project.dis} </span>
                                    <p> {project.desc} </p>
                            </div>

                        </div>

                        <div className="right">

                            <img src={ project.img } />

                        </div>
                    </div>

                </div>
           )) }
            </div>

            <img src="assets/arrow-left-bold.png" className="arrow left" onClick={()=>handleClick("left")}/>
            <img src="assets/arrow-right-bold.png" className="arrow right" onClick={()=>handleClick()}/>
        </div>
    )
}
