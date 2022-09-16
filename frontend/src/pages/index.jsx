import { isLoggedIn } from '../../login/login.ts';

import Card from '@mui/material/Card';

function About() {
  isLoggedIn().then(() => {

    
  })
  return <div>About</div>
}

export default About