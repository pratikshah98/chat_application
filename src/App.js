import {ChatEngine} from 'react-chat-engine'
import './App.css';
import ChatFeed from './components/ChatFeed';
import LoginForm from './components/loginForm'
const App = () => {
     if(!localStorage.getItem('username')) return <LoginForm />
    return(
        <ChatEngine
            height="100vh"
            projectID="24bc0a8f-560a-439a-86c5-5f5631af106d"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed ={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
        />
    )
}

export default App;