import React, {useState, useEffect} from 'react'
import Header from '../routes/Header'
import Search from '../routes/Search'
import Categories from '../routes/Categories'
import Carousel from '../routes/Carousel'
import CarouselItem from '../routes/CarouselItem'
import Footer from '../routes/Footer'
import useInitialState from '../hooks/useInitialState'
import '../styles/app.scss'

const API = 'http://localhost:3000/initialState'

const App = () => {
  const initialState = useInitialState(API)
  return (
    <div className="App">
      <Header />
      <Search />
        {initialState.mylist?.length > 0 &&
        <Categories title='Mi Lista'>
          <Carousel>
            {initialState.mylist?.map(item =>
              <CarouselItem key={item.id} {...item} />
            )}            
          </Carousel>
        </Categories>
      }

      <Categories title='Tendencias'>
        <Carousel>
          {initialState.trends?.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}            
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {initialState.originals?.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}            
        </Carousel>
      </Categories>

      <Footer />
    </div>
  )
}

export default App