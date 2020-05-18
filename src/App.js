import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
    return (
        <div className='App'>
            <header className='App-header'>
                <img src={logo} className='App-logo' alt='logo' />
                <p>github actions 마스터 브랜치 업데이트 테스트</p>
                <a
                    className='App-link'
                    href='https://reactjs.org'
                    target='_blank'
                    rel='noopener noreferrer'
                >
                    ReactJs
                </a>
            </header>
        </div>
    );
}

export default App;
