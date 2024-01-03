import { FullWidthContentLoader } from './SliderSkeleton.styled';

const SliderSkeleton = () => {
  return (
    <FullWidthContentLoader
      speed={2}
      height={500}
      backgroundColor="#8f8f8f"
      foregroundColor="#ebeaea"
    >
      <rect x="4" y="4" rx="0" ry="0" height="500" />
    </FullWidthContentLoader>
  );
};

export default SliderSkeleton;
