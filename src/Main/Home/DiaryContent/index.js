import {Content, DeleteBtn} from "../../style";
import LikeButton from './LikeButton'
import CommentButton from './CommentButton'
import DeleteButton from './DeleteButton'
import CreateComment from "./CreateComment"
import EditButton from "./EditButton";
import EditInputContent from "./EditInputContent";
import EditInputTitle from "./EditInputTitle"
import CreateContent from './CreateContent'
import { useRef } from "react";

const DiaryContent = ({Diary,setDiary}) => {
  const nextId = useRef(4)
  return (
    <>
      {Diary.map((v,i) =>
        <Content>
          <DeleteButton Id={v.id} Diary={Diary} setDiary={setDiary}/>
          <EditButton Id={v.id} Diary={Diary} setDiary={setDiary}/>
          <h5 className="title">{v.editflag !== false ? <EditInputTitle Id={v.id} Diary={Diary} setDiary={setDiary}/> : v.title}</h5>
          <hr style={{margin:"10px"}}></hr>
          <div className="contents">
            <div className="lefts">
              <img className="img"/><br/>
              <div style={{color:'#999999', fontSize:'10px'}}>{i+1}번째 일기</div>
            </div>
            <p className="content-p">
              <strong className="content-strong">@{v.user}</strong><br/>
              {v.editflag !== false ? <EditInputContent Id={v.id} Diary={Diary} setDiary={setDiary}/> : v.content}
            </p>
          </div>
          <LikeButton Id={v.id} Diary={Diary} setDiary={setDiary}/>
          <CommentButton Id={v.id} Diary={Diary} setDiary={setDiary} />
          <div style={{float:"right", block:"inline", color:"blue", width:"100px"}}>댓글 수 : {v.comment===null ? '0' : v.comment.length}</div>
          <div style={{float:"right", block:"inline", color:"red", width:"100px"}}>좋아요 : {v.like}</div>
          {v.commentView && 
          <>
            <ul className="commentList">
              {v.comment.map((v,i) => (
                <li key={i}>
                  <hr/>
                    <div style={{display:"flex", margin:"0px"}}>
                      <img className="commentImg"/>
                      <div style={{width:"100%"}}>
                        <DeleteBtn>삭제</DeleteBtn>
                        <strong>{v.user}</strong>
                        <div>{v.memo}</div>
                      </div>
                    </div>
                </li>
              ))}
            </ul>
            <CreateComment id={i+1} Diary={Diary} setDiary={setDiary}/>
          </>
          }
        </Content>
      )}
      <CreateContent nextId={nextId} Diary={Diary} setDiary={setDiary}/>
</>
  );
}

export default DiaryContent