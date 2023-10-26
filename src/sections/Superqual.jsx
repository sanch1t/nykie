import Button from "../components/button"
import { shoe8 } from '../assets/images'
const Superqual = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
  
        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You With
          <span className="text-coral-red"> Unbeatable</span>
          <span className="text-coral-red"> Quality
          </span> 
          <br />
           
        </h2>
        <p className="mt-4 lg:max-w-lg info-text"> Ensuring premium comfort and style, our meticulously crafted footwear is designed to elevate your daily experiences, providing you with unmatched quality, innovation and a touch of elegance.</p>
        <p className="mt-6 lg:max-w-lg info-text"> Our dedication to detail and excellence ensures you leave home everyday satisfied.</p>

        <div className="mt-11">
          <Button label="Find Out More" />
        </div>
      </div>

      <div className="flex-1 flex justify-center items-center">
         <img 
          src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          
          className="object-contain"
        />      
      </div>


    </section>
  )
}

export default Superqual