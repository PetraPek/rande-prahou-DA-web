import React from 'react';
import './petra.css';
import petra from './img/petra.jpg';

export const Petra = () => {
  return (
    <div class="content">
      <div>
        <div class="description">
          <h1 class="personal__title">Peťa</h1>
          <img class="personal__foto" src={petra} alt="Petra Pekařová" />

          <p class="description__iintroduction">
            Ke kódování, programování a celkově k Czechitas jsem se dostala jako
            slepý k houslím díky své bývalé práci.
          </p>

          <p class="description__introduction">
            Působila jsem na pozici IT Recruitera a rozčilovalo mě, že nerozumím
            tomu, co kandidátům nabízím. Začala jsem googlit a našla Czechitas a
            jejich kurzy. Absolvovala jsem různé kurzy abych věděla co dělá
            tester, analytik, vývojář a natolik mě to chytlo, že jsem dneska
            tady.
          </p>

          <a class="gitHub" href="https://github.com/PetraPek">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
