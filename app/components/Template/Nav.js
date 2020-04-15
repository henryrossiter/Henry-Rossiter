import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-bootstrap';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


import data from '../../data/contact';

const Nav = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <Carousel
          controls={false}
          indicators={false}
          interval={3000}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${BASE_PATH}/images/me_icon.jpg`}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${BASE_PATH}/images/me_icon2.jpg`}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={`${BASE_PATH}/images/me_icon3.jpg`}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Link>
      <header>
        <h2>Henry Rossiter</h2>
        <p><a href="mailto:rossiterhenry@gmail.com">rossiterhenry@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
      I’m a software developer and computational engineering student based in Austin, TX.
      </p>
      <ul className="actions">
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ul className="icons">
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
      <p className="copyright">&copy; Henry Rossiter.</p>
    </section>
  </section>
);

export default Nav;
