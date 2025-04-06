import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Loading from './Loading'

describe('Loading Component', () => {
  it('should render the loading spinner', () => {
    render(<Loading />)
    const spinner = screen.getByTestId('loading')
    expect(spinner).toBeDefined()
  })

  it('should have the correct class names', () => {
    render(<Loading />)
    const spinner = screen.getByTestId('loading').children[0]
    expect(spinner).toHaveClass('loading__spinner')
  })
})
