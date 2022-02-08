import { BottomBtn } from "../../style"

const CommentButton = ({Id, Diary,setDiary}) => {
    const onCommentView = () => {
        setDiary(
            Diary.map(Diarys =>
                Diarys.id===Id ? {...Diarys, commentView:!Diarys.commentView} : Diarys)
        )
    }
    return (
        <BottomBtn onClick={onCommentView}>댓글</BottomBtn>
    )
}

export default CommentButton