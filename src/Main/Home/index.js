import { BackDiv, DiaryButton, DiaryDiv, BackNav} from "../style"
import DiaryContent from "./DiaryContent/index";
import { useState } from "react";
import {Link} from "react-router-dom"

const Main = () => {
  const [Diary, setDiary] = useState([
    {
      title:"제목",
      user:"정혀누",
      content:"내용",
      like:0,
      comment:[{user:"익명",memo:"댓글입니다"},{user:"야호",memo:"대대댓댓글"},{user:"무야호",memo:"뒛귤"}],
      commentView:false,
      editflag:false,
      id:1
    },
    {
      title:"테스트1",
      user:"무야호",
      content:"으아아",
      like:0,
      comment:[],
      commentView:false,
      editflag:false,
      id:2
    },
    {
      title:"테스트2",
      user:"무야호",
      content:"으아아",
      like:0,
      comment:[],
      commentView:false,
      editflag:false,
      id:3
    }
  ])
  return (
    <>
      <BackNav>
        <div>익명<button>내 정보</button><button>환경설정</button></div>
      </BackNav>
      <BackDiv>
        <DiaryDiv>
          일기 게시판
          <Link to="login"><DiaryButton>로그인</DiaryButton></Link>
          <Link to="SignUp"><DiaryButton style={{marginLeft:"1rem"}}>회원가입</DiaryButton></Link>
        </DiaryDiv>
        <DiaryContent Diary={Diary} setDiary={setDiary}/>

      </BackDiv>
</>
  );
}

export default Main;
