
import '../styles/Projects.css'

import Project from './Project';

const Projects = () => {
  const projects = [
    {
      name: 'SwiftCart',
      description: 'SwiftCart is a cutting-edge ecommerce platform built on the full stack MERN (MongoDB, Express.js, React, Node.js) technologies. Offering a seamless shopping experience, SwiftCart features a sleek and user-friendly interface powered by React, ensuring responsiveness across all devices. With Node.js and Express.js handling the backend, SwiftCart processes orders swiftly and securely. Its MongoDB database efficiently stores and retrieves product information, while features like user authentication, product reviews, and a secure checkout process prioritize user satisfaction and security. SwiftCart caters to diverse shopping needs with its wide range of products, promising a convenient and secure online shopping experience for all.',
      image: '../../images/project1.jpg',
      link: 'https://github.com/Y1va/Ecommerce-MERN'
    },
    {
      name: 'Elevate',
      description: 'Elevate is a dynamic task and project management application designed to streamline productivity and collaboration within organizations. With its intuitive interface, Elevate empowers individuals and teams to effortlessly create, organize, prioritize, and track tasks with ease. The app features robust functionalities, including due dates for tasks and projects, ensuring timely completion of work. Elevate also boasts a live chat feature, enabling seamless communication among team members, fostering collaboration and enhancing efficiency. Built with a MySQL2 database, Express.js, and Bootstrap, Elevate offers a seamless and efficient user experience, making it an essential tool for modern businesses striving for productivity and success.',
      image: '../../images/project2.jpg',
      link: 'https://github.com/jayabaldwin/elevate'
    },
    {
      name: 'Movie Generator',
      description: 'Movie Generator is an innovative web application that revolutionizes movie recommendations. By leveraging JavaScript, HTML, and CSS, the app interacts with the OMDB API to retrieve movie information such as synopsis and year of release based on user input. Additionally, it utilizes the YouTube API to fetch movie trailers, enhancing the user experience with live previews. The technology stack includes VS Code for development, HTML for page structure, and JavaScript for dynamic content. GitHub facilitates collaborative development, while Bulma CSS, jQuery, and Font Awesome enhance the interface. The use of local storage ensures seamless storage and retrieval of saved movies, making Project 3 a game-changer in personalized movie recommendations.',
      image: '../../images/project3.gif',
      link: 'https://nuclearreid.github.io/Movie-Picker/'
    },
    {
      name: 'ChampionGuessr',
      description: 'ChampionGuessr is an engaging and interactive quiz game that challenges players knowledge of League of Legends Champions. Built with JavaScript and HTML, and styled with CSS, the game presents players with the names of League of Legends Champions and asks them to guess the names of their abilities. Players earn points for each correct answer, and their scores are saved for future reference. With its fun and educational gameplay, "ChampionGuessr" offers a unique gaming experience for fans of the popular game.',
      image: '../../images/project4.jpg',
      link: 'https://bjorn-ironsidee.github.io/ChampionGuessr/'
    }
  ];

  return (
    <section id="projects">
      <h1>Projects</h1>
      <div className="project-list">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
