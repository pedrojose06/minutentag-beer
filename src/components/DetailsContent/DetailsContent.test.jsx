import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import DetailsContent from './DetailsContent'

describe('DetailsContent Component', () => {
  const mockProduct = {
    brand: 'Test Brand',
    origin: 'Test Origin',
    abv: '5%',
    style: 'Lager',
    substyle: 'Pale Lager',
    information:
      'This is a test product description that is longer than 200 characters. '.repeat(
        3
      ),
    skus: [
      { code: 'SKU1', price: 500, stock: 10 },
      { code: 'SKU2', price: 1000, stock: 0 },
    ],
  }

  it('renders product details correctly', () => {
    render(<DetailsContent product={mockProduct} activeSku="SKU1" />)

    expect(screen.getByText('Test Brand')).toBeDefined()
    expect(screen.getByText('Origin: Test Origin')).toBeDefined()
    expect(screen.getByText('ABV:5%')).toBeDefined()
    expect(screen.getByText('Lager - Pale Lager')).toBeDefined()
    expect(screen.getByText('$5.00')).toBeDefined()
    expect(screen.getByText('Stock: 10')).toBeDefined()
  })

  it('handles price and stock for an inactive SKU', () => {
    render(<DetailsContent product={mockProduct} activeSku="SKU2" />)

    expect(screen.getByText('$10.00')).toBeDefined()
    expect(screen.getByText('Stock: 0')).toBeDefined()
  })

  it('renders full description if it is shorter than MAX_CHARACTERS', () => {
    const shortProduct = { ...mockProduct, information: 'Short description.' }
    render(<DetailsContent product={shortProduct} activeSku="SKU1" />)

    expect(screen.getByText('Short description.')).toBeDefined()
    expect(screen.queryByText('Read More')).not.toBeInTheDocument()
  })
})
