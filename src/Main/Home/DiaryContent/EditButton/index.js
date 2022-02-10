import { useCallback } from "react"
import { memo } from "react"
import { EditBtn } from "../../../style"

const EditButton = memo(({Id, Diary,setDiary}) => {
    const EditMemo = () => {
        setDiary(Diary.map(v => 
            v.id === Id ? {...v, editflag:!v.editflag} : v
        ))
    }
    return (
        <EditBtn onClick={EditMemo}>글 수정</EditBtn>
    )
})

export default EditButton