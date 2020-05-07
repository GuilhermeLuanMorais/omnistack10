import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
   <div id="app">
     <aside>
      <string>Cadastrar</string>
      <form>
        <div class="input-block">
          <label htmlFor="Usuário do Github"></label>
          <input name="github_username" id="github_username" required />
        </div>
      
        <div class="input-block">
          <label htmlFor="techs"></label>
          <input name="techs" id="techs" required />
        </div>

        <div className="input-group">
          <div class="input-block">
            <label htmlFor="latitude"></label>
            <input name="latitude" id="latitude" required />
          </div>

          <div class="input-block">
            <label htmlFor="longitude"></label>
            <input name="longitude" id="longitude" required />
          </div>
        </div>
        
      </form>
     </aside>

     <main>
      <ul>
        <li className="dev-item">
          <header>
            <img src=""></img>
            <div className="user-info">
              <strong>Gagazo</strong>
              <span>ReactJS, React native, Node.js</span>
            </div>
          </header>
          <p>CTO na </p>
          <a href="">Acessar perfil no github</a>
        </li>
      </ul>
     </main>
   </div>
  );
}

export default App;