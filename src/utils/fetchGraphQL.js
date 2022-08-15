async function fetchGraphQL(text, variables) {
  const NEXT_PUBLIC_GITHUB_API_ENDPOINT = process.env.NEXT_PUBLIC_GITHUB_API_ENDPOINT
  const NEXT_PUBLIC_GITHUB_AUTH_TOKEN = process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN;

  const response = await fetch(NEXT_PUBLIC_GITHUB_API_ENDPOINT, {
    method: 'POST',
    headers: {
      Authorization: `bearer ${NEXT_PUBLIC_GITHUB_AUTH_TOKEN}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

export default fetchGraphQL;