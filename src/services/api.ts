export const fetchData = async (limit: number): Promise<any[]> => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?_limit=${limit}`);
    if (!response.ok) {
      throw new Error('Error fetching data from the server');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error('Error occurred while fetching data');
  }
};
