# React Frontend for KK-TH

This is a React frontend that accompanies the [kk-th-backend](https://github.com/latifyahia/kk-th-backend). The project was created using **Vite** and is designed to call endpoints from the backend and display the results on a page. The frontend is structured to promote reusability of components across the codebase.

---

## Available Pages

### `/your-next-delivery/:userId`

This page displays a user's next delivery along with its details. Accessing any other page will return a custom error page. This includes attempting to access `/your-next-delivery/:userId` with an invalid `userId`.

---

## Getting Started

### Prerequisites

To run this project locally, you will need:

- **Node.js >= 20.0.0**

Make sure the backend is running locally first by following the [backend README guide](https://github.com/latifyahia/kk-th-backend).

### Running Locally

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.

Note, the frontend can be access here locally: `http://localhost:5173/`

---

## Final Remarks

This was my first time setting up a React project with **Vite**, and I found it to be a much better experience compared to `create-react-app`. Vite allows you to easily set up your project with TypeScript and offers faster build times.

### Note to KH:

- There was a slight deviation from the instructions. Instead of creating a frontend with just one page `/welcome/<USER-ID>`, I decided to make it `/your-next-delivery/<USER-ID>` as it made more sense given the context of the page the user will see.
- Due to time limitations, I did not set up any unit testing for the frontend. (Perhaps I spent a bit too much time on backend unit testing!)

---

Feel free to reach out if you have any questions or suggestions!

