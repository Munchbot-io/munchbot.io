import React from 'react';
import './App.scss';
import Logo from './asset/img/profile-00.png';
import Food from './asset/img/food.gif'

function App() {
  return (
    <div>
      <section className="App">
        <article className="header-01">
          <h1>Munchbot</h1>
          <img src={Logo} alt="logo" />
        </article>
        <article className="header-02">
          <img src={Food}/>
        </article>
      </section>
      <section className="description section-01">
        <h2>Wondering about what to eat everyday?</h2>
        <h3>How about you leave that decision on Munchbot so you have more time to enjoy your meal.</h3>
      </section>
      <section className="description section-02">
        <h2>Munchbot personalizes on three modes:</h2>
        <h3>Proximity • Budget • Dietary Compatibility</h3>
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
