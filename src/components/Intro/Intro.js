import './intro.scss';

export default function Intro() {
    return (
        <div className="intro" id="intro">
            
            <div className="left">
                <div class="wrapper">
                    <h1>Hi there, I'm <br></br><span>Lindsey</span></h1>
                    <p>Recently I gradudated from the BCIT New Media and Web Development program.
                        My career goal is to push my skills and work towards becoming a Full-Stack Developer.
                    </p>

                    <a href="#works">
                        <img src="assets/down-arrow.png"/>
                    </a>
                </div>
            </div>
            <div className="right">
                <div className="imageContainer">
                    <img src="assets/programming-header.jpg" />
                </div>
            </div>
        
        </div>
    )
}
