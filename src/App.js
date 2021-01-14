
import './App.css';
import { Card } from './components/card'
import { Footer } from './components/footer'
import { Jumbotron } from './components/Jumbotron';
import { Navbar } from './components/Navbar';

function App() {
    return (
        <>
            <Navbar title='Start Bootstrap' nav1='Home' nav2="About" nav3='Services' nav4='Contact' />,
            <Jumbotron title="A warm welcome!" buttonLabel="Call to action!" buttonUrl='#' description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque in risus id urna congue placerat sit amet vel nibh. Mauris non diam nec nisl pharetra lacinia. Duis id tincidunt diam. Ut iaculis diam est, ac lobortis lacus sagittis sed. Maecenas eu efficitur nunc. In at luctus lacus." />
            <div className="container">
                <div className="row">
                    <Card title="Card Title"
                        imageUrl="https://via.placeholder.com/500x325"
                        description="Lorem ipsum popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, ."
                        buttonUrl="https://es.wikipedia.org/wiki/Wikipedia:Portada"
                        buttonLabel="Find Out More!" />
                    <Card title="Card Title"
                        imageUrl="https://via.placeholder.com/500x325"
                        description="Lorem ipsum popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, ."
                        buttonUrl="https://es.wikipedia.org/wiki/Wikipedia:Portada"
                        buttonLabel="Find Out More!" />
                    <Card title="Card Title"
                        imageUrl="https://via.placeholder.com/500x325"
                        description="Lorem ipsum popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, ."
                        buttonUrl="https://es.wikipedia.org/wiki/Wikipedia:Portada"
                        buttonLabel="Find Out More!" />
                    <Card title="Card Title"
                        imageUrl="https://via.placeholder.com/500x325"
                        description="Lorem ipsum popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, ."
                        buttonUrl="https://es.wikipedia.org/wiki/Wikipedia:Portada"
                        buttonLabel="Find Out More!" />

                </div>
            </div>
            <Footer text="Copyright © your website 2021" />
        </>
    );

}
export default App;

