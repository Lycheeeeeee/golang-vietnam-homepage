import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import data from '@/data/news'
import NewsCard from '@/components/NewsCard'
import Head from './shared/Head'

const Container = styled.section`
  ${tw`py-20`};
`
class News extends Component {
  render() {
    return (
      <Container id="news">
        <div className="container px-gutter mx-auto">
          <Head title="News" link="/news" />

          {data.slice(0, 3).map(d => (
            <NewsCard {...d} key={d.id} />
          ))}
        </div>
      </Container>
    )
  }
}

export default News