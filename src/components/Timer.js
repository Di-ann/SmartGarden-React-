import React, { useState, useEffect, useRef } from 'react';
import { Button, Typography, Box } from '@mui/material';

const Timer = () => {
    const [seconds, setSeconds] = useState(() => {
        const saved = sessionStorage.getItem('timer_seconds');
        return saved ? parseInt(saved, 10) : 0;
    });
    const [running, setRunning] = useState(false);
    const timerRef = useRef(null);

    useEffect(() => {
        sessionStorage.setItem('timer_seconds', seconds.toString());
    }, [seconds]);

    useEffect(() => {
        return () => clearInterval(timerRef.current); 
    }, []);

    const startTimer = () => {
        if (!running) {
            setRunning(true);
            timerRef.current = setInterval(() => {
                setSeconds((prev) => prev + 1);
            }, 1000);
        }
    };

    const stopTimer = () => {
        setRunning(false);
        clearInterval(timerRef.current);
    };

    return (
        <Box
            sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                border: '1px solid #ccc',
                borderRadius: 2,
                width: 150,
                margin: 'auto',
                boxShadow: 2,
                transform: 'scale(0.7)',
            }}
        >
            <Typography variant="h4" gutterBottom sx={{ fontSize: '1.3rem' }}>
                Таймер: {seconds} сек
            </Typography>

            <Box sx={{ display: 'flex', gap: 1.4 }}>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={startTimer}
                    sx={{ fontSize: '0.8rem', px: 1.5, py: 0.8 }}
                >
                    Старт
                </Button>
                <Button
                    variant="outlined"
                    color="error"
                    onClick={stopTimer}
                    sx={{ fontSize: '0.8rem', px: 1.5, py: 0.8 }}
                >
                    Стоп
                </Button>
            </Box>
        </Box>
    );
};

export default Timer;
