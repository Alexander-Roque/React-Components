import ReactDOM from "react-dom/client";
import AppOne from "./apps/App-1";
import AppTwo from "./apps/App-2";
import "./index.css";

function Main(){
    return (
        <body>
                <h1 className="title">React Components</h1>
                <p className="text">Autor: Roque Rodriguez Jose Alexander</p>
            <section className="container">
                <article className="container-article">{AppOne()}</article>
                <article className="container-article">{AppTwo()}</article>
            </section>
        </body>
    )
}

ReactDOM.createRoot(document.getElementById("root")!).render(<Main />)