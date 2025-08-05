import React, { useState, useEffect, useRef } from 'react';
import '../styles/Timer.css';

function Timer() {

    const MODES = {
        pomodoro: 25 * 60,
        short: 5 * 60,
        long: 10 * 60,
    };

    const [timeLeft, setTimeLeft] = useState(MODES.pomodoro);
    const [isRunning, setIsRunning] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [currentMode, setCurrentMode] = useState('pomodoro');

    const timerRef = useRef(null);

    const formatTime = (seconds) => {
        const minutes = String(Math.floor(seconds / 60)).padStart(2, '0');
        const secs = String(seconds % 60).padStart(2, '0');
        return `${minutes}:${secs}`;
    };

    useEffect(() => {
        if (isRunning && !isPaused) {
            timerRef.current = setInterval(() => {
                setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(timerRef.current);

                    if (currentMode === 'pomodoro') {
                        handleModeChange('short', false);
                    } else if (currentMode === 'short') {
                        handleModeChange('pomodoro', false);
                    }
                    else if (currentMode === 'long') {
                        handleModeChange('pomodoro', false);
                    }

                    return 0;
                }
                return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timerRef.current);
    }, [isRunning, isPaused, currentMode]);

    const handleModeChange = (mode) => {
        clearInterval(timerRef.current);
        setCurrentMode(mode);
        setTimeLeft(MODES[mode]);
        setIsRunning(false);
        setIsPaused(false);
    };

    const startTimer = () => {
        setIsRunning(true);
        setIsPaused(false);
    };

    const pauseTimer = () => {
        setIsPaused(true);
        clearInterval(timerRef.current);
    };

    const resumeTimer = () => {
        setIsPaused(false);
    };

    const isBreak = currentMode === 'short' || currentMode === 'long';
    const backgroundStyle = {
        backgroundColor: isBreak ? '#CDA07B' : '#EFCFB4',
        color: isBreak ? '#FFF2E8' : '#4E2A09',
        transition: 'background-color 0.3s ease, color 0.3s ease'
    };

    const buttonStyle = {
        backgroundColor: isBreak ? '#EFCFB4' : '#CDA07B',
        color: isBreak ? '#4E2A09' : '#FFF2E8',
        transition: 'background-color 0.3s ease, color 0.3s ease'
    }

  return (
    <div className="timerContainer" style={backgroundStyle}>
      <div className="timerOptions">
        <button onClick={() => handleModeChange('pomodoro')}>pomodoro</button>
        <button onClick={() => handleModeChange('short')}>short break</button>
        <button onClick={() => handleModeChange('long')}>long break</button>
      </div>

      <div className="timer">
        <h1>{formatTime(timeLeft)}</h1>
      </div>

      <div className="startButton">
        {!isRunning ? (
            <button style={buttonStyle} onClick={startTimer}>start</button>
        ) : isPaused ? (
            <button style={buttonStyle} onClick={resumeTimer}>resume</button>
        ) : (
            <button style={buttonStyle} onClick={pauseTimer}>pause</button>
        )}
      </div>
    </div>
  );
}

export default Timer;
