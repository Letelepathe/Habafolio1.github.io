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
     
        <section className="projects section-padding" id="section_4">
        <div className="container">
            <div className="row">

                <div className="col-lg-8 col-md-8 col-12 ms-auto" >
                    <div className="section-title-wrap d-flex justify-content-center align-items-center mb-4" ref={Charisme}>
                        <img src="images/white-desk-work-study-aesthetics.jpg" className="avatar-image img-fluid" alt=""/>

                        <h2 className="text-white ms-4 mb-0">Mes Realisations</h2>
                    </div>
                </div>

                <div className="clearfix"></div>

                <div className="col-lg-4 col-md-6 col-12" ref={Charisme}>
                    <div className="projects-thumb">
                        <div className="projects-info">
                            <small className="projects-tag">Site web</small>
                           
                            <h3 className="projects-title">Mwasi</h3>
                            <a href="https://www.sololanamwasi.com" className="popup-image projects-tag">
                            sololanamwasi
                                </a>
                        </div>

                        <a href="images/projects/mwasi.jpeg" className="popup-image">
                            <img src="images/projects/mwasi.jpeg" className="projects-image img-fluid" alt=""/>
                        </a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12" ref={trou}>
                    <div className="projects-thumb">
                        <div className="projects-info">
                            <small className="projects-tag">Application mobile</small>

                            <h3 className="projects-title">salacash</h3>
                            <a href="https://salacash-app.vercel.app" className="popup-image projects-tag">
                            Salacash app download
                                </a>
                        </div>

                        <a href="images/projects/salacash_icon.jpg" className="popup-image">
                            <img src="images/projects/salacash_icon.jpg" className="projects-image img-fluid" alt=""/>
                        </a>
                    </div>
                </div>

                <div className="col-lg-4 col-md-6 col-12" ref={CQH}>
                    <div className="projects-thumb">
                        <div className="projects-info">
                            <small className="projects-tag">site web</small>

                            <h3 className="projects-title">Theory</h3>
                            <a href="https://Theory-2025.vercel.app" className="popup-image projects-tag">
                            Theory
                                </a>
                        </div>

                        <a href="images/projects/charisme2.webp" className="popup-image">
                            <img src="images/projects/charisme2.webp" className="projects-image img-fluid" alt=""/>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
  }
  