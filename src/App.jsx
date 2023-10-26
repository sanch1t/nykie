import {Hero, Popprod, Superqual, Serv, Specoff, Review, Subscribe, Footer} from  './sections/index'
import Nav from './components/Nav';


const App = () => (
  <main className="relative">
    <Nav/>
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className="padding">
      <Popprod/>
    </section>
    <section className="padding">
      <Superqual/>
    </section>
    <section className="padding-x py-10">
      <Serv/>
    </section>
    <section className="padding">
      <Specoff/>
    </section>
    <section className="bg-blue-100 padding">
      <Review/>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe/>
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
    </section>
  </main>

);

export default App;