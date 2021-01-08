import './styles.css';
import { ReactComponent as MainImage } from './main.svg';
import Footer from '../Footer/index';
import { Link } from 'react-router-dom';
function Home(){
    
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">
                            Faça seu pedido <br/> que entregamos <br/> para você!
                        </h1>
                        <h3 className="hom-subtitle">
                            Escolha sua refeiçao e em alguns instantes <br/> levaremos na sua porta.
                        </h3>
                        <Link to="/orders" className="home-btn-order">
                            FAZER PEDIDO!
                        </Link>
                    </div>
                    <div className="home-image">
                        <MainImage />
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default Home;