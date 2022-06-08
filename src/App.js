import { React } from 'react'
import SignUp from './pages/SignUp';
import {Link} from 'react-router-dom'
function App() {
  return (
    <div>
      <Link
        to='sign-up'
      >
        sign-up
      </Link>
    </div>
  );
}

export default App;
