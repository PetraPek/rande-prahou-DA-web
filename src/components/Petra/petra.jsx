import React from 'react';
import '../Johana/johana.css';
import petra from './img/petra.jpg';

export const Petra = () => {
  return (
    <div className="personal__content">
      <div className="personal__card">
        <img className="personal__foto" src={petra} alt="Petra Pekařová" />
        <div className="personal__description">
          <h1 className="personal__title">Peťa</h1>

          <p className="personal__info">
            Ke kódování, programování a celkově k Czechitas jsem se dostala jako
            slepý k houslím díky své bývalé práci.
          </p>

          <p className="personal__info">
            Působila jsem na pozici IT Recruitera a rozčilovalo mě, že nerozumím
            tomu, co kandidátům nabízím. Začala jsem googlit a našla Czechitas a
            jejich kurzy. Absolvovala jsem různé kurzy abych věděla co dělá
            tester, analytik, vývojář a natolik mě to chytlo, že jsem dneska
            tady.
          </p>

          <a className="gitHub" href="https://github.com/PetraPek">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
