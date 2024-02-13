import { render } from '@redwoodjs/testing/web'

import WebAppsDev from './WebAppsDev'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('WebAppsDev', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<WebAppsDev />)
    }).not.toThrow()
  })
})
