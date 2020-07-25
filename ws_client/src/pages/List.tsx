/** @jsx jsx */
import { jsx } from '@emotion/core'
import { FunctionComponent, useEffect, useState } from 'react'
import Hero from '../containers/Hero'
import bookIcon from '../assets/list.png'
import config from '../config/config'
import WordCard from '../containers/WordCard'
import { WordObject } from '../types'
import { authRequest } from '../axios'
import { AxiosResponse, AxiosError } from 'axios'


const List: FunctionComponent = () => {

  const [wordList, setWordList] = useState([])

  useEffect(() => {
    authRequest.get('/words')
        .then((response: AxiosResponse) => {
            setWordList(response.data.results)
        }, (error: AxiosError) => {
          console.log(error)
        })
  }, [])

  return (
      <div>
        <Hero header={ config.list.header } paragraph={ config.list.paragraph } img={ bookIcon } />
        
        { 
          wordList.map( (word: WordObject) => {
            return <WordCard
              id={ word.id }
              word={ word.word }
              definition= {word.definition }
              example= {word.example }
              user= {word.user }
            />
          }) 
        }
      </div> 
  );
}

export default List;
