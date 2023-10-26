import { services } from '../constants'
import Servcard from '../components/Servcard'

const Serv = () => {
  return (
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service)=> (
        <Servcard key={service.label} {...service} />
      ))}

    </section>
  )
}

export default Serv