import { Link } from 'react-router-dom';
import React from 'react'

function About() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
      <h4>Version 1.0.1</h4>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default About