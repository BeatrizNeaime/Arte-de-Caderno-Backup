import PageTitle from '../../Components/Corpo/PageTitle';
import Sidebar from '../Sidebar';
import Draws from '../../Components/Corpo/Draws';
import "./Galery.css";

function Galery() {
  return (
    <>
      <div className="galery">
        <PageTitle 
          title = 'galeria'
          />
        <div className='body-galery'>
          <div className="esq">
            <Sidebar />
          </div>
          <div className="dir">
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
            </div>
          </div>
        </div>
      </div> 
    </>
    
  );
}

export default Galery;
