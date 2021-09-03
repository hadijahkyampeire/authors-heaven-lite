import React from 'react';
import image from '../../res/image1.jpeg'
import { Button } from 'carbon-components-react';
import { Card } from 'components/card';

import './__styles__/landing.scss';

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="upper-section">
        <section className="welcome-notes">
          <h2>Welcome to Authors Heaven</h2>
          <p>A platform to write and share knowledge with the rest of the world.</p>
          <Button className="explore-button">Explore</Button>
        </section>
        <img src={image} alt="my-bg" className="image-section" />
      </div>
      <section className="lower-section">
        <div>
          <h2>Trending Articles</h2>
          {[1, 2, 3].map(a => <Card key={a} />)}
        </div>
        <div>
        <h2>Latest Articles</h2>
        {[1, 2].map(a => <Card key={a} />)}
        </div>
      </section>
    </div>
  );
};

export { Landing };
