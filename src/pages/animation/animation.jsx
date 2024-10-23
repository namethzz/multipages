import React, { useState, useEffect } from "react";
import "./animation.css";

const Animation = () => {
  // Global constants
  const fieldWidth = 700;
  const fieldHeight = 450;
  const diameter = 100;
  const maxLeft = fieldWidth - diameter - 2;
  const maxTop = fieldHeight - diameter - 2;
  const vx = 5;
  const vy = 5;

  // Global states
  const [running, setRunning] = useState(false);
  const [goRight, setGoRight] = useState(true);
  const [goDown, setGoDown] = useState(true);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [rotationAngle, setRotationAngle] = useState(0);
  const [rotationSpeed, setRotationSpeed] = useState(1);
  const [ballImage, setBallImage] = useState("");

  const runClick = () => {
    setRunning(!running);
  };

  const randomSpeed = () => {
    const speed = Math.random() * (5 - 1) + 1;
    const direction = Math.random() > 0.5 ? 1 : -1;
    return speed * direction;
  };

  const calculate = () => {
    let { x, y } = position;

    if (goRight) {
      x += vx;
      if (x >= maxLeft) {
        setGoRight(false);
        setRotationSpeed(randomSpeed());
      }
    } else {
      x -= vx;
      if (x <= 0) {
        setGoRight(true);
        setRotationSpeed(randomSpeed());
      }
    }

    if (goDown) {
      y += vy;
      if (y >= maxTop) {
        setGoDown(false);
        setRotationSpeed(randomSpeed());
      }
    } else {
      y -= vy;
      if (y <= 0) {
        setGoDown(true);
        setRotationSpeed(randomSpeed());
      }
    }

    setPosition({ x, y });
  };

  const render = () => {
    if (running) {
      setRotationAngle((prev) => prev + rotationSpeed);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (running) {
        calculate();
        render();
      }
    }, 25);

    return () => clearInterval(interval);
  }, [running, position, goRight, goDown, rotationSpeed]);

  const changeBallImage = (type) => {
    let imageUrl = "";
    switch (type) {
      case "football":
        imageUrl = "src/img/football,png.webp";
        break;
      case "basketball":
        imageUrl = "src/img/ball.png.webp";
        break;
      case "volleyball":
        imageUrl = "src/img/valley2.png";
        break;
      case "human":
        imageUrl = "src/img/human.jpg";
        break;
      case "cartoon":
        imageUrl = "src/img/cartoon.jpg";
        break;
      case "logo":
        imageUrl = "src/img/logo.jpg";
        break;
      case "none":
        imageUrl = "";
        break;
      default:
        imageUrl = "";
    }
    setBallImage(imageUrl);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      switch (event.key) {
        case "0":
          changeBallImage("none");
          break;
        case "1":
          changeBallImage("football");
          break;
        case "2":
          changeBallImage("basketball");
          break;
        case "3":
          changeBallImage("volleyball");
          break;
        case "4":
          changeBallImage("human");
          break;
        case "5":
          changeBallImage("cartoon");
          break;
        case "6":
          changeBallImage("logo");
          break;
        case " ":
          runClick();
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div id="container">
      <div id="field" style={{ width: fieldWidth, height: fieldHeight }}>
        <div
          id="ball"
          style={{
            width: diameter,
            height: diameter,
            left: `${position.x}px`,
            top: `${position.y}px`,
            backgroundImage: `url(${ballImage})`,
            transform: `rotate(${rotationAngle}deg)`,
          }}
        ></div>
      </div>
      <div id="control">
        <button className="btn btn-primary" onClick={() => changeBallImage("none")}>
          None
        </button>
        <button className={"btn " + (running ? "btn-warning" : "btn-success")} id="run" onClick={runClick}>
          {running ? (
            <span className="bi bi-play">&nbsp;PAUSE</span>
          ) : (
            <span className="bi bi-play">&nbsp;RUN</span>
          )}
        </button>
        <button className="btn btn-primary" onClick={() => changeBallImage("football")}>
          Football
        </button>
        <button className="btn btn-primary" onClick={() => changeBallImage("basketball")}>
          Basketball
        </button>
        <button className="btn btn-primary" onClick={() => changeBallImage("volleyball")}>
          Volleyball
        </button>
        <button className="btn btn-primary" onClick={() => changeBallImage("human")}>
          Human
        </button>
        <button className="btn btn-primary" onClick={() => changeBallImage("cartoon")}>
          Cartoon
        </button>
        <button className="btn btn-primary" onClick={() => changeBallImage("logo")}>
          Logo
        </button>
      </div>
    </div>
  );
};

export default Animation;
