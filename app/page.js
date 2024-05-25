"use client";

import TASKS from "./tasks";
import shuffleCS from "./shuffleFunctions";
import { loadHighScore, saveHighScore } from "./highScoreFunctions";
import { cloneDeep } from "lodash";

import styles from "./page.module.css";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useEffect, useMemo, useState } from "react";

const MemoizedGamesData = () => {
  return useMemo(() => {
    return TASKS;
  }, []);
};

export default function App() {
  const [tasks, setTasks ] = useState(shuffleCS(MemoizedGamesData()));
  const [highScore, setHighScore] = useState(loadHighScore());
  const [gameState, setGameState] = useState("start");
  const [score, setScore] = useState(0);
  const [currentTask, setCurrentTask] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(100);
  const [roundTimer, setRoundTimer] = useState(10);
  const [mistakeCount, setMistakeCount] = useState(0);
  const [streak, setStreak] = useState(0);
  const [roundNumber, setRoundNumber] = useState(0);
  const [isPressed, setIsPressed] = useState(false);
  const [chosenChoiceID, setChosenChoiceID] = useState(0);
  const [newHighScore, setNewHighScore] = useState(false);

  useEffect(() => {
    if (score > parseInt(highScore) && gameState === "end") {
      saveHighScore(score);
      setNewHighScore(true);
    }
  }, [score]);

  useEffect(() => {
    startRound();
  }, []);

  useEffect(() => {
    if (timeRemaining > 0) {
      const timer = setTimeout(
        () => setTimeRemaining((prevTime) => prevTime - 1),
        1000
      );
      return () => clearTimeout(timer);
    } else {
      setGameState("end");
    }
  }, [timeRemaining]);

  useEffect(() => {
    if (roundTimer > 1) {
      const timer = setTimeout(
        () => setRoundTimer((prevTime) => prevTime - 1),
        1000
      );
      return () => clearTimeout(timer);
    }
  });

  const startRound = () => {
    setTimeout(() => {
      setIsPressed(false);
      setChosenChoiceID(0);
    }, 900);
    setTimeout(() => {
      const cloneStore = cloneDeep(tasks);
      const nextTask = cloneStore.shift();
      setCurrentTask(nextTask);
      setTasks(cloneStore);
      setRoundNumber((prevState) => prevState + 1);
      setRoundTimer(10);
    }, 1000);
  };

  const checkAnswer = (choice) => {
    setChosenChoiceID(choice.id);
    setIsPressed(true);
    if (choice && choice.isCorrect === true) {
      setScore((prevScore) => prevScore + roundTimer * 10 * (streak + 1));
      setStreak((prevStreak) => prevStreak + 1);
    } else {
      setStreak(0);
      setMistakeCount((prevCount) => prevCount + 1);
    }
    if (mistakeCount !== 3) {
      startRound();
    }
  };

  useEffect(() => {
    if (mistakeCount === 3) {
      handleEnd();
    }
  }, [mistakeCount]);

  const handleRestart = () => {
    setTimeout(() => {
      const fetchedHighScore = loadHighScore();
      setHighScore(fetchedHighScore);
      setMistakeCount(0);
      setStreak(0);
      setTimeRemaining(100);
      setScore(0);
      setRoundNumber(0);
      setRoundTimer(10);
      setChosenChoiceID(0);
      setNewHighScore(false);
      setTasks(shuffleCS(tasks));
      setGameState("start");
    }, 500);
  };

  const handleStart = () => {
    setTimeout(() => {
      setGameState("game");
    }, 500);
  };

  const handleEnd = () => {
    setTimeout(() => {
      const fetchedHighScore = loadHighScore();
      if (score > parseInt(fetchedHighScore)) {
        saveHighScore(score);
        setNewHighScore(true);
      }
      setGameState("end");
    }, 500);
  };

  const setButtonBackgroundColor = (choice) => {
    if (choice.id === chosenChoiceID && isPressed) {
      if (choice.isCorrect === true) {
        return "success";
      }
      return "danger";
    }
    if (choice.id !== chosenChoiceID && isPressed) {
      return "outline-secondary";
    }
    return "light";
  };

  const showMistakeCount = () => {
    switch (mistakeCount) {
      default:
        return "X X X";
      case 1:
        return "X X";
      case 2:
        return "X";
      case 3:
        return "0";
    }
  };

  const timerRender = () => {
    const shown = timeRemaining % 10 === 0 || timeRemaining < 10;
    return (
      <p
        className={styles.timeText}
        style={{ color: shown ? "black" : "transparent" }}
      >
        Time: {timeRemaining}s
      </p>
    );
  };

  const renderStart = () => {
    return (
      // <div className={styles.startContainer}>
      //   <Button variant="info" onClick={handleStart}>
      //     START PLAYING {game.name.toUpperCase()}
      //   </Button>
      //   <p className={styles.startText}>HIGH SCORE: {highScore}</p>
      // </div>
      <div className={styles.main}>
        <header>
          <h1>SIMPLER GAMES</h1>
          <h3>By nisimcode</h3>
        </header>

        <main>
          <section>
            <Button onClick={handleStart}>START GAME</Button>
            <p className={styles.startText}>HIGH SCORE: {highScore}</p>
          </section>
        </main>

        <footer>
          <p>&copy; 2024 nisimcode. All rights reserved.</p>
        </footer>
      </div>
    );
  };

  const renderGame = () => {
    return (
      <div className={styles.gameContainer}>
        <div className={styles.columnContainer}>
          <p className={styles.gameScoreText}>Score: {score}</p>
          <p className={styles.mistakesText}>
            Mistakes Left: {showMistakeCount()}
          </p>
          {timerRender()}
        </div>

        <div>
          <Container className={styles.columnContainer}>
            <Row className={styles.rowContainer}>
              <Card>
                <Card.Body >
                  <Card.Title>{currentTask?.description}</Card.Title>
                  <Card.Text className={styles.taskText}>{currentTask?.question}</Card.Text>
                </Card.Body>
              </Card>
            </Row>
            {currentTask?.choices.map((choice) => (
              <Row key={choice.id}>
                <Button
                  disabled={isPressed}
                  onClick={() => checkAnswer(choice)}
                  style={{
                    margin: "10px",
                    minWidth: "100px",
                    height: "40px",
                    flexGrow: 1,
                  }}
                  variant={setButtonBackgroundColor(choice)}
                >
                  <p className={styles.choiceText}>{choice.answer}</p>
                </Button>
              </Row>
            ))}
          </Container>
        </div>
      </div>
    );
  };

  const renderEnd = () => {
    return (
      <div className={styles.endContainer}>
        <p className="gameOverText">GAME OVER!</p>
        <p className="endScoreText">You lasted {roundNumber} rounds</p>
        <p className="endScoreText">
          {newHighScore ? `New High Score: ${score}` : `Score: ${score}`}
        </p>

        <Button variant="info" onClick={handleRestart}>
          END GAME
        </Button>
      </div>
    );
  };

  const render = () => {
    switch (gameState) {
      case "start":
        return renderStart();
      case "game":
        return renderGame();
      case "end":
        return renderEnd();
    }
  };

  return <div className={styles.main}>{render()}</div>;
}
