import Lottie from "react-lottie";

const LottieAnimation = ({ data, height, width }) => {
  const defaultOptions = {
    animationData: data,
    autoplay: true,
    loop: true,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return <Lottie options={defaultOptions} height={height} width={width} />;
};

export default LottieAnimation;
