# Mini Fridge Mini Practice

You've been blessed with a mini fridge by a friend and decided it's time to build an app to track everything inside! Your goal today is fairly simple: build out an app that fetches all the items from your `db.json` and lists every item on the page.

## Getting Started

Fork and clone this repository and then run `npm install` followed by `npm run server`. In a separate terminal run `npm start`.

You'll be fetching from `http://localhost:3005/items` for this practice.

## Deliverables

1. Fetch your data from the `db.json` using a `useEffect` and load them into state.

2. Map through and render each item in the `FridgeList` component. Each item should be a `FridgeItem`.

3. If an item is expired, the p tag ought to say "Expired". Otherwise the p tag should say "Still Good".

4. *BONUS:* When someone clicks on the `Expired` / `Still Good` text it toggles between the two.

5. *EXTRA BONUS:* When toggling between `Expired` and `Still Good` a patch request is sent to change the item in the database.
