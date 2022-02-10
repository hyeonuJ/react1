import { useState } from "react"
import { CREATECONTENT } from "../../../style"
import CreateContentModal from './CreateContentModal/index'

const CreateContent = ({nextId,Diary,setDiary}) => {
    const [CreateModal, setCreateModal] = useState(false)
    const CreateModalOn = () => {
        setCreateModal(!CreateModal)
    }
    return (
        <>
            <CREATECONTENT onClick={CreateModalOn}>글 작성</CREATECONTENT>
            {CreateModal && <CreateContentModal nextId={nextId} Diary={Diary} setDiary={setDiary} CreateModalOn={CreateModalOn}/>}
        </>
    )
}

export default CreateContent