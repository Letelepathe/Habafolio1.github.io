import { useEffect, useRef } from "react";
import restall from "../magic/apparEffect";

export default function Services  (params)  {
     const CQH = useRef();
        const Charisme = useRef();
        // const lect = useRef();
        const trou = useRef();
        useEffect(() => {
            restall(CQH, 'appar-right');
            restall(Charisme, 'appar-left');
            // restall(lect, 'appar-right');
            restall(trou, 'appar');
        }, []);
    return (
     
        <section class="services section-padding" id="section_3">
        <div class="container">
            <div class="row">

                <div class="col-lg-10 col-12 mx-auto">
                    <div class="section-title-wrap d-flex justify-content-center align-items-center mb-5" ref={trou}>
                        <img src="images/handshake-man-woman-after-signing-business-contract-closeup.jpg" class="avatar-image img-fluid" alt=""/>

                        <h2 class="text-white ms-4 mb-0">Services</h2>
                    </div>

                    <div class="row pt-lg-5">
                        <div class="col-lg-6 col-12" ref={CQH}>
                            <div class="services-thumb">
                                <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                    <h3 class="mb-0">site web</h3>

                                    <div class="services-price-wrap ms-auto">
                                        <p class="services-price-text mb-0">$300 à $2,800</p>
                                        <div class="services-price-overlay"></div>
                                    </div>
                                </div>

                                <p>Nous sommes disposé à la conception des applications et sites web surmesure , laissez nous prendre en main l'hebergement de votre application 
                                et sa maintenance. passez votre commande.</p>

                                <a href="https://wa.me/+243996834353?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%33%A9%20par%20votre%20services%20de%20site%web" class="custom-btn custom-border-btn btn mt-3">Passez commande</a>

                                <div class="services-icon-wrap d-flex justify-content-center align-items-center">
                                    <i class="services-icon bi-globe"></i>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-12" ref={trou}>
                            <div class="services-thumb services-thumb-up">
                                <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                    <h3 class="mb-0">Apps mobile</h3>

                                    <div class="services-price-wrap ms-auto">
                                        <p class="services-price-text mb-0">$1,200 à $4000</p>
                                        <div class="services-price-overlay"></div>
                                    </div>
                                </div>

                                <p>nous faisons la conception des applications mobile surmesure et de bonne qualité.laissez nous prendre en main votre application mobile , nous vous fournissons des services de qualité.</p>

                                <a href="https://wa.me/+243996834353?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%33%A9%20par%20votre%20services%20d'application%20mobile" class="custom-btn custom-border-btn btn mt-3">Passez commande</a>

                                <div class="services-icon-wrap d-flex justify-content-center align-items-center">
                                    <i class="services-icon bi-phone"></i>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-12" ref={trou}>
                            <div class="services-thumb">
                                <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                    <h3 class="mb-0">Ecommerce</h3>

                                    <div class="services-price-wrap ms-auto">
                                        <p class="services-price-text mb-0">$800 à $3,600</p>
                                        <div class="services-price-overlay"></div>
                                    </div>
                                </div>

                                <p>Avez vous besoin d'un site web e-commerce pour votre business en ligne? nous sommes disponible à vous rendre un tres grand services , passez commande s'il vous plait.</p>

                                <a href="https://wa.me/+243996834353?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%33%A9%20par%20votre%20services%20e-commerce" class="custom-btn custom-border-btn btn mt-3">Passez commande</a>

                                <div class="services-icon-wrap d-flex justify-content-center align-items-center">
                                    <i class="services-icon bi-bag"></i>
                                </div>
                            </div>
                        </div>

                        <div class="col-lg-6 col-12" ref={Charisme}>
                            <div class="services-thumb services-thumb-up">
                                <div class="d-flex flex-wrap align-items-center border-bottom mb-4 pb-3">
                                    <h3 class="mb-0">SEO</h3>

                                    <div class="services-price-wrap ms-auto">
                                        <p class="services-price-text mb-0">$500 à $1,450</p>
                                        <div class="services-price-overlay"></div>
                                    </div>
                                </div>

                                <p>
                                    nous vous aidons dans le referencement de votre site web et nous vous plaçcons en haut sur les moteurs de recherches puis optimisons votre presence en ligne commandez maintenant
                                </p>

                                <a href="https://wa.me/+243996834353?text=Bonjour%2C%20je%20suis%20int%C3%A9ress%33%A9%20par%20votre%20services%20SEO" class="custom-btn custom-border-btn btn mt-3">Passez commande</a>

                                <div class="services-icon-wrap d-flex justify-content-center align-items-center">
                                    <i class="services-icon bi-google"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
  