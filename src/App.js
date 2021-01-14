
import './App.css';
import { Card } from './components/card'
import { Footer } from './components/footer'

function App() {
    return (
        <>
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
