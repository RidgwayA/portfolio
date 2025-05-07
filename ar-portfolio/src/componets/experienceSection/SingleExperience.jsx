import PropTypes from "prop-types";

function SingleExperience({ experience }) {
  return (
    <div className="md:h-full md:w-full sm:w-full border-2 border-orange border-dashed rounded-2xl mt-12 p-4">
      <p className="font-bold text-cyan text-2xl">{experience.job}</p>
      <p className="text-orange font-semibold">{experience.company}</p>
      <p className="text-cyan mb-2">{experience.date}</p>
      <ul className="list-disc mt-4 pl-4 text-white flex flex-col items-start">
        {experience.responsibilities.map((responsibility, index) => (
          <li key={index} className="text-lg">
            {responsibility}
          </li>
        ))}
      </ul>
    </div>
  );
}

SingleExperience.propTypes = {
  experience: PropTypes.shape({
    job: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default SingleExperience;
