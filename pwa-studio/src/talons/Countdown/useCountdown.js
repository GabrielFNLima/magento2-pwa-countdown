import { useEffect, useState, useCallback } from 'react';

export const useCountdown = ({ targetDate }) => {
    const validateDate = (date) => {
        const target = new Date(date);
        return isNaN(target.getTime()) ? null : target;
    };

    const target = validateDate(targetDate);
    if (!target) {
        console.error('Invalid targetDate provided');
        return { days: '00', hours: '00', minutes: '00', seconds: '00' };
    }

    const calculateTimeLeft = useCallback(() => {
        const difference = target - new Date();
        if (difference <= 0) return { days: '00', hours: '00', minutes: '00', seconds: '00' };

        const time = (unit, mod) => String(Math.floor((difference / unit) % mod)).padStart(2, '0');
        return {
            days: time(1000 * 60 * 60 * 24, Infinity),
            hours: time(1000 * 60 * 60, 24),
            minutes: time(1000 * 60, 60),
            seconds: time(1000, 60),
        };
    }, [target]);

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

    useEffect(() => {
        if (Object.values(timeLeft).every((v) => v === '00')) return;

        const timer = setInterval(() => setTimeLeft(calculateTimeLeft), 1000);
        return () => clearInterval(timer);
    }, [timeLeft, calculateTimeLeft]);

    return timeLeft;
};

