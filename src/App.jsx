import React from 'react'
import Conditional1 from './components/Conditional1'
import Conditional2 from './components/Conditional2'
import Conditional3 from './components/Conditional3'
import Props_ex from './components/Props_ex'
import UseState_ex1 from './components/UseState_ex1'
import UseState_ex2 from './components/UseState_ex2'
import UseState_ex3 from './components/UseState_ex3'
import ListRendering from './components/ListRendering'
import FormHandling from './components/FormHandling'
import UseEffect_ex1 from './components/UseEffect_ex1'
import FetchMultiPost from './components/FetchMultiPost'
import FetchSinglePost from './components/FetchSinglePost'
import UseRed_ex from './components/UseRed_ex'

const App = () => {
  return (
    <div>
      <h1>Hello, React!</h1>
      <Conditional1 isLoggedIn={true} />
      <Conditional2 isLoggedIn={false} />
      <Conditional3 isLoggedIn={true} />
      <Props_ex id={1} name="Nimesh" />
      <UseState_ex1 />
      <UseState_ex2 />
      <ListRendering />
      <UseState_ex3 />
      <FormHandling />
      <UseEffect_ex1 />
      <FetchMultiPost />
      <FetchSinglePost />
      <UseRed_ex />
    </div>
  )
}

export default App