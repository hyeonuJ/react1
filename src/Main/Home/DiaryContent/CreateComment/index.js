import { useState } from "react"

const CreateComment = ({id,Diary,setDiary}) => {
    const [commentInput, setCommentInput] = useState('')
    const onChangeComment = e => {
      setCommentInput(e.target.value)
    }
    const onClickComment = e => {
      if(commentInput!==''){
        const comments={user:"익명", memo:commentInput}
        setDiary(Diary.map(v =>
          parseInt(v.id) === parseInt(e.currentTarget.id) ? {...v, comment:v.comment.concat(comments)} : v 
        ))
        Diary.map(v => console.log(v.comment))
        setCommentInput('')
      }
    }
    return (
        <>
            <input className="commentInput" type="text" placeholder="댓글 입력" onChange={onChangeComment} value={commentInput}/>
            <button id={id} onClick={onClickComment}>작성</button>
        </>
    )
}

export default CreateComment