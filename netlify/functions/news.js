exports.handler = async (event) => {
  const { country, category, page, pageSize } = event.queryStringParameters;

  const url = `https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&page=${page}&pageSize=${pageSize}&apiKey=${process.env.REACT_APP_API_NEWSSPHERE}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    return {
      statusCode: response.status,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};