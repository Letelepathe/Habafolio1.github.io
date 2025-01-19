import Apropos from "../components/habaCompose/Apropos";
import Clients from "../components/habaCompose/clients";
import Contact from "../components/habaCompose/contact";
import Presentation from "../components/habaCompose/presentation";
import Projet from "../components/habaCompose/projet";
import Services from "../components/habaCompose/services";
import Skills from "../components/habaCompose/skills";

export default function Home()
{
    
    return(
        <>
            <Presentation />
            < Services/>
            < Projet/>
            < Clients/>
            < Skills/>
            < Apropos/>
            < Contact/>
        </>
    )
}