import { BackDiv2, LoginButton, LoignFrame } from "../style"

const SignUp = () => {
    return (
        <BackDiv2>
            <LoignFrame style={{height:"550px"}}>
                회원가입
                <div style={{marginTop:"10px", borderTop:"4px solid white" , borderBottom:"4px solid white"}}>
                    <div style={{borderBottom:"2px solid rgba(255,255,255,0.3)"}}>
                        <div className="username">
                            Username : <input type="text"/>
                        </div>
                    </div>
                    <div style={{borderBottom:"2px solid rgba(255,255,255,0.3)"}}>
                        <div className="username">
                            Password : <input type="password"/>
                        </div>
                    </div>
                    <div style={{borderBottom:"2px solid rgba(255,255,255,0.3)"}}>
                        <div className="username">
                            E-mail : <input type="email"/>
                        </div>
                    </div>
                    <div>
                        <div className="username">
                            auth-key : <input type="text"/>
                        </div>
                    </div>
                </div>
                <LoginButton>회원가입</LoginButton>
            </LoignFrame>
        </BackDiv2>
    )
}

export default SignUp