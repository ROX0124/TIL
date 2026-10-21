import React , { useState }from 'react' ;

import '../css/Login.css';

const Login = () =>  {
    
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
   

    const handleSubmit = (e) => {
        console.log('btn click event')
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