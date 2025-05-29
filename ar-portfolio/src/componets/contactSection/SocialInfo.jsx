import PropTypes from "prop-types";

function SocialInfo({ Icon, link }) {
  return (
    <div className="text-2xl h-12 w-12 border border-orange text-orange hover:text-darkCyan hover:border-darkCyan rounded-full p-3 flex items-center justify-center">
      <a href={link} className="cursor-pointer">
        <Icon />
      </a>
    </div>
  );
}

SocialInfo.propTypes = {
  Icon: PropTypes.elementType.isRequired,  // the icon component
  link: PropTypes.string.isRequired,       // the URL string
};

export default SocialInfo;
