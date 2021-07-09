export const stream = async function () {
  let result;
  try {
    const response = await fetch(
      'https://newsapi.org/v2/everything?q=tesla&from=2021-06-09&sortBy=publishedAt&apiKey=423aecb6fca943e2a244c73ed8771c28',
    );
    result = await response.json();
    //console.log(result);
    return [result.articles, undefined];
  } catch (error) {
    console.log(error);
    return [undefined, error];
  }
};
