import {Container, Row, Col} from 'react-bootstrap';
import profileData from './data'

function Title(props) {
  return (
    <header className="bg-light py-3">
      <Container className='footer'>
        <Row className="align-items-center">
          <Col xs={12} md={4} className="text-center">
            <img
              src={profileData.profilePicUrl}
              alt="Profile"
              className="img-fluid"
              style={{
              maxWidth: '100%', // Default size for larger screens
              maxHeight: '80%', // Default size for larger screens
              width: '50%', // Adjust as needed for smaller screens
              height: '30%', // Adjust as needed for smaller screens
              border: '5px solid'
              }}
            />
          </Col>
          <Col xs={12} md={4} className="text-center text-md-left">
            <h1>{profileData.title}</h1>
            <h3 className="text-muted" >{profileData.subtitle}</h3>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Title;