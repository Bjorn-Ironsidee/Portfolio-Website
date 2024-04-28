
const Project = ({ project }) => {
  const { name, description, image, link } = project;

  const handleClick = () => {
    window.open(link, '_blank');
  };

  return (
    <div className="project" onClick={handleClick} style={{ cursor: 'pointer' }}>
      <h2>{name}</h2>
      <img src={image} alt={name} />
      <p>{description}</p>
    </div>
  );
};

export default Project;