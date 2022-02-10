import { useState } from "react"

const EditInputContent = ({Id,Diary,setDiary}) => {
    const [content,onContent] = useState(Diary[Id-1].content)
    const onChangeContent = e => {
        onContent(e.target.value)
    }
    const onKeydownContent = e => {
        if(e.keyCode == 13) EditContent()
    }
    const EditContent = () => {
        setDiary(Diary.map(v => 
            v.id === Id ? {...v, content:content, editflag:false} : v
        )
    )}
    return (
        <>
            <input onChange={onChangeContent} onKeyDown={onKeydownContent} value={content}/>
            <button onClick={EditContent}>작성</button>
        </>
    )
}

export default EditInputContent