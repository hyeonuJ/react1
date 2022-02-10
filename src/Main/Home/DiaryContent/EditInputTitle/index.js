import { useState } from "react"

const EditInputTitle = ({Id,Diary,setDiary}) => {
    const [title,onTitle] = useState(Diary[Id-1].title)
    const onChangeTitle = e => {
        onTitle(e.target.value)
    }
    const onKeydownTitle = e => {
        if(e.keyCode == 13) EditTitle()
    }
    const EditTitle = () => {
        setDiary(Diary.map(v => 
            v.id === Id ? {...v, title:title, editflag:false} : v
        )
    )}
    return (
        <>
            <input onChange={onChangeTitle} onKeyDown={onKeydownTitle} value={title}/>
            <button onClick={EditTitle}>작성</button>
        </>
    )
}

export default EditInputTitle