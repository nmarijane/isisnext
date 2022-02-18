import Candidature from "./candidature";
import Feedback from "./feedback";
import Mission from "./mission";

type Employee = {
  title: string
  coverImage: string
  profilePicture: string
  availability: boolean
  about: string
  candidatures: Candidature[]
  feedbacks: Feedback[]
  missions: Mission[]
}

export default Employee
