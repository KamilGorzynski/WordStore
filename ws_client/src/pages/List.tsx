/** @jsx jsx */
import { jsx } from '@emotion/core'
import styled from '@emotion/styled'
import { FunctionComponent, useEffect, useState } from 'react'
import Hero from '../containers/Hero'
import bookIcon from '../assets/list.png'
import config from '../config/config'
import WordCard from '../containers/WordCard'
import { WordObject } from '../types'
import axios from 'axios'
import { AxiosResponse, AxiosError } from 'axios'


const NoWordsDiv = styled.div`
  margin: 1rem auto;
  width: 100%;
  text-align: center;
`
const PageButtonDiv = styled.div`
  margin: 1rem auto;
  width: 15rem;
  display: flex;
`

const PageButton = styled.button`
  margin: 1rem;
  width: 10rem;
  height: 3rem;
  color: white;
  font-size: 1.5rem;
  background-color: rgb(30, 170, 93);
  border-radius: 1rem;
  cursor: pointer;
`


const List: FunctionComponent = () => {

  const [wordList, setWordList] = useState([])
  const [currentPage, setCurrentPage] = useState(`/words/?page=1`)
  const [previousPage, setPreviousPage] = useState('')
  const [nextPage, setNextPage] = useState('')

  const incrementPage = () => {
    if (nextPage) setCurrentPage(nextPage)
  }

  const decrementPage = () => {
    if (previousPage) setCurrentPage(previousPage)
  }

  useEffect(() => {
    const authRequest = axios.create({
      baseURL: 'http://localhost:8000',
      headers: {'Authorization': `Token ${localStorage.getItem('token')}`}
    });
    authRequest.get(currentPage)
        .then((response: AxiosResponse) => {
            setPreviousPage(response.data.previous)
            setNextPage(response.data.next)
            setWordList(response.data.results)
        }, (error: AxiosError) => {
          console.log(error)
        })
  }, [currentPage])

  return (
      <div>
        <Hero header={ config.list.header } paragraph={ config.list.paragraph } img={ bookIcon } />
        { wordList.length ? wordList.map( (word: WordObject, index: Number) => {
            return <WordCard
              id={ word.id }
              word={ word.word }
              definition= { word.definition }
              example= { word.example }
              user={ word.user }
              modulo={ Number(index) % 2 === 0 }
            />
          }) : <NoWordsDiv><h2>No words to display...</h2></NoWordsDiv>
        }
        <PageButtonDiv>
          <PageButton onClick={ decrementPage }>prev</PageButton>
          <PageButton onClick={ incrementPage }>next</PageButton>
        </PageButtonDiv>
        
      </div> 
  );
}

export default List;
