import { useState } from "react"
import { CREATECONTENTMODAL, FORMMODAL, CREATEBUTTON } from "../../../../style"

const CreateContentModal = ({nextId, Diary, setDiary, CreateModalOn}) => {
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const onChangeTitle = e => {
        setTitle(e.target.value)
    }
    const onChangeContent = e => {
        setContent(e.target.value)
    }
    const onSetDiary = () => {
        const newDiary = {
            title:title,
            user:"익명",
            content:content,
            like:0,
            comment:[],
            commentView:false,
            editflag:false,
            id:nextId.current
        }
        nextId.current += 1;
        setTitle("");
        setContent("");
        setDiary(Diary.concat(newDiary))
        CreateModalOn(false)
    }
    return (
        <>
            <div onClick={CreateModalOn} style={{top:"0%", left:"0px", position:"fixed",width:"100%", height:"100%", background:"rgba(0,0,0,0.3)"}}/>
            <CREATECONTENTMODAL>
                <div style={{fontSize:"20px"}}>새로운 일기</div>
                <div onClick={CreateModalOn} style={{position:"absolute", textAlign:"center", width:"50px",marginLeft:"85%", borderRadius:"10px" ,border:"1px solid black", background:"lightgray", cursor:"pointer"}}>닫기</div>
                <FORMMODAL>
                    <div style={{fontSize:"20px",marginBottom:"5%"}}>
                        제목 : <input onChange={onChangeTitle} style={{width:"70%", fontSize:"15px"}} type="text"/><br/>
                    </div>
                    <div style={{fontSize:"20px",marginBottom:"20px"}}>
                        내용 : <input onChange={onChangeContent} style={{width:"70%", fontSize:"15px"}} type="text"/>
                    </div>
                </FORMMODAL>
                <CREATEBUTTON onClick={onSetDiary}>작성</CREATEBUTTON>
            </CREATECONTENTMODAL>
        </>
    )
}
export default CreateContentModal