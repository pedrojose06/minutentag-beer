import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import DetailsFooter from './DetailsFooter'
import { vi } from 'vitest'

describe('DetailsFooter Component', () => {
  it('should render the icon', () => {
    render(<DetailsFooter />)
    const icon = screen.getByTestId('detail-footer-icon')
    expect(icon).toBeInTheDocument()
  })

  it('should render the button with correct text', () => {
    render(<DetailsFooter />)
    const button = screen.getByRole('button', { name: /add to cart/i })
    expect(button).toBeInTheDocument()
  })

  it('should call alert when button is clicked', () => {
    const alertMock = vi.spyOn(window, 'alert').mockImplementation(() => {})
    render(<DetailsFooter />)
    const button = screen.getByRole('button', { name: /add to cart/i })
    fireEvent.click(button)
    expect(alertMock).toHaveBeenCalledWith('Added to cart')
    alertMock.mockRestore()
  })
})
