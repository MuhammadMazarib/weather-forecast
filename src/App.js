//import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Tempapp from './Tempapp';
import Threehour from './Threehour';
import Sixhour from './Sixhour'
import Nextday from './Nextday';


function App() {
 return(<div className='App'>


  <div className='Sb'>
    <Routes>
      <Route path='/' element={<Tempapp/>}/>
      <Route path='/threehour' element={<Threehour/>}/>
      <Route path='/sixhour' element={<Sixhour/>}/>
      <Route path='/nextday' element={<Nextday/>}/>

    </Routes>
    

  </div>
  
  
  
  </div>
  );
  }

export default App;
