import React from 'react'
import "./about.css"
import { SiGithub } from "react-icons/si"

const About = () => {
  return (
    <div className='aboutContainer'>

      <h1>About the project...</h1>

      <div className='textboxAbout'>


        <p>What is rock, paper and scissors? It's a project i made to improve my React abilities,
          it was heavily inspired from the <a target="_blank" href="https://www.frontendmentor.io/challenges/rock-paper-scissors-game-pTgwgvgH"><span className="githubAbout">Frontend Mentor challenge </span></a>
          with the same name. When i started
          i thought it was way too simple, so i decided to go a steph further and added some characteristics
          like the leadearboard, the points system and the account authentication that required some kind of backend technology. Wich i managed to do with Firebase.</p>

        <p>Knowing the logic behind a rock, paper and scissors game is basic, i tried my best to take
          advantage of my CSS knowledge. The project is 100% responsive and should work without major
          problems on any device, having media queries for modern standars. At the the same time making this aplication the most entertained it can be would require extra features:
          compete against other users, choosing an avatar for your account, having your stats saved and more. </p>
        <p>I hope you enjoyed your stay on my web aplication, if you want to see the code check the

          <a target="_blank" href="https://github.com/FacuAlvarez00/RockPaperScissors---REACT">
            <span className='githubAbout'> repository</span><br />
          </a>
        </p>
        <p>
          <a target="_blank" href="https://github.com/FacuAlvarez00">
            <span className='githubAbout'> For any inquires, proposals or messages, reach me at  <SiGithub className='githubLogo' />. </span>
          </a>


        </p>






      </div>

    </div>
  )
}

export default About
