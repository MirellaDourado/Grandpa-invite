import { BsWhatsapp } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import logo from './assets/logo.png'
import tamborim from './assets/tamborim.png'
import teco from './assets/teco_teco.mp3'
import { useState, useRef } from "react";
import { TbMusicOff, TbMusic } from "react-icons/tb";

function Open() {
  const [noise, setNoise] = useState(false);
  const myRef = useRef();

  async function teste() {
    setNoise(!noise)
    !noise === false ? myRef.current.pause() : myRef.current.play()
  }

  return(
      <div className='invite-paper'>
      <main id='invite'>
        <div className="top-side">
          <img src={ logo } alt="" />
            <p> Etelvino Soares Alves </p>
            <p>
              Teco
              <audio
                 ref={myRef}
                 src={teco}
              />
              <button onClick={ teste }>
                { noise === false ? <TbMusicOff size={'1.7rem'}/> : <TbMusic size={'1.7rem'}/> }
              </button>
            </p>
        </div>
        <div className="middle-side">
          <p>
            " Teco, teco, teco, teco, teco <br />
            Na bola de gude era o meu viver <br />
            Quando criança no meio da garotada <br />
            Com a sacola do lado, só jogava pra valer <br />
            Não fazia roupa de bonecas e tampouco convivia <br />
            Com as garotas do meu bairro que era natural <br />
            Vivia em postes, soltava papagaio <br />
            Até meus quatorze anos era esse meu mal " <br />
            <img src={ tamborim } alt="tamborim, clique para dar play" className='test'/>
          </p>
        </div>
        <div className="bottom-side">
          <div className="info">
            <p> SÁBADO, 30 DE MARÇO | 14H </p>
            <p>
                Rua J, 29 - São Domingos, Ilhéus - BA, 45657739 - Praia do Norte, <br/> Terceira rua após o posto de gasolina <br />
            </p>
          </div>
          <div className="links">
              <Link to={{pathname: 'https://maps.app.goo.gl/6jwrXuLPJM2HACZy7'}} target="_blank" title="Localização da festa"> 
                <FiMapPin size='3rem'/>
                  <span> Localização </span>
              </Link>
              <Link to={{pathname: 'https://wa.me/557388849931/?text=Confirmo%20minha%20presença%20no%20evento'}} target="_blank" title="Confirmação de presença">
                <BsWhatsapp size='3rem' />
                <span>Presença</span>
              </Link>
          </div>
        </div>
      </main>
      <footer>
        <p> Para uma vida bem vivida, uma grande celebração! </p>
      </footer>
    </div>
  )
}

export default Open;