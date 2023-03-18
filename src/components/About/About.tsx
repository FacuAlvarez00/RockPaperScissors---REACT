import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className='aboutContainer'>

        <h1>ROCK, PAPER AND SCISSORS</h1>

      
            <p>What is rock, paper and scissors? It's a project i made to improve my React abilities, 
              it was heavily inspired from the Frontend Mentor challenge with the same name. When i started
              i thought it was way too simple, so i decided to go a steph further and added some characteristics  
              like the leadearboard, the points system and the account authentication that required some kind of backend technology. Wich i managed to do with Firebase.<br/>

              Knowing the logic behind a rock, paper and scissors game is basic, i tried my best to take
              advantage of my CSS knowledge. The project is 100% responsive and should work without major
              problems on any device, having media queries for modern standars. At the the same time making this aplication the most entertained it can be would require extra features:<br/>
              getting access to a leadearboard, choosing an avatar for your account, having your progess stored, etc. <br/>
              I hope you enjoyed your stay on my web aplication, if you want to see the code please 
             
              <a href="https://github.com/FacuAlvarez00/RockPaperScissors---REACT">
                <span className='githubAbout'> visit. </span><br/>
              </a>
              <a href="https://github.com/FacuAlvarez00">
                <span className='githubAbout'> For any inquires, proposals or messages, contact me in GitHub. </span>
              </a>
              </p>

              


      
      
    </div>
  )
}

export default About
