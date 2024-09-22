const breakpoints = [320, 390, 760, 1440];

const [smallMobile, mobile, tablet, desktop] = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`
);

const mq = {
  smallMobile,
  mobile,
  tablet,
  desktop,
};

export default mq;
