import { useEffect, useRef } from "react";
import restall from "../magic/apparEffect";

export default function Apropos  (params)  {
    const CQH = useRef();
    const Charisme = useRef();
    useEffect(() => {
        restall(CQH, 'appar-right');
        restall(Charisme, 'appar-left');
    }, []);
    return (
        <section className="about section-padding" id="section_2">
        <div className="container">
            <div className="row">

                <div className="col-lg-6 col-12" ref={CQH}>
                    <img src="images/Hba1.png" className="about-image img-fluid" alt=""/>
                </div>

                <div className="col-lg-6 col-12 mt-5 mt-lg-0" ref={Charisme}>
                    <div className="about-thumb">

                        <div className="section-title-wrap d-flex justify-content-end align-items-center mb-4">
                            <h2 className="text-white me-4 mb-0">A propos</h2>

                            <img src="images/Hba1.png" className="avatar-image img-fluid" alt=""/>
                        </div>

                        <h3 className="pt-2 mb-3">A propos de Habacuc</h3>

                        <p className="text-justify">L'informatique en générale et le developpement des applications en particulier est une passion pour Moi
                    depuis quelques années. je fais de cette passion une réel motivation pour rendre service à la société mais aussi 
                    contribuer à l'innovation et à aider les entreprises à atteindre leur objectif ainsi augmenter votre productivité dans votre 
                    secteur d'activité</p>

                        {/* <p>You are allowed to use this template for your websites. You are not allowed to redistribute the template ZIP file on any other website. Please <a href="https://templatemo.com/contact" target="_blank">contact us</a> for more info.</p> */}
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
  }
  