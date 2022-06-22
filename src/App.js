import { React } from 'react'
// import SignUp from './pages/SignUp';
import { Link } from 'react-router-dom'
import ImageSlider from './components/ImageSlider'
import './styles/slider.css'
import img from './images/SliderImage.png'

//temp data untill api is realized
const data = [
  {
    url: img,
    title: 'Winter',
    description: 'Premium midseason sale'
  },
  {
    url: img,
    title: 'Summer',
    description: 'Premium midseason sale'
  },
  {
    url: img,
    title: 'Spring',
    description: 'Premium midseason sale'
  },
  {
    url: img,
    title: 'AUTUMN',
    description: 'Premium midseason sale'
  },
]
function App() {
  return (
    <div style={{height:'100%'}}>
      <div className='slides-container'>
        <ImageSlider data={data} />
      </div>
      <Link
        to='sign-up'
      >
        sign-up
      </Link>
    </div>
  );
}

export default App;
