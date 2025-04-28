import { Link } from 'react-router-dom'

const FinalPage = () => {
    return (
        <>
            <Link to="/cart"><span className="back">←</span></Link>
            <div className="oops second">
                <h2>Lol:), Would you like us to deliver the cake pictures to you, cos there's no cakes or snacks. Just codes</h2>
                <p>Thank you for getting to the end though!</p>
            </div>
        </>
    );
}

export default FinalPage;