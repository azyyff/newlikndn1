import './App.css';
import React from 'react';

function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-left ">
            <img
              src="https://cdn.worldvectorlogo.com/logos/linkedin-icon-2.svg"
              alt="LinkedIn"
              className="logo-img"
            />
            <span className="logo-text">LinkedIn</span>
          </div>
          <div className="navbar-center">
            <a href="#jobs"><i className="fa-solid fa-suitcase"></i> Jobs</a>
            <a href="#games"><i className="fa-solid fa-puzzle-piece"></i> Games</a>
            <a href="#app"><i className="fa-solid fa-laptop"></i> Get the App</a>
            <a href="#learning"><i className="fa-solid fa-chalkboard"></i> Learning</a>
            <a href="#top"><i className="fa-solid fa-rocket"></i> Top Content</a>
          </div>
          <div className="navbar-right">
            <span className="join-now">Join Now</span>
            <button className="custom-button">Sign in</button>
          </div>
        </div>
      </nav>

      {/* Main Section */}
      <div className="main-section">
        {/* Left Side Login Card */}
        <div className="left-form">
          <h2 className="form-title">With you every step of your career</h2>
          <form>
            <button type="button" className="oauth-button google-btn" style={{borderRadius:20}}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="Google"
                className="oauth-icon"
              />
              Continue with Google
            </button>
            <button type="button" className="oauth-button microsoft-btn" style={{borderRadius:20}}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732221.png"
                alt="Microsoft"
                className="oauth-icon"
              />
              Continue with Microsoft
            </button>
            <button type="button" className="oauth-button email-btn"style={{borderRadius:20}}>
              <img
                src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                alt="Email"
                className="oauth-icon"
              />
              Continue with Email
            </button>
          </form>
          <div className="form-note">
            <p>
              By clicking Continue to join or sign in, you agree to LinkedIn’s <a href="#">User Agreement</a>, <a href="#">Privacy Policy</a>, and <a href="#">Cookie Policy</a>.
            </p>
          </div>
          <div className="form-footer">
            New to LinkedIn? <span className="join-link">Join now</span>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="right-image">
          <img
            src="https://media.licdn.com/media//AAYAAgSrAAgAAQAAAAAAAGM6w-NyPk-_SVikYiCJ6V3Z-Q.png"
            alt="Banner" style={{width:900}}
          />
        </div>
      </div>
    </>
  );
}

export default App;
