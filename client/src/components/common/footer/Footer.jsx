import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="foot">
        <img src="https://hapt.tn/images/partners_grey/sahel-voyages.png" />
        <img src="https://hapt.tn/images/partners_grey/partner2.png" />
        <img src="https://hapt.tn/images/partners_grey/partner3.png" />
        <img src="https://hapt.tn/images/partners_grey/partner4.png" />
        <img src="https://hapt.tn/images/partners_grey/partner5.png" />
        <img src="https://hapt.tn/images/partners_grey/partner6.png" />
      </div>
      <footer className="footer">
      <div className="f-container">
        <div className="row">
          <div className="footer-col">
            <h4>À propos de l’Académie</h4>
            <ul>
              <li><a href="#a1">les departement</a></li>
             
              <li><a href="#a2">advantage et Formation</a></li>
              <li><a href="#a3">Fondateur</a></li>
              <li><a href="#a4">notre equipe</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contactez-nous</h4>
            <ul>
              <li><a href="#">rue 3 aout 1903 , 4000 sousse</a></li>
              <li><a href="#">+216 25 959 264</a></li>
              <li><a href="#">contact@hapt.tn</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Suivez-nous</h4>
            <div className="social-links">
		          	<a href="https://www.facebook.com/academy.horizon/" ><i className="fa-brands fa-facebook" id="i1" ></i></a>
                <a href="https://www.instagram.com/lokmani_ibrahim/"  ><i className="fa-brands fa-instagram" id="i2"></i></a>
                <a href="#" ><i className="fa-brands fa-google" id="i3" ></i></a>
                <a href="https://www.linkedin.com/company/h-a-p-t/?originalSubdomain=tn"  ><i className="fa-brands fa-linkedin" id="i4"></i></a>
            </div>
          </div>
        </div>
      </div>
      <p id="iii">Copyright 2021. Horizon Academy of Professional Training by Horizon code Academy</p>
    </footer>
    </>
  );
}

export default Footer;
