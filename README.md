# JS Frameworks Module 2 Lesson Task 3

Build on your answer from Lesson Task 2 for this task.

The base API URL:

```
https://api.rawg.io/api/games
```

Get your own API key for the RAWG API, or use `?key=54582cd735a340b89b17702eae51578b`

---

Using React Router create 2 paths:

- "/" - this should list the games, the code from Lesson Task 2
- "/game/:slug" - this will display a single game

Wrap each result on the home page in a link. This should link to the `game` page with the slug property in the URL, e.g. `/game/capitalism-2`

On the `game` page retrieve the slug from the URL, add it to the base API URL and make a fetch request to get that specific game.

Use a Spinner component as a loading indicator.

Use an Alert component to display any errors.

Display the name, release date and rating properties. Display the screenshots array in a carousel (image slider) - use the `map` methed on the screenshots array.
