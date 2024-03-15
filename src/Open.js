import { BsWhatsapp } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from './assets/logo.png'
import tamborim from './assets/tamborim.png'

function Open() {
  return(
      <div className='invite-paper'>
      <main id='invite'>
        <div class="top-side">
          <img src={ logo } alt="" />
            <p> Etelvino Soares Alves </p>
            <p>
              Teco
              <img src={ tamborim } alt="tamborim, clique para dar play" class='test'/>
            </p>
        </div>
        <div class="middle-side">
          <p>
            " Teco, teco, teco, teco, teco <br />
            Na bola de gude era o meu viver <br />
            Quando criança no meio da garotada <br />
            Com a sacola do lado, só jogava pra valer <br />
            Não fazia roupa de bonecas e tampouco convivia <br />
            Com as garotas do meu bairro que era natural <br />
            Vivia em postes, soltava papagaio <br />
            Até meus quatorze anos era esse meu mal " <br />
          </p>
        </div>
        <div class="bottom-side">
          <div class="info">
            <p> Sábado, 30 DE MARÇO | 14H </p>
            <p>
                Rua J, 29 - São Domingos, Ilhéus - BA, 45657739 - Praia do Norte, Terceira rua após o posto de gasolina <br />
            </p>
          </div>
          <div class="links">
              <Link to={{pathname: 'https://maps.app.goo.gl/6jwrXuLPJM2HACZy7'}} target="_blank" title="Localização da festa"> 
                <FiMapPin size='3rem'/>
                  <span> Localização </span>
              </Link>
              <Link to={{pathname: 'https://wa.me/557388849931'}} target="_blank" title="Confirmação de presença">
                <BsWhatsapp size='3rem' />
                <span>Presença</span>
              </Link>
          </div>
        </div>
      </main>
      <footer>
        <p> A uma vida bem vivida, uma grande celebração! </p>
      </footer>
    </div>
  )
}

export default Open;