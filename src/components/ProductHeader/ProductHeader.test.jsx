import { render, screen } from '@testing-library/react'
import ProductHeader from './ProductHeader'

describe('ProductHeader Component', () => {
  it('renders the component without crashing', () => {
    render(<ProductHeader />)
    expect(screen.getByText(/Hi, Mrs Michael/i)).toBeDefined()
    expect(screen.getByText(/Welcome back!/i)).toBeDefined()
    expect(screen.getByText(/Ours Products/i)).toBeDefined()
  })
})
