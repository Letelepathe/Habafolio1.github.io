import { useEffect, useRef } from "react";
import restall from "../magic/apparEffect";

export default function Clients  (params)  {
  const CQH = useRef();
      useEffect(() => {
          restall(CQH, 'appar-right');
      }, []);
    return (
        <section className="clients section-padding">
        <div className="container">
            <div className="row align-items-center" ref={CQH}>

                <div className="col-lg-12 col-12">
                    <h3 className="text-center mb-5">Clients Satisfait</h3>
                </div>

                <div className="col-lg-2 col-4 ms-auto clients-item-height" >
                    <img src="images/projects/logo4.png" className="clients-image img-fluid" alt=""/>
                </div>

                <div className="col-lg-2 col-4 clients-item-height" >
                    <img src="images/projects/salacash_icon.jpg" className="clients-image img-fluid" alt=""/>
                </div>

                
                <div className="col-lg-2 col-4 ms-auto clients-item-height" >
                    <img src="images/clients/a.png" className="clients-image img-fluid" alt=""/>
                </div>

                <div className="col-lg-2 col-4 clients-item-height" >
                    <img src="images/clients/charisme2.webp" className="clients-image img-fluid" alt=""/>
                </div>

                <div className="col-lg-2 col-4 clients-item-height" >
                    <img src="images/clients/liberty.jpeg" className="clients-image img-fluid" alt=""/>
                </div>
            </div>
        </div>
    </section>
    )
  }
  


