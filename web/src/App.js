import logo from './logo.svg';
import './App.css';
import Chat from './components/Chat';
import Chats from './components/Chats';

function App() {
  return (
    <div className="App row h-100 bg-white flex-md-row">
        <div className="col-4 col-md-2 border-end pt-5 px-0 bg-light"><Chats></Chats></div>        
        <div class="col p-0 h-100 bg-light"><Chat></Chat></div>
      
    </div>
  );
}

export default App;
