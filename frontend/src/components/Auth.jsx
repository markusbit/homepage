import React, { useEffect } from "react";

const Auth = () => {
    useEffect(() => {
        async function fetchData() {
            const options = {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('user')}`
                }
            }
            const response = await fetch('/api/auth/status', options);
            if (!response.ok) {
                localStorage.removeItem('user');
            }
        }
        fetchData();
    }, [])
}

export default Auth; 