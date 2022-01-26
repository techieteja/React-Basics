const {useState} = React;

const Header = () =>{
    return (
        <h1>Header</h1>
    );
}

const Footer = () => {
    return (
        <h1>Footer</h1>
    );
}

const Content = () => {
    const [text, setText] = useState('hello');

    let  updateData = () =>{
        setText("Teja");
    }
    return (
        <div>
            <h1>Hello, {name}!</h1>
            <p>{text}</p>
            <button onClick={updateData}>Update</button>
        </div>

    );
}

const Home = () => {
    return (
        <div className="root">
            <Header />
            <Content name={"Teja"} />
            <Footer />
        </div>
    );
}

const App = () => {
    return (
        <Home />
    );
}

ReactDOM.render(<App />, document.querySelector("body"));