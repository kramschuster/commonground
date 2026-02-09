import { useState, useEffect } from 'react';

const usePerspectives = (initialPerspective) => {
    const [perspective, setPerspective] = useState(initialPerspective);

    useEffect(() => {
        const handlePerspectiveChange = (newPerspective) => {
            setPerspective(newPerspective);
        };

        // Placeholder for event listener or other logic
        window.addEventListener('perspectiveChange', handlePerspectiveChange);

        return () => {
            window.removeEventListener('perspectiveChange', handlePerspectiveChange);
        };
    }, []);

    return perspective;
};

export default usePerspectives;