import { type SchemaTypeDefinition } from 'sanity'
import product from './schemaTypes/product'
import category from './schemaTypes/category'
import image from './schemaTypes/image'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    product,
    category,
    image
  ],
}
