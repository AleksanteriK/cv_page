import {Container} from 'react-bootstrap';
import Title from './header';
import Profile from './profile.js'
import Employment from './workexp.js'
import Education from './education.js'

function App() {
  return (
    <Container className="app-container">
      <Title />
      <Profile />
      <Employment/>
      <Education/>
    </Container>
  );
}

export default App;