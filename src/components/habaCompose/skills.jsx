import { useEffect, useRef } from "react";
import restall from "../magic/apparEffect";

export default function Skills  (params)  {
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
        <section class="featured section-padding">
        <div class="container">
            <div class="row">

                <div class="col-lg-6 col-12">
                    <div class="profile-thumb" ref={trou}>
                        <div class="profile-title">
                            <h4 class="mb-0">Mes competance</h4>
                        </div>

                        <div class="profile-body">
                            <p>
                                <span class="profile-small-title">Diplome</span> 
                                <span>Genie Informatique Unikin</span>
                            </p>

                            <p>
                                <span class="profile-small-title">Annee</span> 
                                <span>2023</span>
                            </p>

                            <p>
                                <span class="profile-small-title">Experience professionnel</span> 
                                 <span><a href="tel: 305-240-9671">5ans</a></span>
                            </p>

                            <p>
                                <span class="profile-small-title">Publication</span> 
                                <span>TFC,TFE,Tuto C#</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 col-12 mt-5 mt-lg-0">
                    <div class="about-thumb">
                        <div class="row">
                            <div class="col-lg-6 col-6 featured-border-bottom py-2" ref={Charisme}>
                                <strong class="featured-numbers">80%</strong>

                                <p class="featured-text">Nextjs</p>
                            </div>

                            <div class="col-lg-6 col-6 featured-border-start featured-border-bottom ps-5 py-2" ref={Charisme}>
                                <strong class="featured-numbers">80%</strong>

                                <p class="featured-text">Reactjs</p>
                            </div>

                            <div class="col-lg-6 col-6 pt-4" ref={CQH}>
                                <strong class="featured-numbers">80%</strong>

                                <p class="featured-text">Php</p>
                            </div>

                            <div class="col-lg-6 col-6 featured-border-start ps-5 pt-4" ref={trou}>
                                <strong class="featured-numbers">70%</strong>

                                <p class="featured-text">javascript</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
    )
  }
  


