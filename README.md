# Hangman Game

This is a simple Hangman game built using Vue 3, TypeScript, and Vite.

## Features

- Interactive Hangman game
- Random word generation
- Letter input handling
- Win/Lose notifications

## Technologies Used

- **Vue 3**: A progressive JavaScript framework for building user interfaces.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **Vite**: A build tool that aims to provide a faster and leaner development experience for modern web projects.

## Installation

1. **Clone the repository**:

   ```sh
   git clone https://github.com/dangulkin/hangman.git
   cd hangman
   ```

2. **Install dependencies**:

   ```sh
   npm install
   ```

## Usage

1. **Start the development server**:

   ```sh
   npm run dev
   ```

2. **Build for production**:

   ```sh
   npm run build
   ```

3. **Preview the production build**:

   ```sh
   npm run preview
   ```

## Example Code

### Fetching a Random Name

```typescript
import axios from "axios";

export const getRandomName = async () => {
  const { data } = await axios.get("https://randomuser.me/api/?inc=name&nat=us");
  return data.results[0].name.first;
};
```

### Using the Random Name in the Game

```typescript
const getRandomWord = async () => {
  try {
    const name = await getRandomName();
    theName.value = name.toLowerCase();
  } catch (error) {
    console.error('Error fetching random name:', error);
    theName.value = '';
  }
};
```
