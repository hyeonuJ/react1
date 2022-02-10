import { BottomBtn } from "../../../style"

const LikeButton = ({Id, Diary, setDiary}) => {
    const funcLike = () => {
        setDiary(Diary.map(v =>
            v.id === Id ? {...v, like:v.like+1} : v
        ))
    }
    return (
        <BottomBtn onClick={funcLike}>좋아요</BottomBtn>
    )
}

export default LikeButton