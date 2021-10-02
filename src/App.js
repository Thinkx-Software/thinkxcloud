import logo from './logo.svg';
import './App.css';
import Routing from './routes/Routing';
import "@material-tailwind/react/tailwind.css";
// Font Awesome Style Sheet
//import '@fortawesome/fontawesome-free/css/all.min.css';



function App() {
  return (
    <div className="bg-gray-100">
      <Routing/>
    </div>
  );
}

export default App;
