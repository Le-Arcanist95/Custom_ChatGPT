import './normalize.css';
import './App.css';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import defaultUserImg from './assets/defaultUserImg.jpg';
import chatGPTlogo from './assets/chatGPTlogo.jpg';
 
function App() {
  return (
    <div className="App">
      <aside className="sidemenu">
        <button className="sidemenu-button">
          <FontAwesomeIcon className="plus-icon" icon={faPlus} />
          <span> New Chat </span>
        </button>
      </aside>
      <main className="chat-container">
        <section className="chat--output-container">
          <div className="chat--output-message-container">
            <div className="center-message">
              <div className="chat--output-userImg">
                <img src={defaultUserImg} alt="user" />
              </div>
              <div className="chat--output-message"> This is the User </div>
            </div>
          </div>
          <div className="chat--output-message-container chatgpt">
            <div className="center-message">
              <div className="chat--output-userImg">
                <img src={chatGPTlogo} alt="user" />
              </div>
              <div className="chat--output-message"> This is the AI </div>
            </div>
          </div>
        </section>
        <section className="chat--input-container">
          <input className="chat--input" type="text" placeholder="Type a message..." />
        </section>
      </main>
    </div>
  );
}

export default App;
