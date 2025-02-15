export const fetchCurrentAffairs = async () => {
    const today = new Date();
    const threeMonthsAgo = new Date(today.setMonth(today.getMonth() - 3)); // Three months ago
    const formattedDate = threeMonthsAgo.toISOString().split('T')[0]; // Format as YYYY-MM-DD
  
    const apiKey = '616af1825e99753c7d9324240c79c268'; // Replace with your actual GNews API key
    const url = `https://gnews.io/api/v4/search?q=india&from=${formattedDate}&lang=en&token=${apiKey}`;
  
    console.log('Fetching from URL:', url);  // Log the request URL for debugging
  
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        // Log the status code if the response is not successful
        throw new Error(`Failed to fetch articles: ${response.status}`);
      }
  
      const data = await response.json();
  
      console.log('API Response:', data); // Log the full response to understand the issue
  
      if (data && data.articles) {
        return data.articles; // Return the list of articles
      } else {
        throw new Error('Failed to fetch articles');
      }
    } catch (error) {
      console.error('Error fetching current affairs:', error);
      return []; // Return an empty array in case of an error
    }
  };
  