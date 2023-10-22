import {Container, Row, Col, Card} from 'react-bootstrap';
import profileData from './data'

function Profile(props) {

  return (
      <Container className='profilefooter'>
        <br></br>
        <Row className="align-items-center">
          <Col xs={12} md={7} className="text-center text-md-left">
            <b xs={12} md={4} className="text-center">{profileData.profile_title}</b>
            <div className="profile_text">
              <p>{profileData.profile_text}</p>
            </div>
          </Col>
          <Col xs={12} md={5} className="text-center">
            <Card className="details_card">
              <div className="details_title">
              <b>{profileData.details_title}</b>
              </div>
              <div className="details_section">
                <p>{profileData.street_address}</p>
                <p>{profileData.postal}</p>
                <p>{profileData.city}</p>
                <p>{profileData.phone}</p>
                <p>{profileData.email}</p>
              </div>
              <div className="small_title">
                <p>{profileData.nationality_title}</p>
              </div>
              <div className="details_section">
                <p>{profileData.nationality}</p>
              </div>
              <div className="small_title">
                <p>{profileData.driving_title}</p>
              </div>
              <div className="details_section">
                <p>{profileData.drivinglicense}</p>
              </div>
              <div className="small_title">
                <p>{profileData.birth_title}</p>
              </div>
              <div className="details_section">
                <p>{profileData.birthdate}</p>
                <p>{profileData.birthplace}</p>
              <p>
                <a
                  href="https://github.com/AleksanteriK"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
              <p>
                <a
                  href="https://www.linkedin.com/in/aleksanteri-koivisto-b0172222a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
  );
}

export default Profile;