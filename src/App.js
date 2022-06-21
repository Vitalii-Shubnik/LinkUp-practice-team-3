import { React } from 'react'
// import SignUp from './pages/SignUp';
import {Link} from 'react-router-dom'
import Categories from './components/Categories';
function App() {
  return (
    <div>
      <Categories/>
      <Link
        to='sign-up'
      >
        sign-up
      </Link>
    </div>
  );
}

export default App;
