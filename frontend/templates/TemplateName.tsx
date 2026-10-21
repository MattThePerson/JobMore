import * as S from "./TemplateName.styled";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface Props {}

/* TemplateName */
// eslint-disable-next-line no-empty-pattern
const TemplateName = ({}: Props) => {
  return (
    <S.Base data-testid="TemplateName">
      <h2>TemplateName Component</h2>
    </S.Base>
  );
};

export default TemplateName;
