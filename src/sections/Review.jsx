import { reviews } from '../constants'
import Reviewcard from '../components/Reviewcard'
const Review = () => {
  return (
    <section className="max-container ">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        Testaments To <span className="text-coral-red"> Quality.</span>
      </h3>
      <p className="info-text mt-4 max-w-lg m-auto text-center">
        Hear genuine stories from our satisfied customers.
      </p>
      <div className="flex flex-1 justify-evenly mt-24 items-center max-lg:flex-col gap-14">

        {reviews.map((review)=> (
          <Reviewcard 
            key={review.customerName}
            imgURL={review.imgURL}
            customerName={review.customerName}
            rating={review.rating}
            feedback={review.feedback}
          />
        ))}

      </div>

    </section>
  )
}

export default Review