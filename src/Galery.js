import './App.css';
import Navbar from './Components/Navbar';
import PageTitle from './Components/Corpo/PageTitle';
import Sidebar from './Components/Sidebar';
function Galery() {
  return (
    <div className="Galery">
      <Navbar />
      <PageTitle 
        title = 'galeria'
      />
      <Sidebar />
    </div>
  );
}

export default Galery;
