import Navbar from './Components/Navbar';
import PageTitle from './Components/Corpo/PageTitle';
import Sidebar from './Components/Sidebar';
import Draws from './Components/Corpo/Draws';
import "./Galery.css";

function Galery() {
  return (
    <div className="galery">
      <Navbar />
      <PageTitle 
        title = 'galeria'
      />
      <div className='body-galery'>
        <Sidebar />
        <div className='draws'>
          <Draws />
          <Draws />
          <Draws />
          <Draws />
          <Draws />
          <Draws />
          <Draws />
          <Draws />
          <Draws />
          <Draws />
          <Draws />
          <Draws />
          <Draws />
          <Draws />
          <Draws />
          <Draws />
          <Draws />
          <Draws />
          <Draws />
          <Draws />
        </div>
      </div>
    </div>
  );
}

export default Galery;
