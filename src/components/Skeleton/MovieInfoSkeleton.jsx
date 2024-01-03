import { InfoContentLoader } from './MovieInfoSkeleton.styled';

const InfoSkeleton = () => {
  return (
    <InfoContentLoader
      speed={2}
      height={600}
      backgroundColor="#8f8f8f"
      foregroundColor="#ebeaea"
    >
      <rect x="4" y="4" rx="0" ry="0" height="500" />
    </InfoContentLoader>
  );
};

export default InfoSkeleton;
