import PropTypes from 'prop-types'
import React from 'react'
import about from '../images/about.jpg'
import awsLogo from '../images/aws-certified-logo.jpg'
import reactLogo from '../images/react-logo.png'
import sail from '../images/sail.jpg'
import roventuresLogo from '../images/roventures-logo.svg'
import resume from '../assets/resume.pdf'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={
          this.props.timeout
            ? { display: 'flex', fontSize: '1.2rem' }
            : { display: 'none' }
        }
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={about} alt="Motorbike in rice paddies" />
          </span>
          <p>
            <h3 style={{ display: 'inline' }}>Rohan</h3> is a software developer
            with a disposition for travel. He was born in Spartanburg, South
            Carolina with parents that have traveled the world.
          </p>
          <p>
            After graduating college from Florida State University with a degree
            in Multinational Business, Rohan moved to California - where the
            real adventure began.
          </p>
          <p>
            He learned how to sail, taught himself front end engineering, and
            took a six month trip around the world.
          </p>
          <p>
            These events have shaped Rohan's perspective and led to a life of
            sailing, coding, learning, meditating, and traveling.
          </p>
          {close}
        </article>

        <article
          id="sail"
          className={`${this.props.article === 'sail' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Sail</h2>
          <span className="image main">
            <img src={sail} alt="" />
          </span>
          <p>
            Rohan is an ASA certified sailing instructor that has skippered
            international bareboat charters in the BVIs, Croatia, and
            Seychelles.
          </p>
          <p>
            He is able to learn, train, and take frequent trips to Catalina as
            an active member of{' '}
            <a href="https://www.fairwind.org/" target="_blank">
              <strong>Fairwind Yacht Club</strong>
            </a>.
          </p>
          {close}
        </article>

        <article
          id="tech"
          className={`${this.props.article === 'tech' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Tech</h2>
          <span className="image main flex">
            <img src={awsLogo} alt="Aws Certified" className="double" />
            <img src={reactLogo} alt="Aws Certified" className="double" />
          </span>
          <h3>Lead React Developer - AWS Certified</h3>
          <p>
            Rohan specializes in React and AWS, building web apps that handle
            complex data, forms, authentication, and digital streaming. Rohan
            has led front end teams at companies such as Disney and Beachbody to
            build UX focused mobile responsive applications.
          </p>
          <p>
            This static web-app was built using React with Gatsby, deployed on
            S3 with CloudFront and Travis CI.
          </p>
          {close}
        </article>

        <article
          id="resume"
          className={`${this.props.article === 'resume' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Resume</h2>
          <iframe src={resume} name="Resume" width="100%" height="700px" />
          {close}
        </article>

        <article
          id="connect"
          className={`${this.props.article === 'connect' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Connect</h2>
          {/*<form method="post" action="#">*/}
          {/*<div className="field half first">*/}
          {/*<label htmlFor="name">Name</label>*/}
          {/*<input type="text" name="name" id="name" />*/}
          {/*</div>*/}
          {/*<div className="field half">*/}
          {/*<label htmlFor="email">Email</label>*/}
          {/*<input type="text" name="email" id="email" />*/}
          {/*</div>*/}
          {/*<div className="field">*/}
          {/*<label htmlFor="message">Message</label>*/}
          {/*<textarea name="message" id="message" rows="4"></textarea>*/}
          {/*</div>*/}
          {/*<ul className="actions">*/}
          {/*<li>*/}
          {/*<input type="submit" value="Send Message" className="special" />*/}
          {/*</li>*/}
          {/*<li>*/}
          {/*<input type="reset" value="Reset" />*/}
          {/*</li>*/}
          {/*</ul>*/}
          {/*</form>*/}
          <ul className="icons flex">
            <li>
              <a
                href="https://www.linkedin.com/in/rohandamani/"
                className="icon fa-linkedin fa-2x large"
                target="_blank"
              >
                <span className="label">LinkedIn</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/rohandamani/"
                className="icon fa-github fa-2x large"
                target="_blank"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/roventures/"
                className="icon fa-instagram fa-2x large"
                target="_blank"
              >
                <span className="label">Instagram</span>
              </a>
            </li>
          </ul>
          {close}
        </article>

        <article
          id="roventures"
          className={`${this.props.article === 'roventures' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <a href="http://roventures.tv/" target="_blank">
            <span className="image main">
              <img src={roventuresLogo} alt="Roventures" height="150px" />
            </span>
          </a>
          <p>
            <a href="http://roventures.tv/" target="_blank">
              Roventures
            </a>{' '}
            is a platform to share my knowledge and experience with photos and
            videos from traveling. Next time, I'll bring my own sailboat and
            some real cameras!
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
