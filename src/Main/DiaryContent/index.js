import {Content} from "../style";
import LikeButton from './LikeButton'
import CommentButton from './CommentButton'
import { useState } from "react";

const DiaryContent = ({Diary,setDiary}) => {
  const [commentInput, setCommentInput] = useState('')
  const onChangeComment = e => {
    setCommentInput(e.target.value)
  }
  const onClickComment = e => {
    if(commentInput!==''){
      const comments={user:"ㅋㅋ", memo:commentInput}
      setDiary(Diary.map(v =>
        parseInt(v.id) === parseInt(e.currentTarget.id) ? {...v, comment:v.comment.concat(comments)} : v 
      ))
      Diary.map(v => console.log(v.comment))
      setCommentInput('')
    }
  }
  return (
    <>
      {Diary.map((v,i) =>
        <Content>
          <h5 className="title">{v.title}</h5>
          <hr style={{margin:"10px"}}></hr>
          <div className="contents">
            <div className="lefts">
              <img className="img"/><br/>
              <div style={{color:'#999999', fontSize:'10px'}}>{i+1}번째 일기</div>
            </div>
            <p className="content-p">
              <strong className="content-strong">{v.user}</strong><br/>
              서점에서 베스트셀러 목록을 봤다<br/>
              그렇구나 {v.content}
            </p>
          </div>
          <LikeButton/><CommentButton Id={i+1} Diary={Diary} setDiary={setDiary}/>
          <div style={{float:"right", block:"inline", color:"blue", width:"100px"}}>댓글 수 : {v.comment===null ? '0' : v.comment.length}</div>
          <div style={{float:"right", block:"inline", color:"red", width:"100px"}}>좋아요 : {v.like}</div>
          {v.commentView && 
          <>
            <ul className="commentList">
              {v.comment.map((v,i) => (
                <li>
                  <hr/>
                    <div style={{display:"flex", margin:"0px;"}}>
                      <img className="commentImg"/>
                      <div>
                        <strong>{v.user}</strong>
                        <div>{v.memo}</div>
                      </div>
                    </div>
                </li>
              ))}
            </ul>
              <input className="commentInput" type="text" placeholder="댓글 입력" onChange={onChangeComment} value={commentInput}/>
              <button id={i+1} onClick={onClickComment}>작성</button>
          </>
          }
        </Content>
      )}
</>
  );
}

export default DiaryContent