const Workshop = () => {
    return (
        <>
            <div className="workshopPage">
                <div className="workshopT"><h1 className="cartTitle workshop">Workshops</h1></div>
                <div className="workshopLine"></div>
                <div className="topSection">
                    <div className="textWorkshop">
                        <p style={{textAlign: 'justify', letterSpacing:'.5px', fontSize: '13px'}}>Our workshops are often a semi-private relationhip, which can be tailored to your requests. Its usually a gentle but still immersive learning experience in flour and how the art reflects our lives.Tomiiwo is often by your side crafting with you the sugar and flour till your work begins to reflect the stories you aim to tell - Birthdays, weddings, or simply just love stories   </p>
                    </div>
                    
                    <div className="firstImg">
                        <img src="/homepageCakes/WorkShopBackground.png" />
                        <p className="craftText">CRAFT</p>
                        <div className="slashAcross"></div>
                    </div>
                </div>
                <div className="secondImg">
                    <img src="/homepageCakes/BackgroundTiers.png"/>
                    <div className="slash"> <p className="studioText">
                        T <br />H<br />E<br /><br /> S<br />T<br />U<br />D<br />I<br />O
                    </p></div>
                
                </div>
            </div>
        </>
    );
}

export default Workshop;