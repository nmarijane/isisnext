import Candidature from "./candidature";
import Feedback from "./feedback";
import Mission from "./mission";
import Experience from "./experience";
import Degree from "./degree";

type Employee = {
  title: string
  coverImage: string
  profilePicture: string
  availability: boolean
  about: string
  candidatures: Candidature[]
  feedbacks: Feedback[]
  missions: Mission[]
  experiences: Experience[]
  degrees: Degree[]
}

export default Employee
