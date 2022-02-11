import { BackDiv2, LoignFrame, LoginButton } from "../style"

const Login = () => {
    return (
        <BackDiv2>
            <LoignFrame>
                로그인
                <div style={{marginTop:"10px", borderTop:"4px solid white" , borderBottom:"4px solid white"}}>
                    <div style={{borderBottom:"2px solid rgba(255,255,255,0.3)"}}>
                        <div className="username">
                            Username : <input type="text"/>
                        </div>
                    </div>
                    <div>
                        <div className="username">
                            Password : <input type="password"/>
                        </div>
                    </div>
                </div>
                <LoginButton>로그인</LoginButton>
            </LoignFrame>
        </BackDiv2>
    )
}

export default Login