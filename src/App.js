import React from 'react';
import './App.scss';
import Logo from './asset/img/profile-00.png';
import Food from './asset/img/food.gif'
import Munchbot01 from './asset/img/munchbot_01.gif';

function App() {
  return (
    <div>
      <section className="App">
        <img src={Logo} alt="logo" />
        <h1>Munchbot</h1>
        <h3>Let us offer you food choices! 🍔</h3>
      </section>
      <section className="description section-01">
        <div className="section-01-desc">
          <h2>Wondering about what to eat everyday?</h2>
          <h3>How about you leave that decision on Munchbot so you have more time to enjoy your meal.</h3>
        </div>
        <div>
          <img src={Munchbot01} alt="munchbot-01" />
        </div>
      </section>
      <section className="description section-02">
        <div>
          <img src={Food}/>
        </div>
        <div className="section-02-desc">
          <h2>Munchbot personalizes on three modes:</h2>
          <h3>Proximity • Budget • Dietary Compatibility</h3>
        </div>
      </section>
      <section className="closing">
        <h2>Stop worrying about what to eat and save your ⏱ and 💸 with Munchbot!</h2>
        <div>
          <img src={Logo} alt="logo" />
        </div>
        <footer>
          Created with ❤️ by Derick, Shubham, Renaise and Will.
        </footer>
      </section>
    </div>
  );
}

export default App;
