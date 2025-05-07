import PropTypes from "prop-types";

function SingleProject({ project }) {
  if (!project) return null;

  const { name, type, status, description, image, link } = project;

  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      <div className="w-[250px] md:w-[250px]">
        <img
          src={image}
          alt={name}
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h4 className="text-orange text-2xl font-bold mb-2">{name}</h4>
        <p className="text-gray-400 text-sm mb-1">
          {type} • {status}
        </p>
        <p className="text-white text-base mb-4">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan font-bold hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  );
}

SingleProject.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default SingleProject;
