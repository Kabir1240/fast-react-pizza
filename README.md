# Pizza Menu App Made with React

### Requirements
- Simple application, where users can order one or more pizzas from a menu
- Requires no user accounts and no login: users can just input their name before using the app.
- The pizza menu can change, so it should be loaded from an API
- Users can add multiple pizzas to a cart before ordering
- Ordering requires just the user's name, phone number and address.
- If possible, the GPS location should also be provided
- User's can mark their order as "priority" for an additional 20% of the cart price.
- Orders are made by sending a POST request with the order data (user data + selected pizzas) to the API.
- Payments are made on delivery, so no payment processing is required on the app.
- Each order will get a unique ID that should be displayed, so that the user can look up their order based on the ID.
- Users should be able to mark their order as "priority", even after it has been placed.

### Feature Categories / State Slices
- User: Global UI State
- Menu: Global Remote State
- Cart: Global UI State
- Order: Global Remote State

### Pages
- Homepage: `/`
- Pizza Menu: `/menu`
- cart: `/cart`
- Placing a new order: `/order/new`
- Looking up an order: `/order/:orderId`

### Technologies
- Routing: `React Router`
- Styling: `tailwindcss`
- State Management
  - Remote State: `React Router (v6.4)`
  - Global UI State: `Redux`
