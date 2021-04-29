import React from 'react'
import Image from '../../assets/images/howitworks.svg'
import './about.css'

function About() {
    return (
        <div className="home_about">
            <div className="image_about">
                <img src={Image} alt="about" />
            </div>
            <div className="about_contents">
                <h2>Vous prenez le volant ? Dites-nous où vous allez ! </h2>
                <p>Le covoiturage est une excellente façon de voyager. C'est abordable,
                    confortable et écologique ! Si vous êtes tout seul dans votre voiture, 
                    pensez à publier un trajet de covoiturage sur BlaBlaCar. Vous économiserez
                    des frais et voyagerez à plusieurs. Notre communauté de covoiturage est la plus 
                    digne de confiance au monde !</p>
            </div>

        </div>
    )
}

export default About
