
import PropTypes from "prop-types";

const MyInfo = ({ text, Image }) => {
  return (
    <div className="flex gap-4 items-center justify-start">
      <Image className="" />
      <p className="text-lg">{text}</p>
    </div>
  );
};

MyInfo.propTypes = {
  text: PropTypes.string.isRequired,
  Image: PropTypes.elementType.isRequired,  // a React component
};

export default MyInfo;