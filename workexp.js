import {Container, Row, Col, Card} from 'react-bootstrap';
import profileData from './data'

function Employment() {
    const workExperience=profileData.work_history.map((experience, index) => (
        <div key={index}>
          <b>{experience.company}</b>
            <div className="profile_text">
                <p>
                    {experience.title}, {experience.location}, {experience.start_date} -{' '}
                    {experience.end_date}
                </p>
          </div>
        </div>
    ));

    const languageSkills=profileData.languages.map((lang, index) => (
        <div key={index}>
            <div className="small_skills_title">
                <p>
                    {lang.language}
                </p>
            </div>
            <div className="skills_details_section">
                <p>
                    {lang.proficiency}
                </p>
            </div>
        </div>
    ));

    const skillslist=profileData.skills.map((skill, index) => (
        <li key={index}>{skill}</li>      
    ));

    return (
        <Container className='profilefooter'>
        <Row className="align-items-center">
          <Col xs={12} md={7} className="text-center text-md-left">
            <b>{profileData.work_experience_title}</b>
            {workExperience}
          </Col>
          <Col xs={12} md={5} className="text-center">
            <Card className="details_card">
                <div className="details_title">
                    <b>{profileData.skills_card_title}</b>
                </div>    
                    <div className="general_skills_details_section">
                        {skillslist}
                    </div>
                        {languageSkills}
                    <div className="small_skills_title">
                        <p>{profileData.hobbies_title}</p>
                    </div>
                    <div className="skills_details_section">
                        <p>{profileData.hobbies}</p>
                    </div>
            </Card>
            </Col>
        </Row>
      </Container>
    )
};

export default Employment;