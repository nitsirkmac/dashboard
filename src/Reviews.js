import PosReviews from "./PosReviews"
import NegReviews from "./NegReviews"

const Reviews = () => {
    return (
        <div className="reviews">
            <h1>Reviews</h1>
            <h1>1,281</h1>
            <PosReviews />
            <NegReviews />
        </div>
    )
}

export default Reviews