import {useContext} from 'react'
import MyContext from '../context/MyContext'

const Footer = () => {
  const context = useContext(MyContext)
  const {data} = context
  return (
    <>
    {data.next && <footer className='foot'>Vonn Ryann Cruz</footer>}

{/*     {data.next && <footer className='foot'>Vonn Ryann Cruz</footer>}
 */}  </>
  )
}

export default Footer