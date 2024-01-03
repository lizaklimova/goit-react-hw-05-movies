import { useLocation } from 'react-router-dom';
import { TbFaceIdError } from 'react-icons/tb';
import {
  NotFoundWrapper,
  NotFoundMsg,
  GoMainPageLink,
} from './NotFound.styled';

const NotFound = () => {
  const { pathname } = useLocation();

  return (
    <NotFoundWrapper>
      <NotFoundMsg>
        The page {pathname} doesn't exist!
        <TbFaceIdError size={70} />
      </NotFoundMsg>
      <GoMainPageLink to={'/'}>Return to the Main Page</GoMainPageLink>
    </NotFoundWrapper>
  );
};
export default NotFound;
