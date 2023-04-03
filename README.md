# Tic-Tac-Toe

I wanted to try out Svelte and SolidJS, so I made tic-tac-toe in both libraries. I also made it in React so I could compare all 3 options.

Conclusions:

1. React is React. I am pretty comfortable with it since I have used it so much, but I am not the biggest fan of its rendering pattern. Rerunning all component code on every remount is not great for performance (in comparison to Solid and Svelte), and it can cause a lot of confusion for people new to React.
2. Solid is a little bit confusing at times, and its control flow components are a bit annoying to use in comparison to React and Svelte's alternatives. It took me a while to figure out how to use a store to update a nested array.
3. Svelte is pretty awesome. I am a fan. It has fine-grained updates, and you can write less code to get the same result. It is basically just HTML/CSS/JS with the bells and whistles of modern frameworks/libraries like React but with better performance.

## How to Run

1. Clone the git repository
2. Change directories into the folder where you cloned the repository.
3. Run `yarn install`
4. Run the command associated with the app you want to run:
   - For React, run `yarn workspace tic-tac-toe-react dev`
   - For Solid, run `yarn workspace tic-tac-toe-solid dev`
   - For Svelte, run `yarn workspace tic-tac-toe-svelte dev`
5. Go to [http://localhost:5173/](http://localhost:5173/)
