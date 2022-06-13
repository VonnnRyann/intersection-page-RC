import {useContext} from 'react'
import MyContext from '../context/MyContext'
import Card from './Card'
import {v4 as uuidv4} from 'uuid'

const ContentContainer = () => {

    const {data} = useContext(MyContext)

    if (data.loading) {
      return <p>Loading ...</p>
    }
    if (data.error) {
      return <p>{data.error}</p>
    }

    const recipeList = data.result.length > 0 ? data.result.map(recipe => <Card key={uuidv4()} recipe={recipe.recipe}/>) : (<h2>Please Try Again</h2>)

  return (
    <section>{recipeList}</section>
  )
}

export default ContentContainer