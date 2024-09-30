import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'


const about = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos esse recusandae quos ducimus quia ipsam dicta temporibus at odio eveniet!
    </Header>
    
    <section className='about__story'>
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="Out Story Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi odit nostrum in, itaque necessitatibus velit dolore minus sunt quas perspiciatis optio, quia hic numquam consectetur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorum harum voluptates similique quos magnam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit?
          </p>
        </div>
      </div>
    </section>

    <section className='about__vision'>
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi odit nostrum in, itaque necessitatibus velit dolore minus sunt quas perspiciatis optio, quia hic numquam consectetur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorum harum voluptates similique quos magnam!
          </p>
        </div>
        <div className="about__section-image">
          <img src={VisionImage} alt="Our Vision Image" />
        </div>
      </div>
    </section>

    <section className='about__mission'>
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="Out Mission Image" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi odit nostrum in, itaque necessitatibus velit dolore minus sunt quas perspiciatis optio, quia hic numquam consectetur?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorum harum voluptates similique quos magnam!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, fugit?
          </p>
        </div>
      </div>
    </section>
    
    </>
  )
}

export default about