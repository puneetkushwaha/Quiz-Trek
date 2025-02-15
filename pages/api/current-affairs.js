export default async function handler(req, res) {
    try {
        const API_KEY = process.env.GNEWS_API_KEY;
        if (!API_KEY) {
            console.error("Missing API key in environment variables.");
            return res.status(500).json({ error: "API key is missing" });
        }

        const url = `https://gnews.io/api/v4/top-headlines?category=general&lang=en&country=in&max=10&apikey=${API_KEY}`;
        const response = await fetch(url);

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`API Error: ${response.status} - ${errorText}`);
            return res.status(response.status).json({ error: "API request failed", details: errorText });
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
            console.error("Received non-JSON response:", await response.text());
            return res.status(500).json({ error: "Invalid API response format" });
        }

        const data = await response.json();
        console.log("Fetched Articles:", data.articles?.length || 0);

        return res.status(200).json(data.articles.length > 0 ? data.articles : []);
    } catch (error) {
        console.error("API Fetch Error:", error);
        return res.status(500).json({ error: "Failed to fetch current affairs", details: error.message });
    }
}
