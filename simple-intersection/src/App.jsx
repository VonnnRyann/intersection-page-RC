import {useRef, useEffect} from 'react';
import './App.css';

const App = () => {
    const secRef = useRef()
    const anotherRef = useRef()
    
    useEffect(() => {
      const option = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3  
      }

      const handleIntersection = (entries) => {
        entries.map( entry => entry.isIntersecting && console.log(entry))
      }

      const observer = new IntersectionObserver(handleIntersection, option)

      observer.observe(secRef.current)
      observer.observe(anotherRef.current)

    }, [])

  return (
    <>
    <main>
     <h1>Intersection Observer</h1>
    </main>

    <section ref={secRef}>
      <h1>Section</h1>
    </section>
    <section className='wow' ref={anotherRef}>
      <h1></h1>
    </section>
    </>
  );
}

export default App;

