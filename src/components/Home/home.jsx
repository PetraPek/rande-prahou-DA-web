import React, { useState } from 'react';
import figma_logo_web from './img/figma_logo_web.png';
import figma_mapa_druhastrana from './img/figma_mapa_druhastrana.png';

export const Home = () => {
  const [changeSizeOne, setChangeSizeOne] = useState(false);
  const [changeSizeTwo, setChangeSizeTwo] = useState(false);

  return (
    <div className="content">
      <div className="description_card">
        <div className="description">
          <p className="description__question">
            NEVÍTE, KAM VZÍT SVŮJ NOVÝ OBJEV?
            <p className="description__question">
              NEBO KAM VZÍT SVÉHO DLOUHOLETÉHO PARTNERA?
            </p>
          </p>
          <br />
          <p className="description__introduction">
            Překvapte svoji drahou polovičku a vyražte na námi doporučená místa.
            Nikdo nemusí vědět, že jsme vám pomohli právě my. My to na vás
            neřekneme.
          </p>
          <br />
          <p className="description__project">
            Náš projekt má za cíl vás dostat na místa, která jste třeba dosud
            neznali. Nevycházíme z žádného obecného doporučení. Vycházíme z
            vlastních zkušeností s každým místem.
          </p>

          <h3>Grafický návrh</h3>
          <div className="figma">
            <img
              className={
                'figma_picture ' + (changeSizeOne ? 'different__size' : '')
              }
              src={figma_logo_web}
              alt="figma_map"
              onClick={() => {
                setChangeSizeOne(!changeSizeOne);
              }}
            />
            <img
              className={
                'figma_picture ' + (changeSizeTwo ? 'different__size' : '')
              }
              src={figma_mapa_druhastrana}
              alt="figma_mobile_drift"
              onClick={() => {
                setChangeSizeTwo(!changeSizeTwo);
              }}
            />
          </div>
          <a class="whereToGo" href="/mapa">
            Kam vyrazit?
          </a>
        </div>
      </div>
    </div>
  );
};
