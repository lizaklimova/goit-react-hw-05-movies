import { scroller } from 'react-scroll';

const smoothScroll = target => {
  if (!target) return;
  else
    setTimeout(
      () =>
        scroller.scrollTo(target, {
          duration: 1000,
          delay: 0,
          smooth: true,
          offset: -50,
        }),
      300
    );
};

export default smoothScroll;
