import { useEffect, useRef } from "react";
import restall from "../magic/apparEffect";

export default function Contact  (params)  {
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
        <section class="contact section-padding" id="section_5">
        <div class="container">
            <div class="row">

                <div class="col-lg-6 col-md-8 col-12" ref={trou}>
                    <div class="section-title-wrap d-flex justify-content-center align-items-center mb-5">
                        {/* <img src="images/aerial-view-man-using-computer-laptop-wooden-table.jpg" class="avatar-image img-fluid" alt=""/> */}

                        <h2 class="text-white ms-4 mb-0">Contactez moi</h2>
                    </div>
                </div>

                <div class="clearfix"></div>

                <div class="col-lg-6 col-md-6 col-12 pe-lg-0" ref={Charisme}>
                    <div class="contact-info contact-info-border-start d-flex flex-column">
                        <strong class="site-footer-title d-block mb-3">Services</strong>

                        <ul class="footer-menu">
                            <li class="footer-menu-item"><a href="#" class="footer-menu-link">site web</a></li>

                            <li class="footer-menu-item"><a href="#" class="footer-menu-link">Application web</a></li>

                            <li class="footer-menu-item"><a href="#" class="footer-menu-link">Ecommerce</a></li>

                            <li class="footer-menu-item"><a href="#" class="footer-menu-link">SEO</a></li>
                        </ul>

                        <strong class="site-footer-title d-block mt-4 mb-3">Mes Reseaux sociaux</strong>

                        <ul class="social-icon">
                            <li class="social-icon-item"><a href="https://linkedin.com/in/habacuc-mayombo-bb52b4216?utm_content=profile&utm_medium=android_app" class="social-icon-link bi-linkedin"></a></li>

                            <li class="social-icon-item"><a href="https://facebook.com/profil.php?id=100089237450626" class="social-icon-link bi-facebook"></a></li>

                            <li class="social-icon-item"><a href="https://github.com/Letelepathe" class="social-icon-link bi-github"></a></li>

                            <li class="social-icon-item"><a href="https://wa.me/+243996834353" class="social-icon-link bi-whatsapp"></a></li>
                        </ul>

                        <strong class="site-footer-title d-block mt-4 mb-3">Commençons ce projet</strong>

                        <p class="mb-0">Disponible pour ce projet fascinant</p>
                    </div>
                </div>

                <div class="col-lg-6 col-md-6 col-12 ps-lg-0" ref={CQH}>
                    <div class="contact-info d-flex flex-column">
                        <strong class="site-footer-title d-block mb-3">Apropos</strong>

                        <p class="mb-2">
                            Developpeur full stack depuis 7ans , je propose des solutions informatique aux entreprises et particuliers.
                  </p>

                        <strong class="site-footer-title d-block mt-4 mb-3">Email</strong>

                        <p>
                            <a href="mailto:habacucmajamba.dev@gmail.com">
                              habacucmajamba.dev@gmail.com
                            </a>
                        </p>

                        <strong class="site-footer-title d-block mt-4 mb-3">Appelez moi</strong>

                        <p class="mb-0">
                            <a href="tel: +243996834353">
                            +243-996-834-353
                            </a>
                        </p>
                    </div>
                </div>

                {/* <div class="col-lg-6 col-12 mt-5 mt-lg-0" ref={trou}>
                    <form action="#" method="get" class="custom-form contact-form" role="form">
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-12">
                                <div class="form-floating">
                                    <input type="text" name="name" id="name" class="form-control" placeholder="Name" required=""/>
                                    
                                    <label for="floatingInput">nom</label>
                                </div>
                            </div>

                            <div class="col-lg-6 col-md-6 col-12"> 
                                <div class="form-floating">
                                    <input type="email" name="email" id="email" pattern="[^ @]*@[^ @]*" class="form-control" placeholder="Email address" required=""/>
                                    
                                    <label for="floatingInput">adresse email</label>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-6">
                                <div class="form-check form-check-inline">
                                    <input name="website" type="checkbox" class="form-check-input" id="inlineCheckbox1" value="1"/>

                                    <label class="form-check-label" for="inlineCheckbox1">
                                        <i class="bi-globe form-check-icon"></i>
                                        <span class="form-check-label-text">site web</span>
                                    </label>
                              </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-6">
                                <div class="form-check form-check-inline">
                                    <input name="branding" type="checkbox" class="form-check-input" id="inlineCheckbox2" value="1"/>

                                    <label class="form-check-label" for="inlineCheckbox2">
                                        <i class="bi-bag form-check-icon"></i>
                                        <span class="form-check-label-text">Ecommerce</span>
                                    </label>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-6">
                                <div class="form-check form-check-inline">
                                    <input name="ecommerce" type="checkbox" class="form-check-input" id="inlineCheckbox3" value="1"/>

                                    <label class="form-check-label" for="inlineCheckbox3">
                                        <i class="bi-phone form-check-icon"></i>
                                        <span class="form-check-label-text">application mobile</span>
                                    </label>
                                </div>
                            </div>

                            <div class="col-lg-3 col-md-6 col-6">
                                <div class="form-check form-check-inline me-0">
                                    <input name="seo" type="checkbox" class="form-check-input" id="inlineCheckbox4" value="1"/>

                                    <label class="form-check-label" for="inlineCheckbox4">
                                        <i class="bi-google form-check-icon"></i>
                                        <span class="form-check-label-text">SEO</span>
                                    </label>
                                </div>
                            </div>

                            <div class="col-lg-12 col-12">
                                <div class="form-floating">
                                    <textarea class="form-control" id="message" name="message" placeholder="Tell me about the project"></textarea>
                                    
                                    <label for="floatingTextarea">Parlez moi de votre projet</label>
                                </div>
                            </div>

                            <div class="col-lg-3 col-12 ms-auto">
                                <button type="submit" class="form-control">Envoyez</button>
                            </div>

                        </div>
                    </form>
                </div> */}

            </div>
        </div>
</section>
    )
  }
  