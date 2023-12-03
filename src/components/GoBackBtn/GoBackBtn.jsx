import { FaArrowLeftLong } from 'react-icons/fa6';
import { Container } from 'components/App/App.styled';
import { GoBackLink } from './GoBackBtn.styled';

const GoBackBtn = ({ path }) => {
  return (
    <Container>
      <GoBackLink to={path}>
        <FaArrowLeftLong />
        Go back
      </GoBackLink>
    </Container>
  );
};

export default GoBackBtn;
