import { render } from '@redwoodjs/testing/web'

import HeroTitle from './HeroTitle'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('HeroTitle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<HeroTitle />)
    }).not.toThrow()
  })
})
