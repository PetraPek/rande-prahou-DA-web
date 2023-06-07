import React from 'react';
import './johana.css';
import johyy from './img/johyy.jpg';

export const Johana = () => {
  return (
    <div className="content">
      <div>
        <div className="description">
          <h1 className="personal__title">Johanka</h1>
          <img className="personal__foto" src={johyy} alt="Johana Pokorná" />

          <p className=".description__introduction">
            Kdo jsem a něco o mně - jsem otevřená kniha, miluju zábavu, ráda se
            pousměji, zasměji a nakonec i rozesměji. Ráda trávím čas s přáteli,
            ale zároveň potřebuji mít někdy vlastní klid, ač to na první pohled
            nemusí být úplně znát. Baví mě design všeho druhu, což budu moc snad
            jednou využít i ve své profesi.
          </p>

          <p className=".description__introduction">
            Co se týče mé cesty do IT - je tomu asi rok, kdy jsem se rozhodla o
            změnu kariérní cesty a vybrala jsem si právě IT. Googlila jsem a
            googlila, jak se prý v IT dělá často, a narazila na kurz Digitální
            akademie, pro kterou jsem se po aboslvování jiných kurzu od
            Czechitas, rozhodla snadno a rychle.
          </p>
          <a className="gitHub" href="https://github.com/pokornajohana">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};
