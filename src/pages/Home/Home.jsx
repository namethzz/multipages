import "./home.css";
import Student from "../../assets/stdempimg.jpg";

function Home() {
  return (
    <div className="home-container">
      <div className="profile-header">
        <h1>Nameth Wongmonkol</h1>
        <h2>Student</h2>
      </div>
      <div className="profile-content">
        <div className="profile-picture">
          <img src={Student} alt="Student" />
        </div>
        <div className="profile-info">
          <section className="about-me">
            <h3>About Me</h3>
            <p>
              I'm a passionate learner and love to explore new skills. I enjoy playing the guitar, gaming, and drawing.
            </p>
          </section>
          <section className="education">
            <h3>Education</h3>
            <p>Bangsaphan Wittaya School</p>
          </section>
          <section className="hobbies">
            <h3>Hobbies</h3>
            <ul>
              <li>Playing Guitar</li>
              <li>Gaming</li>
              <li>Drawing</li>
            </ul>
          </section>
        </div>
      </div>
      <div className="profile-contact">
        <section className="contact-info">
          <h3>Contact</h3>
          <p>Email: nameth.won@spumal.net</p>
          <p>Phone: +66-1234-56789</p>
        </section>
      </div>
    </div>
  );
}

export default Home;
