// Task: Build a command-line tool that asks users for their movie preferences
// (genre, year, actor) and uses the OMDB API to
//          recommend movies based on their input.
// NPM Modules: axios for making API requests, inquirer for user input. (https://github.com/SBoudrias/Inquirer.js)

import axios from "axios";
import inquirer from "inquirer";

const omdbUrl = `http://www.omdbapi.com/?i=tt3896198&apikey=a15814c4`;

const askPreferences = [
  {
    type: "input",
    name: "title",
    message: " preferred Movie title",
  },

  {
    type: "input",
    name: "year",
    message: "  release year",
  },
];

const fetchMovies = (preferences) => {
  axios.get(omdbUrl,
     {
        params: {
          y: preferences.year,
          s: preferences.title,
        },
      }
    )

    .then((response) =>
      response.data
        ? console.log(response.data)
        : console.log("No movies found for your preferences")
    );
};

inquirer
  .prompt(askPreferences)

  .then((preferences) => {
    fetchMovies(preferences);
  })

  .catch((error) => {
    console.log(error);
  });
