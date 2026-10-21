import * as S from "./JobApplicationCard.styled.ts";
import { JobApplication } from "../../../../shared/types";

interface Props {
  data: JobApplication;
}

/* JobApplicationCard */
const JobApplicationCard = ({ data }: Props) => {
  return (
    <S.Base data-testid="JobApplicationCard">
      <div>{data.company}</div>
      <div>{data.position}</div>
      <div>{data.status}</div>
      <div>{data.dateAdded}</div>
    </S.Base>
  );
};

export default JobApplicationCard;
