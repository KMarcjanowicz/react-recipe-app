
const API_KEY = process.env.API_KEY;

export const searchRecipes  = async (_searchTerm : String, _page : number) =>{

    if(!API_KEY){
        throw new Error("Api Key not found!")
    }
    
    const baseURL : string = "https://api.spoonacular.com/recipes/complexSearch";
    const url : URL = new URL(baseURL);

    const queryParams : Object = {
        apiKey: API_KEY,
        query: _searchTerm,
        number: 10,
        offset: (_page - 1) * 10
    };

    url.search = new URLSearchParams(JSON.stringify(queryParams)).toString();

    try {
        const searchResponse : Response = await fetch(url.toString());
        const resultsJson : Response = await searchResponse.json();
        return resultsJson;
      } catch (error) {
        console.error(error);
      }
} 