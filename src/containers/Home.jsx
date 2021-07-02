import React from 'react'
import { connect } from 'react-redux'
import Search from '../routes/Search'
import Categories from '../routes/Categories'
import Carousel from '../routes/Carousel'
import CarouselItem from '../routes/CarouselItem'
import Header from '../routes/Header'
import '../styles/app.scss'

const Home = ({ myList, trends, originals, search }) => {
  return (
    <>
      <Header />
      <Search isHome/>
        {search?.length > 0 && (
            <Categories title="Search">
              <Carousel>
                {search.map(item => (
                  <CarouselItem key={item.id} {...item}/>
                ))}
              </Carousel>
            </Categories>
          )
        }
        {myList?.length > 0 &&
        <Categories title='Mi Lista'>
          <Carousel>
            {myList?.map(item =>
              <CarouselItem 
                key={item.id} 
                {...item} 
                isList
              />
            )}            
          </Carousel>
        </Categories>
      }

      <Categories title='Tendencias'>
        <Carousel>
          {trends?.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}            
        </Carousel>
      </Categories>

      <Categories title='Originales de Platzi Video'>
        <Carousel>
          {originals?.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}            
        </Carousel>
      </Categories>
    </>
  )
}

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    search: state.search
  }
}

export default connect(mapStateToProps, null)(Home)