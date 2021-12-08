import { keyframes, styled } from '../../stitches.config';

const CirclesWrapper = styled('div', {
  display: 'flex',
  maxWidth: '20rem',
  height: '20rem',
  position: 'absolute',
  top: '-3rem',
  right: '40%',
  '@media (min-width: 600px)': {
    transform: 'scale(2)',
  },
});

interface CircleStyleProps {
  style?: React.CSSProperties;
}

const Circle = ({ style }: CircleStyleProps) => (
  <CircleStyled style={style}>
    <svg
      width="564"
      height="564"
      viewBox="0 0 564 564"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1156_1269"
        // style="mask-type:alpha"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="564"
        height="564"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M282 451.2C375.447 451.2 451.2 375.447 451.2 282C451.2 188.553 375.447 112.8 282 112.8C188.553 112.8 112.8 188.553 112.8 282C112.8 375.447 188.553 451.2 282 451.2ZM282 564C437.744 564 564 437.744 564 282C564 126.256 437.744 0 282 0C126.256 0 0 126.256 0 282C0 437.744 126.256 564 282 564Z"
          // The color of this mask sets the opacity of each circle
          fill="#BBB"
        />
      </mask>
      <g mask="url(#mask0_1156_1269)">
        <path
          id="circle-id"
          d="M-24 -24H588V286V596H-24V-24Z"
          // This is where the magic happens
          fill="var(--colors-circlesBg)"
        />
      </g>
      <defs>
        <linearGradient
          id="circles-gradient"
          x1="100%"
          y1="0"
          x2="0%"
          y2="0"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#9863DB" />
          <stop offset="1" stopColor="#50A5CA" />
        </linearGradient>
      </defs>
    </svg>
  </CircleStyled>
);

const scaleUp = keyframes({
  '0%': { transform: 'translate(0, 1rem)' },
  '50%': { transform: 'translate(.2rem, .5rem)' },
  '100%': { transform: 'translate(0, 1rem)' },
});

const CircleStyled = styled('div', {
  position: 'absolute',
  left: '1rem',
  height: '20rem',
  animation: `${scaleUp} 10000ms`,
  animationIterationCount: 'infinite',
  svg: {
    height: '100%',
    width: '100%',
  },
});

export const Circles = () => (
  <CirclesWrapper>
    <Circle style={{ left: '5rem', width: '14rem', animationDelay: '0' }} />
    <Circle style={{ left: '0', width: '4rem', animationDelay: '-2000ms' }} />
    <Circle
      style={{
        left: '1.5rem',
        width: '2rem',
        top: '5rem',
        animationDelay: '-5000ms',
      }}
    />
    <Circle
      style={{
        left: '5rem',
        width: '1.7rem',
        top: '7rem',
        animationDelay: '-7000ms',
      }}
    />
  </CirclesWrapper>
);
