import {useState, useEffect, useRef} from 'react';
import {v4 as uuidv4} from 'uuid'
import './App.css';

const App = () => {
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const pageEnd = useRef();






  const API_KEY = process.env.REACT_APP_MY_API_KEY
  const URL = `https://api.unsplash.com/photos/?client_id=${API_KEY}&page=${pageNumber}&per_page=20`;
  
  useEffect(() => {


    const fetchData = async () => {
      try {
        const res = await fetch(URL)
        const result = await res.json()
      

        result.map(item => item.id = uuidv4())

        setPhotos((prevPhotos) => [...prevPhotos, ...result])
        setLoading(false)
        
      } catch (error) {
          setLoading(false)
          setError(error)
      }
    }
    fetchData();
  }, [URL])

  const loadMore = () => {
    setPageNumber((prevPhotos) => prevPhotos + 1)
  }
  useEffect(() => {
    const option = {
      root: null,
      rooMargin: '0px',
      threshold: .9
    }

    const CBFunc = ([target]) => {
      if(target.isIntersecting) loadMore();
    }

    if (!loading) {
      const observer = new IntersectionObserver(CBFunc,option)
      observer.observe(pageEnd.current)

      return () => {
        if(observer & pageEnd)
        observer.unobserve(pageEnd)
      }
    }

  }, [loading])

  if (loading) {
    return <p>Loading ...</p>
  }
  if (error) {
    return <p>Error</p>
  }

  const photoList = photos.map(photo => 
    <section className='photos'>
      <img src={photo.urls.thumb} alt={photo.urls.alt_description} />
      <p>{photo.user.first_name} {photo.user.last_name}</p>
     
    </section>
  )

  return (
    <main>
      {photoList} 
      <section className='wow'></section>
      <footer ref={pageEnd}>
       
     </footer>
     
    </main>
  );
}

export default App;

