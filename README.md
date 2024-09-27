# Totality Frontend Challenge:

# EasyRentals (Property Rentals Platform)

This is a property rentals platform built with **Next.js**, **TailwindCSS**, and **MongoDB**, utilizing **MaterialUI** and **Swiper.js** for UI components and sliders. The platform allows users to search, filter, and rent properties, while storing their session data locally and handling user authentication through MongoDB.

## Features

- **Property Search**: Users can search for rental properties based on location via a dropdown menu.
- **Property Listings**: After searching, users are redirected to a listings page where they can apply filters to refine their search.
- **Add to Cart**: Users can add selected properties to their cart.
- **Cart Management**: Users can view, add, or remove properties from their cart and proceed to checkout.
- **User Authentication**: User credentials (email, password) are stored in the database to enable avatar display on login.
- **Checkout Process**: Users can finalize their orders by entering additional details and payment information (not stored in the database).

## Tech Stack

- **Framework**: [Next.js]
- **Styling**: [TailwindCSS]
- **Database**: [MongoDB]
- **UI Libraries**:
  - [MaterialUI]
  - [Swiper.js](https://swiperjs.com/) - For implementing sliders and carousels.

## Key Libraries

- **React Context API**: Used to share the cart state across different components in the app.
- **Session Storage**: The cart data is stored in the browser's session storage and persists during the session.
- **Dummy JSON Data**: Property listings are fetched locally from a JSON file instead of the database.

## Project Structure

- **Home Page**: Users can search for properties by selecting a location from the dropdown.
- **Property Listings Page**: Filterable list of available properties based on the selected location.
- **Cart Page**: View selected properties, modify the cart, and proceed to checkout.
- **Checkout Page**: Enter additional information and card details for booking completion (card details are not stored).

## How to Run

1. Clone the repository:

   git clone https://github.com/ansen01-svg/totality-frontend-challenge.git
   cd property-rentals-platform

2. Install dependencies:

   npm install

3. Start the development server:

   npm run dev
