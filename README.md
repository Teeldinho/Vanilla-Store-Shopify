# Shopify Product Section

This project builds upon a previous solution that demonstrated how to develop a reusable, customizable UI component system using plain vanilla JavaScript, HTML, and Tailwind CSS. You can find the previous project [here](https://github.com/Teeldinho/Vanilla-Store). That project aimed to create a customizable, composable design system that could be tweaked for multiple use cases and clientele.

In [this](https://td-vanilla-store.myshopify.com/) Shopify project, we leveraged Shopify's capabilities and metafields to enhance product displays. We started with the Shopify Dawn theme and incorporated Tailwind CSS for styling.

![Hero Products](media/vs-hero-2.png)

## Introduction

We used metafields for various attributes such as ratings, reviews count, and labels. The label metafield is the most accurate to use, while ratings and reviews count are interdependent and managed carefully.

Our approach involves creating reusable `snippets` that render specific parts of our components. These snippets can be easily reused across different `sections` of our Shopify store, promoting consistency and ease of maintenance.

## Helpers

### Metafields

We utilized Shopify metafields to enhance our product displays:

- **Label**: Used to display custom labels like "Best Seller".
- **Rating**: Stores the product rating.
- **Reviews Count**: Stores the number of reviews for the product.

### Utility Snippets

Our approach involves creating reusable snippets that encapsulate specific parts of the product display logic. These snippets can be integrated into various sections of the store, ensuring a consistent and modular design.

## Components

### Card Component

The "Card" component is the foundation of our product display system. It is composed of several subcomponents that can be reused and rearranged to create different layouts:

- "card-header": Displays the header section of the card.
- "card-content": The main content area of the card.
- "card-title": Displays the title within the card content.
- "card-description": For additional descriptive text.
- "card-footer": For footer content, typically actions or summary.
- "card-image": Displays images within the card.

### Badge Component

The "Badge" component is used to highlight labels or discounts on products. It supports different variants like "primary" and "secondary" to provide stylistic differentiation. This ensures consistency across the application while allowing contextual customization.

### Product List Component

The "ProductList" component manages the display of product cards. Upon hovering on a product card, we display a secondary image of the product to provide more context.

On Mobile, it shows a limited number of products initially, with an option to reveal more using a "Show More" button. This button triggers a smooth overlay to display additional products on mobile devices, enhancing user experience.

### Tailwind CSS

We used Tailwind CSS for styling our components, providing utility-first CSS classes that help in quickly building custom designs without leaving the HTML.

## Screenshots

#### Shopify Admin: Products

![Admin Products](media/vs-products.png)

#### Desktop

![Hero Products Desktop 2](media/vs-hero-2.png)

![Hero Products Desktop 1](media/vs-hero-1.png)

#### Mobile

![Hero Products Mobile Preview](media/vs-mobile-preview.png)

![Hero Products Mobile Show More](media/vs-mobile-show-more.png)

## Conclusion

This project demonstrates how to extend [our vanilla JS solution](https://github.com/Teeldinho/Vanilla-Store) into a Shopify environment using `metafields` and reusable `snippets`.

We aimed to replicate the concept of compound components in ReactJS, favoring composition over configuration. However, this approach, considering the nature of tools being used and the simplicity of our desired outcome, has its limitations.

By using `metafields` for dynamic data and Tailwind CSS for styling, we created a flexible and maintainable product display system. The ideas of this approach can be built upon to support a variety of app UIs since it aims to guarantee a consistent user interface and permits modifications and extensions with ease.

```
Note: Demo Store Password to be made available upon request.
```
