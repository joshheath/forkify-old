import axios from 'axios';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const key = '8be3440ce9c8520a097af6981a258d04';
    const proxy = 'https://cors-anywhere.herokuapp.com/';

    try{
      const res = await axios(`${proxy}http://www.food2fork.com/api/search?key=${key}&q=${this.query}`);

      this.result = res.data.recipes;
    } catch(error) {
      alert(error)
    }
  }
}
