import { FaArrowUpLong } from 'react-icons/fa6';
import { ScrollUpButton } from './ScrollUpBtn.styled';
import { useEffect, useState } from 'react';

const ScrollUpBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ScrollUpButton
      onClick={scrollToTop}
      style={{ display: isVisible ? 'block' : 'none' }}
    >
      <FaArrowUpLong size={35} fill="#fff" />
    </ScrollUpButton>
  );
};

export default ScrollUpBtn;
