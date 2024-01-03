import { Item } from 'components/MovieItem/MovieItem.styled';
import { MoviesContentLoader } from './MoviesListSkeleton.styled';

const Skeleton = () => {
  return (
    <Item>
      <MoviesContentLoader
        speed={2}
        backgroundColor="#8f8f8f"
        foregroundColor="#ebeaea"
      >
        {window.innerWidth >= 768 ? (
          <>
            <rect x="30" y="380" rx="0" ry="0" width="150" height="26" />
            <rect
              x="4"
              y="4"
              rx="0"
              ry="0"
              width="200"
              height="300"
              className="poster"
            />
            <rect x="0" y="330" rx="0" ry="0" width="250" height="29" />
          </>
        ) : (
          <>
            <rect x="50" y="380" rx="0" ry="0" width="150" height="26" />
            <rect
              x="4"
              y="4"
              rx="0"
              ry="0"
              width="250"
              height="350"
              className="poster"
            />
            <rect x="0" y="430" rx="0" ry="0" width="250" height="29" />
          </>
        )}
      </MoviesContentLoader>
    </Item>
  );
};

export default Skeleton;
