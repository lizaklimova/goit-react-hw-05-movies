import { RotatingLines } from 'react-loader-spinner';
import { LoaderBackdrop } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderBackdrop>
      <RotatingLines />
    </LoaderBackdrop>
  );
};
export default Loader;
