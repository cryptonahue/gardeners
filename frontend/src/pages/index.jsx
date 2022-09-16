import { isLoggedIn } from '../../login/login.js';

import Card from '@mui/material/Card';

function About() {
  isLoggedIn().then(() => {

    
  })
  return <div>About</div>
}

export default About