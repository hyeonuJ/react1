import { useCallback } from "react"
import { memo } from "react"
import { DeleteBtn } from "../../../style"

const DeleteButton = memo(({Id, Diary,setDiary}) => {
    const DeleteContents = useCallback(() => {
        setDiary(Diary.filter(v => v.id !== Id))
    },[Id,Diary,setDiary])
    return (
        <DeleteBtn onClick={DeleteContents}>글 삭제</DeleteBtn>
    )
})

export default DeleteButton