import { BackDiv, DiaryButton, DiaryDiv} from "./style";
import DiaryContent from "./DiaryContent/index";
import { useState } from "react";


const Main = () => {
  const [Diary, setDiary] = useState([
    {
      title:"제목",
      user:"정혀누",
      content:"내용",
      like:0,
      comment:[{user:"익명",memo:"댓글입니다"},{user:"야호",memo:"대대댓댓글"},{user:"무야호",memo:"뒛귤"}],
      commentView:false,
      id:1
    },
    {
      title:"테스트1",
      user:"무야호",
      content:"으아아",
      like:0,
      comment:[],
      commentView:false,
      id:2
    }
  ])
  return (
    <>
      <BackDiv>
        <DiaryDiv>
          일기 게시판
          <DiaryButton>로그인</DiaryButton>
          <DiaryButton style={{marginLeft:"1rem"}}>회원가입</DiaryButton>
        </DiaryDiv>
        <DiaryContent Diary={Diary} setDiary={setDiary}/>
      </BackDiv>
</>
  );
}

export default Main;
