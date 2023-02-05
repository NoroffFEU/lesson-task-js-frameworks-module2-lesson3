# JS Frameworks Module 2 Lesson Task 3

Build on your answer from Lesson Task 2 for this task.

The base API URL:

```
https://api.noroff.dev/api/v1/old-games
```
---

Using React Router create 2 paths:

- "/" - this should list the games, the code from Lesson Task 2
- "/game/:id" - this will display a single game

Wrap each result on the home page in a link. This should link to the `game` page with the id property in the URL, e.g. `/game/2`

On the `game` page retrieve the id from the URL, add it to the base API URL and make a fetch request to get that specific game.

Use a Spinner component as a loading indicator.

Use an Alert component to display any errors.

Display the name and release date.
