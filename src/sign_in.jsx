import { useState } from "react";

const SignIn = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await fetch("/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password
                })
            });
            
            const data = await response.json();
            if (data.error) {
                alert(data.error);
            } else {
                alert("Registration successful!");
                window.location.reload();
            }
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div className="wrapper">
            <div className="login-box">
                <h2>Sign In Page</h2>
                <form id="signupForm" onSubmit={handleSubmit}>
                    <div className="tab active">
                        <div className="input-box">
                            <label>Username</label>
                            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
                            <span className="errorMsg"></span>
                        </div>
                        <div className="input-box">
                            <label>Email</label>
                            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
                            <span className="errorMsg"></span>
                        </div>
                        <div className="input-box">
                            <label>Password</label>
                            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
                            <span className="errorMsg"></span>
                        </div>
                        <div className="input-box">
                            <label>Confirm Password</label>
                            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} required />
                            <span className="errorMsg"></span>
                        </div>
                    </div>
                    <button type="submit" className="aspButton">Sign In</button>
                </form>
            </div>
        </div>
    );
};

export default SignIn;