import React from 'react';
import './__styles__/card.scss';

export const Card = () => {
  return (
    <article className="bx--card" aria-labelledby="card-title-2">
      <section className="bx--card-overview__about">
        <header className="bx--about__title">
          <p id="card-title-2" className="bx--about__title--name bx--type-gamma" title="Card Name">Article 1</p>
          <p className="bx--about__title--additional-info bx--type-delta" title="Secondary Information">Something about health</p>
        </header>
    </section>
    <footer className="bx--card-footer">
      <button className="bx--btn bx--btn--primary bx--btn--sm" type="button" title="View credentials">View More</button>
      <a href="/kk" className="bx--card-footer__link">Share</a>
    </footer>
</article>
  );
};
