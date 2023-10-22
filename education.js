import {Container, Row, Col} from 'react-bootstrap';
import profileData from './data'

function Education() {
    const educationHistory=profileData.education.map((edu, index) => (
        <div key={index}>
            <b>{edu.institution}</b>
            <div className="profile_text">
                <p>
                    {edu.degree}, {edu.location}, {edu.date}
                </p>
            </div>
        </div>
    ));

    return (
        <Container className='profilefooter'>
        <br></br>
        <Row className="align-items-center">
          <Col xs={12} md={12} className="text-center text-md-left">
            <b>{profileData.education_title}</b>
            {educationHistory}
          </Col>
        </Row>
      </Container>
    )
};

export default Education;