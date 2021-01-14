import './App.css';
import {Jumbotron} from './components/Jumbotron';
import {Navbar} from './components/Navbar';


function App() {
  return (
    <>
    <Navbar title='Start Bootstrap' nav1='Home' nav2="About" nav3='Services' nav4='Contact'/>,
    <Jumbotron title="A warm welcome!" buttonLabel="Call to action!" buttonUrl='#' description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in risus id urna congue placerat sit amet vel nibh. Mauris non diam nec nisl pharetra lacinia. Duis id tincidunt diam. Ut iaculis diam est, ac lobortis lacus sagittis sed. Maecenas eu efficitur nunc. In at luctus lacus."/>
    </>
  );
}

export default App;

