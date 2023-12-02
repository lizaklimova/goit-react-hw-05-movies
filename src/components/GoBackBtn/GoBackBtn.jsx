import { Link } from 'react-router-dom';

const GoBackBtn = ({ path }) => {
  return <Link to={path}>Go back</Link>;
};

export default GoBackBtn;
