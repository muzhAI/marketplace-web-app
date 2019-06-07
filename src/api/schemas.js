import { schema } from 'normalizr';

export const user = new schema.Entity('users');

export const ProductWithOwner = new schema.Entity('products', { owner: user });

export const ProductList = [ProductWithOwner];

export const Product = new schema.Entity('products');

export const sellerList = { list: [Product] };
