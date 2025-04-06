import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import DetailsHeader from './DetailsHeader'
import { vi } from 'vitest'

describe('DetailsHeader Component', () => {
  const mockProduct = {
    image: '/beer.png',
    brand: 'Test Brand',
  }

  it('renders the component with product details', () => {
    render(<DetailsHeader product={mockProduct} />)

    expect(screen.getByText('Details')).toBeInTheDocument()
    expect(screen.getByAltText(mockProduct.brand)).toBeInTheDocument()
    expect(screen.getByAltText(mockProduct.brand)).toHaveAttribute(
      'src',
      `/assets${mockProduct.image}`
    )
  })

  it('navigates back when the back icon is clicked', async () => {
    const user = userEvent.setup()
    const mockBack = vi
      .spyOn(window.history, 'back')
      .mockImplementation(() => {})

    render(<DetailsHeader product={mockProduct} />)

    const backIcon = screen.getByTestId('back-icon')
    await user.click(backIcon)

    expect(mockBack).toHaveBeenCalled()

    mockBack.mockRestore()
  })

  it('renders the ellipsis icon', () => {
    render(<DetailsHeader product={mockProduct} />)

    const ellipsisIcon = screen.getByRole('img', { hidden: true })
    expect(ellipsisIcon).toBeInTheDocument()
  })
})
