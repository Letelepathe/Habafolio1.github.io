import { useEffect, useRef } from "react";
import restall from "../magic/apparEffect";

export default function Projet  (params)  {
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
     
        <section class="projects section-padding" id="section_4">
        <div class="container">
            <div class="row">

                <div class="col-lg-8 col-md-8 col-12 ms-auto" >
                    <div class="section-title-wrap d-flex justify-content-center align-items-center mb-4" ref={Charisme}>
                        <img src="images/white-desk-work-study-aesthetics.jpg" class="avatar-image img-fluid" alt=""/>

                        <h2 class="text-white ms-4 mb-0">Mes Realisations</h2>
                    </div>
                </div>

                <div class="clearfix"></div>

                <div class="col-lg-4 col-md-6 col-12" ref={Charisme}>
                    <div class="projects-thumb">
                        <div class="projects-info">
                            <small class="projects-tag">Site web</small>
                           
                            <h3 class="projects-title">Mwasi</h3>
                            <a href="https://www.sololanamwasi.com" class="popup-image projects-tag">
                            sololanamwasi
                                </a>
                        </div>

                        <a href="images/projects/mwasi.jpeg" class="popup-image">
                            <img src="images/projects/mwasi.jpeg" class="projects-image img-fluid" alt=""/>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-12" ref={trou}>
                    <div class="projects-thumb">
                        <div class="projects-info">
                            <small class="projects-tag">Application mobile</small>

                            <h3 class="projects-title">salacash</h3>
                            <a href="https://salacash-app.vercel.app" class="popup-image projects-tag">
                            Salacash app download
                                </a>
                        </div>

                        <a href="images/projects/salacash_icon.jpg" class="popup-image">
                            <img src="images/projects/salacash_icon.jpg" class="projects-image img-fluid" alt=""/>
                        </a>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-12" ref={CQH}>
                    <div class="projects-thumb">
                        <div class="projects-info">
                            <small class="projects-tag">site web</small>

                            <h3 class="projects-title">Theory</h3>
                            <a href="https://Theory-2025.vercel.app" class="popup-image projects-tag">
                            Theory
                                </a>
                        </div>

                        <a href="images/projects/charisme2.webp" class="popup-image">
                            <img src="images/projects/charisme2.webp" class="projects-image img-fluid" alt=""/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
  }
  