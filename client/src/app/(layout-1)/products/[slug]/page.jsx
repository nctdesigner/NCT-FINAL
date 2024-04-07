import { notFound } from "next/navigation"; // PAGE VIEW COMPONENT

import { ProductDetailsPageView } from "pages-sections/product-details/page-view"; // API FUNCTIONS

import api from "utils/__api__/products";
import { getFrequentlyBought, getRelatedProducts } from "utils/__api__/related-products";
export const metadata = {
  title: "Product Details - Bazaar Next.js E-commerce Template",
  description: `Bazaar is a React Next.js E-commerce template. Build SEO friendly Online store, delivery app and Multi vendor store`,
  authors: [{
    name: "UI-LIB",
    url: "https://ui-lib.com"
  }],
  keywords: ["e-commerce", "e-commerce template", "next.js", "react"]
};
export default async function ProductDetails({
  params
}) {
  try {
    const product = await api.getProduct(params.slug);
    const products = await api.getProducts();
    console.log({products})
    const relatedProducts = await getRelatedProducts();
    const frequentlyBought = await getFrequentlyBought();
    return <ProductDetailsPageView product={product} relatedProducts={products.data} frequentlyBought={frequentlyBought} />;
  } catch (error) {
    notFound();
  }
}