import '@testing-library/jest-dom'
import { screen, render, fireEvent } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'
import SkuOptions from './SkuOptions'

describe('SkuOptions Component', () => {
  const mockSkus = [
    { code: '12345', name: 'Small', price: 1000, stock: 10 },
    { code: '67890', name: 'Large', price: 2000, stock: 5 },
  ]
  const mockSetActiveSku = vi.fn()
  const mockActiveSku = '12345'

  it('renders the list of SKUs', () => {
    render(
      <SkuOptions
        skus={mockSkus}
        setActiveSku={mockSetActiveSku}
        activeSku={mockActiveSku}
      />
    )

    expect(screen.getByText(/Size/i)).toBeDefined()

    mockSkus.forEach((sku) => {
      expect(screen.getAllByText(sku.name)[0]).toBeDefined()
    })
  })

  it('calls setActiveSku when an SKU is clicked', () => {
    render(
      <SkuOptions
        skus={mockSkus}
        setActiveSku={mockSetActiveSku}
        activeSku={mockActiveSku}
      />
    )

    const secondSku = screen.getAllByText(mockSkus[1].name)[0]
    fireEvent.click(secondSku)

    expect(mockSetActiveSku).toHaveBeenCalledWith(mockSkus[1].code)
  })

  it('highlights the active SKU', () => {
    render(
      <SkuOptions
        skus={mockSkus}
        setActiveSku={mockSetActiveSku}
        activeSku={mockActiveSku}
      />
    )

    const activeSkuElement = screen.getByText(mockSkus[0].name).parentElement

    screen.debug()
    expect(activeSkuElement).toHaveClass('sku-option--active')
  })
})
