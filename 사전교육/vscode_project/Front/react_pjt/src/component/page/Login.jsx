import React , { useState }from 'react' ;
import '../css/Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () =>  {
    
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const moveUrl = useNavigate();

    const handleSubmit = async (e) => {

        e.preventDefault();

        console.log('btn click event')

        if (!userId || !password){
            setError("아이디와 비밀번호 모두 입력해주세요.");
            return;
        }

        // if (userId === "admin" && password === "1234") {
        //     alert("로그인 성공!");
        //     setError("");
        // }else{
        //     setError("아이디 또는 비밀번호가 올바르지 않습니다.");
        // }

        // 로그인 API 요청 부분
        // const response = await axios.post("http://localhost:8080/api/login", {
        //     username: userId,
        //     password: password,
        // });

        // const token = response.data.token ;
        // localStorage.setItem('token', token)

        alert('로그인 성공!');
        setError('');

        // react-router-dom 이동  vs  window.location.href로 이동 가능
        moveUrl('/welcome' , { state : { username: userId } })
    }

    return(
        <div className="login-container">
            <form className="login-box" onSubmit={handleSubmit}>
                <h2>로그인</h2>

                <div className="input-group">
                <label>아이디</label>
                <input
                    type="text"
                    placeholder="아이디를 입력하세요"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />    
                </div> 

                <div className="input-group">
                    <label>비밀번호</label>
                    <input
                    type="password"
                    placeholder="비밀번호를 입력하세요"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                /> 
                </div> 

                {error && <p className="error-message">{error}</p>}

                <button type="submit" className="login-btn">
                로그인
                </button>  
            </form> 
        </div>
    );
}

export default Login;