import { useEffect, useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';
import { ScrollUpButton } from './ScrollUpBtn.styled';

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
      <IoIosArrowUp size={55} fill="#fff" />
    </ScrollUpButton>
  );
};

export default ScrollUpBtn;
