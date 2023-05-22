import React from 'react';
import WelcomePage from './pages/WelcomePage';
import MessagePage from './pages/MessagePage';

function App() {
  const [page, setPage] = React.useState('welcome');

  //Global url variable for connection with backend
  const API_URL = 'http://localhost:9000/api/v1';
  
  const handleLeaveMessageClick = () => {
    setPage('message');
  };

  return (
    <div className="App">
      {page === 'welcome' ? (
        <WelcomePage API_URL={API_URL} onLeaveMessageClick={handleLeaveMessageClick}/>
      ) : (
        <MessagePage API_URL={API_URL}/>
      )}
     
    </div>
  );
}

export default App;