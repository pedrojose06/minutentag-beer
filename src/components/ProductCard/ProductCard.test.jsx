import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'
import userEvent from '@testing-library/user-event'
import ProductCard from './ProductCard'

// Mock react-router-dom and include MemoryRouter
const mockNavigate = vi.fn()
vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom') // Import the actual module
  return {
    ...actual,
    useNavigate: () => mockNavigate, // Mock useNavigate
  }
})

describe('ProductCard Component', () => {
  const mockProduct = {
    id: 1,
    brand: 'Test Brand',
    image: '/test-image.jpg',
    price: 19.99,
  }

  const renderWithRouter = () => {
    const { MemoryRouter } = require('react-router-dom') // Use MemoryRouter from the actual module
    return render(
      <MemoryRouter>
        <ProductCard product={mockProduct} />
      </MemoryRouter>
    )
  }

  it('renders the product brand', () => {
    renderWithRouter()
    expect(screen.getByText(mockProduct.brand)).toBeDefined()
  })

  it('renders the product image with correct attributes', () => {
    renderWithRouter()
    const img = screen.getByAltText(mockProduct.brand)
    expect(img).toBeDefined()
    expect(img).toHaveAttribute('src', `/assets${mockProduct.image}`)
    expect(img).toHaveAttribute('width', '50')
    expect(img).toHaveAttribute('height', '100')
  })

  it('renders the product price formatted correctly', () => {
    renderWithRouter()
    expect(screen.getByText(`$${mockProduct.price.toFixed(2)}`)).toBeDefined()
  })

  it('navigates to the correct product page on click', async () => {
    renderWithRouter()
    const card = screen.getByRole('article')
    await userEvent.click(card)
    expect(mockNavigate).toHaveBeenCalledWith(`/products/${mockProduct.id}`)
  })

  it('renders the add icon', () => {
    renderWithRouter()
    expect(screen.getByTestId('add-icon')).toBeDefined()
  })
})
