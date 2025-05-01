import { useMediaQuery } from "react-responsive";

const About = () => {

  const isLargeScreen = useMediaQuery({ query: "(min-width: 720px)" });

  return (
    <>
    {isLargeScreen ? (
      <div className="aboutPage">
        
        <h1 className="cartTitle about">About</h1>
        <div className="aboutLine"></div>

        <div className="imgandText">
          <div className="weddingBack">
            <img src="/homepageCakes/WeddingBacground.png" />
          </div>
          <div className="aboutText">
            <p style={{textAlign: 'justify', fontSize:'14px'}}>Tomiiwo Oke is a renowned baker,sugar flower artist and instructor with a degree in mathematics. She has a peculiar interest in wedding cakes which always presents the metaphor of love and passion. Ofcourse, she's also trying to make a s hit load of money. She likes dogs and lives in Osogbo</p>
          </div>
        </div>

        <div className="aboutBox"></div>
      </div>
    ) : (
      <div className="about">
          
        <h1 className="cartTitle">About</h1>
        <div className="line"></div>

        <div className="imgandText">
          <div className="weddingBack">
            <img src="/homepageCakes/WeddingBacground.png" />
          </div>
          <div className="aboutText">
            <p style={{textAlign: 'justify'}}>Tomiiwo Oke is a renowned baker,sugar flower artist and instructor with a degree in mathematics. She has a peculiar interest in wedding cakes which always presents the metaphor of love and passion. Ofcourse, she's also trying to make a s hit load of money. She likes dogs and lives in Osogbo</p>
          </div>
        </div>

        <div className="aboutBox"></div>
      </div>
    )}
    </>
  );
}

export default About;