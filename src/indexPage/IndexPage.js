import React from 'react';
import { Link } from 'react-router-dom'
import './IndexPage.css';

class IndexPage extends React.Component {
    render() {
        return (
            <div>
                <div className="Main">
                    <div className="Block">
                        <div className='AppLogo'>
                        </div>
                        <div className="BlockText">
                            <span>Vols saber a quins ajuts públics pots optar?</span>
                        </div>
                    </div>
                    <div className='CTA'>
                        <Link className="CTALink" to="/wizard/">
                            <button className="CTAButton">
                                <b>Consultar</b>
                            </button>
                        </Link>
                    </div>


                    <div className="Presentation">
                        <p className="PresentationText">Benvolgut/da,<br/>
                            està accedint el simulador social de les meves ajudes de la Ciutat de Barcelona per comprovar
                            si és susceptible de poder veure quines ajudes pot assolir.
                            Aquest simulador no tramita cap sol·licitud. El simulador virtual farà unes preguntes amb la
                            intenció de determinar si pot arribar a optar de les prestacions implementades en el sistema.</p>

                    </div>
                    <div className="Row">
                        <div className="Cell">
                            <h1><Link to="/ajuts/fons_infancia">Fons infància</Link></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="Cell">
                            <h1><Link to="/ajuts/menjador">Ajuts individuals de menjador</Link></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="Cell">
                            <h1><Link to="/ajuts/lloguer">Ajuts al pagament del lloguer</Link></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                        <div className="Cell">
                            <h1><Link to="/ajuts/rai">Renda activa d'inserció</Link></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        </div>
                        <div className="Cell">
                            <h1><Link to="/ajuts/rgc">Renda Garantida Ciutadana</Link></h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexPage;