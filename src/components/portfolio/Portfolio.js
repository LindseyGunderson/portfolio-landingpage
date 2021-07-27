import { useState, useEffect } from 'react';

import './portfolio.scss';

import PortfolioList from '../portfolioList/PortfolioList';

import { allProjects, webDevPortfolio, uxPortfolio, graphicDesignPortfolio } from '../../data';


export default function Portfolio() {

    // determine which link is clicked
    const [selected, setSelected] = useState("all");

    const [data, setData] = useState([]);

    // store the date for the list items
    const list = [
        {
            id: "all",
            title: "Feature"
        }, 
        {
         id: "webdev",
         title: "Web Development"
         }, 
         {
         id: "ux",
         title: "UX/UI"
         },
         {
             id: "graphics",
             title: "Graphic Design"
         }
     ];

     useEffect(() => {
        
        switch(selected){

            case "all":
                setData(allProjects);
                break;
            
            case "webdev":
                setData(webDevPortfolio);
                break;
                    
            case "ux":
                setData(uxPortfolio);
                break;

            case "graphics":
                setData(graphicDesignPortfolio);
                break;

                default:
                setData(allProjects);

        }

     }, [selected] );


    return (

        <div className="portfolio" id="portfolio">

            <h1>// Portfolio</h1>

            <ul>
            {list.map(discipline => (

                <PortfolioList title={discipline.title} active={selected === discipline.id} setSelected={setSelected} id={discipline.id}/>
                ))}


            </ul>

            <div className="container">

                {data.map(projects => (

                <div className="item">
                    <img src={projects.img} />
                    <h3>{projects.title}</h3>
                </div>
                ))}
            </div>
        </div>
    )
}
