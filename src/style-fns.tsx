import React from 'react'
import { css } from '@emotion/core'

// type SetMap<T extends string | number | symbol> = { [K in T]: K }

type Space = 2 | 4 | 8 | 12 | 16 | 24 | 32 | 48 | 64 | 96 | 128 | 256 | 512

type SpaceProps = {
  p?: Space
  px?: Space
  py?: Space
}

type Theme = {
  space: {
    [k: string]: Space
  }
}

const theme: Theme = {
  space: {
    _2: 2,
    _4: 4,
    _8: 8,
    _12: 12,
    _16: 16,
    _24: 24,
    _32: 32,
    _48: 48,
    _64: 64,
    _96: 96,
    _128: 128,
    _256: 256,
    _512: 512,
  },
}

const createSpaceFns = (theme: Theme) => {
  const p = (p: Space) => css({ padding: theme.space[p] })
  const px = (px: Space) => css({ padding: [0, theme.space[px], 0, theme.space[px]] })
  const py = (py: Space) => css({ padding: [0, theme.space[py], 0, theme.space[py]] })
  return {
    p,
    px,
    py,
  }
}

const { p, px, py } = createSpaceFns(theme)

export const Padding = () => <div css={[p(theme.space._32)]}>Hi!</div>

export const space = theme.space

export { p, px, py }
