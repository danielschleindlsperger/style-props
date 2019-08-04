import React from 'react'
import { css, cx } from 'emotion'

type Space = 2 | 4 | 8 | 12 | 16 | 24 | 32 | 48 | 64 | 96 | 128 | 256 | 512

type SpaceProps = {
  p?: Space
  px?: Space
  py?: Space
}

const withSpacingProps = ({ p, px, py }: SpaceProps) => {
  if (p) return css({ padding: p })
  if (px) return css({ padding: [0, px, 0, px] })
  if (py) return css({ padding: [0, py, 0, py] })
}

type BoxProps<As extends keyof React.ReactHTML> = JSX.IntrinsicElements[As] & {
  as?: As
} & SpaceProps

export function Box<ElementType extends keyof React.ReactHTML | undefined>(
  props: BoxProps<ElementType extends undefined ? 'div' : ElementType>,
): JSX.Element {
  const { as = 'div', className, ...rest } = props
  const styles = css([withSpacingProps(rest)])
  return React.createElement(as, { ...rest, className: cx(styles, className) })
}
