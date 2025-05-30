import ibra from "../../Images/lokmani_ibrahim.png";
import "./Fondateur.css";

function Fondateur() {
  return (
    <>
    <h1 className="fon">Fondateur</h1>
      <div className="fondateur">
        <div className="fond">
          <div className="texte">
            <h1>
              <span className="highlight">Lokmani Ibrahim</span> 
            </h1>
            <p className="p2">
              Certes, la réussite d’un stagiaire dans sa vie professionnelle est
              le résultat de beaucoup d’efforts et de sacrifices…. Mais, une
              réussite durable et pérenne représente le fruit de la passion qu’on
              éprouve pour son métier. Faites, donc de votre passion un métier.
            </p>
            <h3>
              Horizon Academy of Professional Training, vers un nouvel horizon.
            </h3>
          </div>
        </div>
        <div className="image">
          <img src={ibra} alt="Lokmani Ibrahim" />
        </div>
      </div>
    </>
  );
}

export default Fondateur;
