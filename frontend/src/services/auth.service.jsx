const login = async (username, password) => {

    const options = {
        method: 'POST', 
        headers: {
            "authorization": localStorage.getItem('user_token'), 
            "Accept": "application/json", 
            "Content-Type": "application/json"
        }
    }

    const data = await fetch('/api/auth/login', options); 
    const response = data.json(); 

    localStorage.setItem('user', response); 
}
