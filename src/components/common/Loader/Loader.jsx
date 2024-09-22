import { Puff } from 'react-loader-spinner';
import { StyledWrp } from "./Loader.styled";

const Loader = () => {
  return (
    <StyledWrp>
      <Puff
        height={'100'}
        width={'100'}
        radius={2}
        color="#fff"
        ariaLabel="puff-loading"
        wrapperStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        visible={true}
      />
    </StyledWrp>
  );
};

export default Loader;
