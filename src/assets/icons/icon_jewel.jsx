const Jewel = () => {
  return (
    <svg
      width='24'
      height='28'
      viewBox='0 0 24 28'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g filter='url(#filter0_d_453_2474)'>
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M12 6L17.5 13.8741L12 21.7205L6.5 13.8741L12 6ZM7.70385 13.8731L12 20.002L16.2961 13.8731L12 7.72248L7.70385 13.8731Z'
          fill='url(#paint0_linear_453_2474)'
        />
      </g>
      <defs>
        <filter
          id='filter0_d_453_2474'
          x='0.5'
          y='0'
          width='23'
          height='27.7207'
          filterUnits='userSpaceOnUse'
          color-interpolation-filters='sRGB'
        >
          <feFlood flood-opacity='0' result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            type='matrix'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
            result='hardAlpha'
          />
          <feOffset />
          <feGaussianBlur stdDeviation='3' />
          <feComposite in2='hardAlpha' operator='out' />
          <feColorMatrix
            type='matrix'
            values='0 0 0 0 1 0 0 0 0 0.666667 0 0 0 0 0.666667 0 0 0 1 0'
          />
          <feBlend
            mode='normal'
            in2='BackgroundImageFix'
            result='effect1_dropShadow_453_2474'
          />
          <feBlend
            mode='normal'
            in='SourceGraphic'
            in2='effect1_dropShadow_453_2474'
            result='shape'
          />
        </filter>
        <linearGradient
          id='paint0_linear_453_2474'
          x1='12'
          y1='6'
          x2='12'
          y2='21.7205'
          gradientUnits='userSpaceOnUse'
        >
          <stop stop-color='#FF8282' />
          <stop offset='1' stop-color='#F96969' />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Jewel;
