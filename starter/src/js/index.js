import axios from 'axios';

// https://www.food2fork.com/api/search
// 8be3440ce9c8520a097af6981a258d04

async function getResults(query) {
  const key = '8be3440ce9c8520a097af6981a258d04';
  const proxy = 'https://cors-anywhere.herokuapp.com/';
  const res = await axios(`${proxy}http://www.food2fork.com/api/search?key=${key}&q=${query}`);

  try{
    const recipes = res.data.recipes
    console.log(recipes);
  } catch(error) {
    alert(error)
  } 
}

getResults('pasta');
