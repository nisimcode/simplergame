export const saveHighScore =(highScore) => {
  try {
    localStorage.setItem("HighScore", highScore.toString());
  } catch (e) {
    alert("Error: " + e.message);
  }
};

export const loadHighScore = () => {
  try {
    const value = localStorage.getItem("HighScore");
    if (value !== null) {
      return value;
    } else {
      return "0";
    }
  } catch (e) {
    alert("Error: " + e.message);
  }
};
