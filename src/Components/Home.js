import './Home.css';
export function Home() {
    return (
      <div className="home-container">
        <div className="row p-3">
          <div className="col-6 personal-details">
            <h2>PERSONAL DETAILS</h2>
            <p><b>NAME:</b> KOTHA VENKATA SATYA PRANAY</p>
            <p><b>Nationality:</b> Indian</p>
            <p><b>State:</b> Andhra Pradesh</p>
            <p>
              <b>Languages Known:</b>
              <ul>
                <li>ENGLISH</li>
                <li>TELUGU</li>
              </ul>
            </p>
            <div className="about-me"> {/* Apply the CSS here */}
            <p>
              Passionate about coding and web development, I've tackled over 360 problems on LeetCode,
              as well as excelled on platforms like CodeChef and HackerRank.
            </p>
            <p>
              My daily life revolves around coding, driven by an insatiable hunger for learning.
              A quick learner, I exhibit strong leadership qualities, making me an ideal candidate to lead a team.
            </p>
            <p>
              My dedication to mastering new skills, combined with my coding expertise,
              positions me as a dynamic force in the world of technology and innovation.
            </p>
            <p>
              With an unyielding commitment to continuous growth, I'm ready to take on new challenges
              and inspire those around me.
            </p>
          </div>
          </div>
        </div>
      </div>
    );
  }
  