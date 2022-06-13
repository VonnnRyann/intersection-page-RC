import {useEffect, useContext} from 'react'
import MyContext from '../context/MyContext'

const Form = () => {
  const {
    changeHandler,
    submitHandler,
    inputRef,
    searchInput} = useContext(MyContext)

    useEffect(() => {
      inputRef.current.focus();
    }, [inputRef])

  return (
    <form className='app'>
      <input 
        type='text'
        placeholder='Please Type Here'
        ref={inputRef}
        value={searchInput}
        onChange={changeHandler}
      />
    <button onClick={submitHandler}>Search</button>
    </form>
  )
}

export default Form