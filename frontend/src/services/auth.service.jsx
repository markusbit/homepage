const login = async (username, password) => {

    const options = {
        method: 'POST', 
        headers: {
            Accept: "application/json", 
            "Contenct-Type": "application/json;charset=UTF-8"
        }, 
        body: JSON.stringify({
            username: username, 
            password: password
        })
    }

    const data = await fetch('/api/auth/login', options); 
    const response = data.json(); 
    
    console.log(response); 
}