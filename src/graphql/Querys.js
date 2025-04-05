import { gql } from '@apollo/client'

export const GET_PRODUCTS = gql`
  query AllProducts {
    getAllProducts {
      id
      brand
      image
      price
    }
  }
`

export const GET_PRODUCT = gql`
  query GetProduct($id: ID!) {
    getProduct(id: $id) {
      brand
      abv
      origin
      image
      information
      style
      substyle
      skus {
        code
        name
        price
        stock
      }
    }
  }
`
