import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import SkuOption from './SkuOption'

describe('SkuOption Component', () => {
  const mockSetActiveSku = vi.fn()
  const mockSku = { code: '123', name: 'Test SKU' }

  it('renders the SKU name', () => {
    render(
      <SkuOption sku={mockSku} setActiveSku={mockSetActiveSku} activeSku="" />
    )
    expect(screen.getByText('Test SKU')).toBeDefined()
  })

  it('applies active class when activeSku matches sku code', () => {
    render(
      <SkuOption
        sku={mockSku}
        setActiveSku={mockSetActiveSku}
        activeSku="123"
      />
    )
    const skuOption = screen.getByText('Test SKU').parentElement
    expect(skuOption).toHaveClass('sku-option--active')
  })

  it('does not apply active class when activeSku does not match sku code', () => {
    render(
      <SkuOption
        sku={mockSku}
        setActiveSku={mockSetActiveSku}
        activeSku="456"
      />
    )
    const skuOption = screen.getByText('Test SKU').parentElement
    expect(skuOption).not.toHaveClass('sku-option--active')
  })

  it('calls setActiveSku with the correct SKU code when clicked', () => {
    render(
      <SkuOption sku={mockSku} setActiveSku={mockSetActiveSku} activeSku="" />
    )
    const skuOption = screen.getByText('Test SKU').parentElement
    fireEvent.click(skuOption)
    expect(mockSetActiveSku).toHaveBeenCalledWith('123')
  })
})
