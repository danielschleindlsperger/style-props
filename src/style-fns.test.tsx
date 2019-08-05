import React from 'react'
import { Padding, p, space } from './style-fns'
import { renderToString } from 'react-dom/server'

describe('<Padding />', () => {
  it('blub', () => {
    console.log(renderToString(<Padding />))
  })

  it('blub', () => {
    console.log(renderToString(<div css={[p(space._12)]} />))
  })
})
