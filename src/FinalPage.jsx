import { Link } from 'react-router-dom'

const FinalPage = () => {
    return (
        <>  
            <div className="finalPage">
                <Link to="/cart"><span className="back">←</span></Link>
                <div className="oops">
                    <h2>Lol:), Would you like us to deliver the cake pictures to you, cos there's no cakes or snacks. <br />Just codes</h2>
                    <p>Thank you for getting to the end though!</p>
                </div>
            </div>
        </>
    );
}

export default FinalPage;