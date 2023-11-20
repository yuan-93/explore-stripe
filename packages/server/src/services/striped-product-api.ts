/**
 * This service is built based on the Stripe API
 * https://stripe.com/docs/api/products
 */
import stripe from "./stripe";

export async function getProduct(id: string) {
  try {
    const product = await stripe.products.retrieve(id);
    return product;
  } catch (error) {
    throw error;
  }
}

export async function listProducts(props: { limit?: number; cursor: string }) {
  try {
    const products = await stripe.products.list({
      limit: props.limit,
      starting_after: props.cursor,
    });
    return products;
  } catch (error) {
    throw error;
  }
}

export async function createProduct(props: {
  name: string;
  description?: string;
  imageUrls?: string[]; // max 8
}) {
  try {
    const imageUrls = props.imageUrls?.slice(0, 8);
    const product = await stripe.products.create({
      name: props.name,
      description: props.description,
      images: imageUrls,
    });
    return product;
  } catch (error) {
    throw error;
  }
}

export async function updateProduct(props: {
  id: string;
  name: string;
  description: string;
  imageUrls: string[]; // max 8
}) {
  try {
    const imageUrls = props.imageUrls.slice(0, 8);
    await stripe.products.update(props.id, {
      name: props.name,
      description: props.description,
      images: imageUrls,
    });
  } catch (error) {
    throw error;
  }
}

export async function deleteProduct(props: { id: string }) {
  try {
    await stripe.products.del(props.id);
  } catch (error) {
    throw error;
  }
}
