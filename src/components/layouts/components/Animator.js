import React from 'react';

const Animator = ({
  children,
  data_aos,
  data_aos_duration,
  data_aos_delay,
  data_aos_easing,
}) => {
  return (
    <div
      data-aos={data_aos || 'fade-up'}
      data-aos-duration={data_aos_duration}
      data-aos-delay={data_aos_delay}
      data-aos-easing={data_aos_easing}
    >
      {children}
    </div>
  );
};

export default Animator;
