'use client';

import { useSwiper } from 'swiper/react';
import { PiCaretLeftBold, PiCaretRightBold } from 'react-icons/pi';

type Props = {
  containerStyles: string;
  btnStyles: string;
  iconStyles: string;
};

const WorkSliderBtns: React.FunctionComponent<Props> = ({
  containerStyles,
  btnStyles,
  iconStyles,
}) => {
  const swiper = useSwiper();

  const slidePrev = () => {
    if (!swiper.isBeginning) {
      swiper.slidePrev();
    }
  };

  const slideNext = () => {
    if (!swiper.isEnd) {
      swiper.slideNext();
    }
  };

  return (
    <div className={containerStyles}>
      <button
        className={btnStyles}
        onClick={slidePrev}
        disabled={swiper.isBeginning}
      >
        <PiCaretLeftBold className={iconStyles} />
      </button>
      <button className={btnStyles} onClick={slideNext} disabled={swiper.isEnd}>
        <PiCaretRightBold className={iconStyles} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;
