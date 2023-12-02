import ContentLoader from 'react-content-loader';

const Skeleton = props => (
  <ContentLoader
    speed={2}
    width={400}
    height={460}
    viewBox="0 0 400 460"
    backgroundColor="#d09292"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="-108" y="59" rx="2" ry="2" width="436" height="367" />
  </ContentLoader>
);

export default Skeleton;
