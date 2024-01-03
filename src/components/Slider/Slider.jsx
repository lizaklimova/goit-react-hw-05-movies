import { useState, useEffect } from 'react';
import { IoPlay } from 'react-icons/io5';
import {
  SliderContainer,
  SliderWrap,
  SliderList,
  SliderItem,
  SliderItemDiv,
  LeftArrowIcon,
  RightArrowIcon,
  SliderInfo,
  CategorySpan,
  SliderTitle,
  ReleaseWrap,
  SliderVoteWrap,
  SliderIcon,
  SliderVote,
  SliderWatchBtn,
} from './Slider.styled';

const Slider = ({ trendings }) => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {}, []);

  const handleLeftClick = () => {
    setOffset(prev => {
      const newOffset = prev + 100;

      return Math.min(newOffset, 0);
    });
  };

  const handleRightClick = () => {
    setOffset(prev => {
      const newOffset = prev - 100;
      const maxOffset = -(100 * 19);

      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <SliderContainer>
      <LeftArrowIcon
        onClick={handleLeftClick}
        style={{ cursor: offset === 0 ? 'not-allowed' : 'pointer' }}
      />
      <SliderWrap>
        <SliderList style={{ transform: `translateX(${offset}%)` }}>
          {trendings.map(
            ({ id, title, vote_average, backdrop_path, release_date }) => (
              <SliderItem key={id}>
                <SliderItemDiv
                  $bg={`https://image.tmdb.org/t/p/w1280${backdrop_path}`}
                >
                  <SliderInfo>
                    <ReleaseWrap>
                      <CategorySpan> {release_date.slice(0, 4)}</CategorySpan>
                    </ReleaseWrap>

                    <SliderTitle>{title}</SliderTitle>

                    <SliderVoteWrap>
                      <SliderIcon />
                      <SliderVote>{vote_average.toFixed(2)}</SliderVote>
                    </SliderVoteWrap>
                    <SliderWatchBtn to={`/movies/${id}`}>
                      <IoPlay />
                      Watch
                    </SliderWatchBtn>
                  </SliderInfo>
                </SliderItemDiv>
              </SliderItem>
            )
          )}
        </SliderList>
      </SliderWrap>

      <RightArrowIcon
        onClick={handleRightClick}
        style={{ cursor: offset === -1900 ? 'not-allowed' : 'pointer' }}
      />
    </SliderContainer>
  );
};

export default Slider;
