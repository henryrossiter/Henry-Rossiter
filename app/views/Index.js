import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2><Link to="/">Henry Rossiter</Link></h2>
          <p>Software Developer. Engineering Student. Statistics Enthusiast.</p>
        </div>
      </header>
      <p> Welcome to my website. Feel free to read more <Link to="/about">about me</Link>
        {' '} or check out my {' '}
        <Link to="/resume">resume</Link>, {' '}
        <Link to="/projects">projects</Link>, {' '}
        or <Link to="/stats">site statistics</Link>.
      </p>
    </article>
  </Main>
);

export default Index;
