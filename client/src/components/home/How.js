import React from 'react'
import { FaCarSide } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { FaSearchLocation } from "react-icons/fa";
import './how.css'

function How() {
    return (
        <div className="home_how">
            <div className="how_item">
                <div className="how_icon_wrapper">
                    <FaSearchLocation className="how_icon" />
                </div>
                <h3>Avoir le choix</h3>
                <p>L'avantage des routes ? Elles vont partout ! Littéralement. Profitez de milliers
                de destinations
                </p>
            </div>
            <div className="how_item">
                <div className="how_icon_wrapper">
                    <FaChalkboardTeacher className="how_icon" />
                </div>
                <h3>Communauté</h3>
                <p>Nous connaissons chacun de nos membres. Comment ? Nous vérifions
                profils, avis, et pièces d'identité. 
                </p>
            </div>
            <div className="how_item">
                <div className="how_icon_wrapper">
                    <FaCarSide className="how_icon" />
                </div>
                <h3>Lancez-vous</h3>
                <p>Ne traversez pas la ville pour traverser le pays :
                choisissez une voiture qui part de votre quartier.
                </p>

            </div>
        </div>
    )
}

export default How
