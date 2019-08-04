import React from 'react'
import { Box } from './box'
import { renderToString } from 'react-dom/server'

describe('<Box />', () => {
  it('no as prop', () => {
    console.log(renderToString(<div onSubmit={() => alert('blub')} />))
    // console.log(renderToString(<Box onSubmit={() => alert('blub')} />))
    console.log(renderToString(<Box as="time" dateTime={'blub'} />))
    console.log(renderToString(<Box as="a" href="/blub" />))
  })

  it('input element', () => {
    console.log(renderToString(<Box as="input" onSubmit={() => alert('blub')} />))
  })

  it('style prop', () => {
    console.log(renderToString(<Box p={4} />))
  })
})
