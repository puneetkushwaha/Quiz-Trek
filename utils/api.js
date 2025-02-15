const API_BASE_URL = "http://localhost:5000"; // Change this if your backend is hosted

// Fetch all competitions
export const fetchCompetitions = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/competitions`);
    if (!response.ok) throw new Error("Failed to fetch competitions");
    return await response.json();
  } catch (error) {
    console.error("Error fetching competitions:", error);
    return [];
  }
};

export const fetchQuizzes = async () => {
  try {
    const response = await fetch("http://localhost:5000/quiz"); // ✅ Correct API Path
    if (!response.ok) throw new Error("Failed to fetch quizzes");
    return await response.json();
  } catch (error) {
    console.error("Error fetching quizzes:", error);
    return [];
  }
};



// Join a competition
export const joinCompetition = async (competitionId, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/competitions/join/${competitionId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Send Firebase Auth token
      },
    });
    if (!response.ok) throw new Error("Failed to join competition");
    return await response.json();
  } catch (error) {
    console.error("Error joining competition:", error);
    return null;
  }
};

// Submit quiz answers
export const submitQuizAnswers = async (quizId, answers, token) => {
  try {
    const response = await fetch(`${API_BASE_URL}/quizzes/submit/${quizId}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ answers }),
    });
    if (!response.ok) throw new Error("Failed to submit quiz");
    return await response.json();
  } catch (error) {
    console.error("Error submitting quiz answers:", error);
    return null;
  }
};

// Fetch leaderboard data
export const fetchLeaderboard = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/leaderboard`);
    if (!response.ok) throw new Error("Failed to fetch leaderboard");
    return await response.json();
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    return [];
  }
};
