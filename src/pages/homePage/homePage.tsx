import React from 'react';
import './homePage.scss';
import { Link } from 'react-router-dom';

export default function HomePage() {

  return (
    <section className='homePage'>
      <Link to={'/didier'}>Didier</Link>
      <Link to={'/sandrine'}>Sandrine</Link>
    </section>
  )
}