import { useEffect, useRef } from "react";
import restall from "../magic/apparEffect";

export default function Clients  (params)  {
  const CQH = useRef();
      useEffect(() => {
          restall(CQH, 'appar-right');
      }, []);
    return (
        <section class="clients section-padding">
        <div class="container">
            <div class="row align-items-center" ref={CQH}>

                <div class="col-lg-12 col-12">
                    <h3 class="text-center mb-5">Clients Satisfait</h3>
                </div>

                <div class="col-lg-2 col-4 ms-auto clients-item-height" >
                    <img src="images/projects/logo4.png" class="clients-image img-fluid" alt=""/>
                </div>

                <div class="col-lg-2 col-4 clients-item-height" >
                    <img src="images/projects/salacash_icon.jpg" class="clients-image img-fluid" alt=""/>
                </div>

                
                <div class="col-lg-2 col-4 ms-auto clients-item-height" >
                    <img src="images/clients/a.png" class="clients-image img-fluid" alt=""/>
                </div>

                <div class="col-lg-2 col-4 clients-item-height" >
                    <img src="images/clients/charisme2.webp" class="clients-image img-fluid" alt=""/>
                </div>

                <div class="col-lg-2 col-4 clients-item-height" >
                    <img src="images/clients/liberty.jpeg" class="clients-image img-fluid" alt=""/>
                </div>
            </div>
        </div>
    </section>
    )
  }
  


