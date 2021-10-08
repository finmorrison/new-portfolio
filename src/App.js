import './App.css';
import "tailwindcss/tailwind.css"
import { Navbar } from './components/navbar.jsx'


function App() {
  return (
    <div className="App bg-primary">
      <header className="navbar">
        <div className='flex justify-between'>
          <h1 className='text-secondary text-4xl'>Findlay<br/>Morrison</h1>
          <Navbar />
        </div>
      </header>
    </div>
  );
}

export default App;
