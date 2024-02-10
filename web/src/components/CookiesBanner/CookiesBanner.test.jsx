import { render } from '@redwoodjs/testing/web'

import CookiesBanner from './CookiesBanner'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('CookiesBanner', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<CookiesBanner />)
    }).not.toThrow()
  })
})
