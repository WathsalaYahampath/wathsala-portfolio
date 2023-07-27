import React from 'react'
 import './Navbar.css';

const style = {
    main_div : {
        color: "black"
    }
}
export default function Navbar(props) {
    return (
        <div id='main_div'>
            <nav className="navbar navbar-expand-lg ">
                <div className="container-fluid " >
                    <a className="navbar-brand" href="#">{props.text}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Me</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Projects</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Music
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Vocals</a></li>
                                    <li><a className="dropdown-item" href="#">Melody</a></li>
                                    <li><a className="dropdown-item" href="#">Lyrics</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
