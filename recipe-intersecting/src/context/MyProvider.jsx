import {useRef,useState} from 'react'
import useFetch from '../hooks/useFetch'
import MyContext from './MyContext'

const MyProvider = ({children}) => {
  
    const [searchInput, setSearchInput] = useState('')
    const search = useRef('')
    const MY_ID = process.env.REACT_APP_MY_ID
    const API_KEY = process.env.REACT_APP_MY_KEY
    const [url, setUrl] = useState(`https://api.edamam.com/api/recipes/v2?type=public&q=${search.current}&app_id=${MY_ID}&app_key=${API_KEY}`)
    const inputRef = useRef()
    let URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${search.current}&app_id=${MY_ID}&app_key=${API_KEY}`;
    const data = useFetch(url)
    

    const changeHandler = (e) => {
        setSearchInput(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        search.current = searchInput
        setSearchInput('')
        URL = `https://api.edamam.com/api/recipes/v2?type=public&q=${search.current}&app_id=${MY_ID}&app_key=${API_KEY}`
        setUrl(URL)
        inputRef.current.focus()

    }


    const handleNext = () => {
        setUrl(data.next)
    }

  return (
    <MyContext.Provider value={{
      data,
      searchInput,
      inputRef,
      changeHandler,
      submitHandler,
      handleNext,
    }}
    
    >
        {children}
    </MyContext.Provider>
  )
}

export default MyProvider