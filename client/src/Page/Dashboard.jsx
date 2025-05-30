import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import Equipe from './Dashboard/GererEquipe';
import FormationContinue from './Dashboard/GererContinue';
import FormationDiplomante from './Dashboard/GererDiplome';
import Messages from './Dashboard/GererMessage';
import Entreprise from './Dashboard/GererEntrePrise';

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem('isAuthenticated');
      navigate('/login');
    };

  const location = useLocation();

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">
        <i class="fa-solid fa-gear"></i>
          Tableau De Bord
        </div>
        <nav>
  <ul>
    
    <li><Link to="/dashboard/equipe" className={location.pathname.includes('equipe') ? 'active' : ''}>Équipe</Link></li>
    <li><Link to="/dashboard/formation-diplomante" className={location.pathname.includes('formation-diplomante') ? 'active' : ''}>Formation Diplômantes</Link></li>
    <li><Link to="/dashboard/formation-continue" className={location.pathname.includes('formation-continue') ? 'active' : ''}>Formation Continue</Link></li>
    <li><Link to="/dashboard/entreprise" className={location.pathname.includes('entreprise') ? 'active' : ''}>Formation Entre Prises</Link></li>
    <li><Link to="/dashboard/messages" className={location.pathname.includes('messages') ? 'active' : ''}>Message Reçus</Link></li>
    <li><button className="logoutbtn" onClick={handleLogout} style={{ marginTop: '20px' }}>
    Se déconnecter
      </button></li>
  </ul>
</nav>

      </aside>
      
      <main className="main-content">
      <h1 className="bnjr">Bonjour Admin</h1>
    
       <section className="dashboard-description">
          
          <p className='rr'>
            Ce tableau de bord vous permet de gérer l'ensemble des formations proposées par Horizon Academy. Vous
            pouvez gérer les formations diplômantes, les formations continues, les messages reçus et plus encore. 
            Sélectionnez une section dans le menu latéral pour commencer à gérer vos formations et interagir avec 
            les utilisateurs.
          </p>
        </section>
        <Routes>
          <Route path="equipe" element={<Equipe />} />
          <Route path="formation-continue" element={<FormationContinue />} />
          <Route path="formation-diplomante" element={<FormationDiplomante />} />
          <Route path="entreprise" element={<Entreprise />} />
          <Route path="messages" element={<Messages />} />
        </Routes>
      </main>
    </div>
  );
};

export default Dashboard;
