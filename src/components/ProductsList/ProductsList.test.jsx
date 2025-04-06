import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { MemoryRouter } from 'react-router-dom'
import ProductsList from './ProductsList'

describe('ProductsList Component', () => {
  it('renders without crashing', () => {
    render(<ProductsList products={[]} />)
    const productsListElement = screen.getByTestId('products-list')
    expect(productsListElement).toBeDefined()
  })

  it('renders the correct number of ProductCard components', () => {
    const mockProducts = [
      { id: 1, name: 'Product 1', price: 4800 },
      { id: 2, name: 'Product 2', price: 5200 },
    ]
    render(
      <MemoryRouter>
        <ProductsList products={mockProducts} />
      </MemoryRouter>
    )
    const productCards = screen.getAllByRole('article')
    expect(productCards).toHaveLength(mockProducts.length)
  })

  it('renders no ProductCard components when products array is empty', () => {
    render(<ProductsList products={[]} />)
    const productCards = screen.queryAllByRole('article')
    expect(productCards).toHaveLength(0)
  })
})
