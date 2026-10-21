import { Link } from "react-router-dom";
import * as S from "./LoginPage.styled";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}

/* LoginPage */
// eslint-disable-next-line no-empty-pattern
const LoginPage = ({}: Props) => {
  return (
    <S.Base data-testid="LoginPage">
      <Link to="/">home</Link>
    </S.Base>
  );
};

export default LoginPage;
