// pages/api/current-affairs.js

export async function handler(req, res) {
  // Example data, replace with your real current affairs data (e.g., from an external API or static file)
  const currentAffairs = [
    {
      title: "Narendra Modi US visit LIVE: PM Modi departs for India after ‘productive and substantive’ talks with Trump",
      description: "PM Modi said India and the US are moving towards joint development, joint production, and technology transfer.",
      link: "http://example.com/news1",
      date: "2025-02-01"
    },
    {
      title: "Samsung bets on budget 5G smartphones to reclaim market share from Chinese rivals",
      description: "Tapping the sub-Rs 10,000 5G segment can help Samsung capture more market share.",
      link: "http://example.com/news2",
      date: "2025-02-02"
    }
  ];

  res.status(200).json(currentAffairs);  // Send the data to the frontend
}
