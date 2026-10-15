import './style.css';
import { configuracaoBotao } from '../../components/Button/BotaoInicio.js';

function PaginaInicio() {
    // Pega as configurações do botão de forma isolada
    const botaoProps = configuracaoBotao();

    return (
        <div className="container-inicio">
            <div>
                <img src='../../src/assets/images/image1.png' alt='Ilustração da Loja' />
            </div>
            
            <div>
                <h1 className='titulo'>Associação De Moradores</h1>
                <h3 className='descricao'>
                    Seu e-commerce de produtos locais.
                </h3>

                {/* O botão funciona sozinho aqui */}
                <button 
                  className={botaoProps.className} 
                  onClick={botaoProps.onClick}
                >
                  {botaoProps.texto}
                </button>
            </div>
        </div>
    );
}
  
export default PaginaInicio;
