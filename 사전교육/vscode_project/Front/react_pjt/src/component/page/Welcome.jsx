import { useNavigate , useLocation} from "react-router-dom";

const Welcome = () => {
    
    const moveUrl = useNavigate();
    const location = useLocation();
    const username = location.state?.username || 'Guest';
    const handleLogout = () => {
        moveUrl('/');
    }

    return(
        <div style={styles.container}>
          <h1>환영합니다, {username}님!</h1>
          <p>로그인이 성공적으로 완료되었습니다.</p>
          <button onClick={handleLogout} style={styles.btn}>로그아웃</button>  
        </div>
    );
}

const styles = {
    container: {
        marginTop: "100px",
        textAlign: "center",
        fontFamily: "Noto Sans KR, sans-serif",
    },
    btn: {
        marginTop: "20px",
        padding: "10px 20px",
        background: "#0984e3",
        color: "#fff",
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
    }
}
export default Welcome ;
