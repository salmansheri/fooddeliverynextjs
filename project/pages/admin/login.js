import styles from '@/styles/Login.module.css';
import {useState} from 'react'; 
import {useRouter} from 'next/router';
import axios from 'axios';

const Login = () => {
    const [username, setUserName] = useState(""); 
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);
    const router = useRouter(); 

    const handleClick = async () => {
        try {
            await axios.post("http://localhost:3000/api/login", {
                username, 
                password,
            })
            
            router.push("/admin")

        } catch(err) {
            console.log("client side", err)
            setError(true)
        }
    }
    return (
        <div className={styles.container}>
        <div className={styles.wrapper}>
        <h1>Admin Dashboard</h1>
        <input 
            placeholder="Enter username"
            className={styles.input}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
        />
        <input 
            placeholder="Enter password"
            type="password"
            className={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
        />
        <button onClick={handleClick} className={styles.button}>
        Login 


        </button>
        {error && (
            <span className={styles.error}>Wrong Credentials</span>

        )}

        </div>

        </div>

    )

}

export default Login;  