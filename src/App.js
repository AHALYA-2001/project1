import logo from './logo.svg';
//import './App.cs Hello from '
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';
//import Project1 from './COMPONENT/Project1';
import Project2 from './COMPONENT/Project2';

function App() {

  const data = [
    {
      id: 1,
      name: "kalpana chawla",
      img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.economictimes.com%2Fmagazines%2Fpanache%2Fus-spacecraft-named-after-late-astronaut-kalpana-chawla-who-died-during-a-space-mission%2Farticleshow%2F78031695.cms&psig=AOvVaw2pz2mcKEAsaoYuC5Bmb7tC&ust=1713509912431000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJDgvpOYy4UDFQAAAAAdAAAAABAE',
      description:"Kalpana Chawla was an indian born American astrona and aerospace engineer who was the first women of india originto fly to space . she first flew on space shuttle columbia in1997 as a mission specialist and primary robotic arm operator aboard STS-87.Kalpana Chawla was an indian born American astronautand aerospace engineer who was the first women of india originto fly to space Kalpana Chawla was an indian born American astronautand aerospace engineer who was the first women of india originto fly to space </Card.Text"
    },
    {
      id: 2,
      name: "Ritu Karidhal",
      img:'https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTz9fyw21TAUTNeA4DyibDz0am53uyBPlF_v_herIePotDPrTbo0VufRetzxnGDB0kpCHktcd3ekOKM3RQ',
      description:"Ritu Karidhal Srivastava is an Indian scientist andaerospace engineer working in the Indian Space Research Organisation(ISRO). She was a Deputy Operations Director to India's Mars orbita mission, Mangalyaan.She has been referred to as one of the many Rocket Women of India. Giving tribute to her excellence in Mangalayaan mission, a Bollywood film Mission Mangal was created where Indian actress Vidya Balan did her role."
 }
    // {
  //     id: 3,
  //     name: "hello world",
  //     img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1280px-Sunflower_from_Silesia2.jpg'
  //   },
  //   {
  //   id: 4,
  //   name: "hello world",
  //   img:'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Sunflower_from_Silesia2.jpg/1280px-Sunflower_from_Silesia2.jpg'
  // },
   
  //  id:1,
//    name:"Kalpana Chawla",
//    img:"https://www.bing.com/th?id=OIP.LZagV2yOf-WSKCa2siqICQHaLL&w=200&h=200&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2"
//  },

//  {
//    id:2,
//    name:"Ritu Karidhal",
  ]
   return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
<Button>click here</Button>
{/* <Project1 data={data}/> */}
    <Proj2 data={data}/>
    </div>
   );
  
}

export default App;
   
