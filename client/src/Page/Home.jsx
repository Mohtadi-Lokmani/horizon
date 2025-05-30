import First from "../components/background image/First"
import Departement from "../components/Department/Department"
import AdvForm from "../components/AdvForm/AdvForm"
 import Fondateur from "../components/Fondateur/Fondateur"
 import Equipe from "../components/equipe/TeamSwiper"
 import Header from "../components/common/header/Header";
import Footer from "../components/common/footer/Footer";

export default function Home() {
    return (
        <>
        <Header></Header>
        <First></First>
        <section  id="a1"><Departement ></Departement></section>
         
         <section  id="a2"><AdvForm ></AdvForm></section>
        <section  id="a3"><Fondateur/></section>
        <section  id="a4"><Equipe ></Equipe> </section>
         <Footer></Footer>
        </>
    )
  }