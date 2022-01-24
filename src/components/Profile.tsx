import { Container, MainData, MoreData, Picture ,Data, Button} from "../../styles/components/ProfileStyles";

interface Skill {
  name: string;
}

interface Education {
  name: string;
  institution: string;
}

interface Courses {
  name: string;
  ch: string;
}

interface ProfileData{
  name: string;
  photo: string;
  phone: string;
  email: string;
  adress: string;
  objective: string;
  education: Array<Education>;
  skills: Array<Skill>;
  courses: Array<Courses>;
}

export default function Profile({
  name,
  photo,
  phone,
  email,
  adress,
  objective,
  education,
  skills,
  courses
  }:ProfileData
){
  return(
      <Container>
        <MainData>
          <Picture> 
            <img src={photo} alt={name}/>
          </Picture>
          <Data>
            <h2>{name}</h2>
            <h2>{phone}</h2>
            <h2>{email}</h2>
            <h2>{adress}</h2>
          </Data>
        </MainData>
        <MoreData>
          <h3>Objetivo</h3>
            <p>{objective}</p>
          <h3>Formação</h3>
            <ul>
            {education.map((education) => (
            <li>
              <p>{education.name} - {education.institution}</p>
            </li>
          ))}
            </ul>
          <h3>Habilidades</h3>
            {skills.map((skill) => (
              <p>{skill.name}</p>
            ))}
        
          <h3>Informações adicionais</h3>
          <ul>
            {courses.map((course) => (
            <li>
              <p>{course.name} <br/> {course.ch}</p>
            </li>
            ))}
          </ul>
        </MoreData>
        <Button>BAIXAR CURRÍCULO</Button>
      </Container>
  );
}