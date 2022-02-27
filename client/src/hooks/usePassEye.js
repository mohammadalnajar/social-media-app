import useToggle from './useToggle';

const usePassEye = () => {
  const [passShowEye, togglePassShowEye] = useToggle({});
  const [passHideEye, togglePassHideEye] = useToggle({ initialState: true });
  const clickEye = () => {
    togglePassShowEye();
    togglePassHideEye();
  };

  return { passShowEye, passHideEye, clickEye };
};

export default usePassEye;
