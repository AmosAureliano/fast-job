import {
  Container,
  InfoPersonView,
  ListInfo,
  ItemListInfo,
  SkillsView,
  SkillContent,
  SkillProfile,
  MoreActionsView,
} from "../../styles/components/GridStudentItemStyle";

interface Skill {
  name: string;
}

interface StudentProps {
  name: string;
  age: number;
  course: string;
  institution: string;
  photo: string;
  phone: string;
  skills: Array<Skill>;
}

export default function GridStudentItem({
  name,
  age,
  course,
  institution,
  phone,
  photo,
  skills,
}: StudentProps) {
  return (
    <Container>
      <InfoPersonView>
        <img src="assets/imagemOK.png" alt={name} />

        <ListInfo>
          <ItemListInfo>
            <strong>
              {name}, {age}
            </strong>
          </ItemListInfo>
          <ItemListInfo>
            <strong>Curso: </strong>
            <span>{course}</span>
          </ItemListInfo>
          <ItemListInfo>
            <strong>Instituição: </strong>
            <span>{institution}</span>
          </ItemListInfo>
        </ListInfo>
      </InfoPersonView>

      <SkillsView>
        <p>Skills</p>

        <SkillContent>
          {skills.map((skill) => (
            <SkillProfile key={skill.name}>
              <span>{skill.name}</span>
            </SkillProfile>
          ))}
        </SkillContent>
      </SkillsView>

      <MoreActionsView>
        <button>
          <a href="/curriculum"><strong>Ver mais</strong></a>
        </button>
        <button>
          <strong>Contato agora</strong>
        </button>
      </MoreActionsView>
    </Container>
  );
}
