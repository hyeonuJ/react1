import styled from "styled-components";

export const BackDiv = styled.div`
    background-color:lightGray;
    min-height:100em;
    padding:10px;
    width: 100%;
    padding-right: 3em;
    padding-left: 3em;
    margin-right: auto;
    margin-left: auto;
`

export const DiaryButton = styled.button`
    margin-right:0.1rem;
    border-radius:0.25rem;
    border-color:white;
    background:purple;
    color:white;
    font-size:20px;
    height:40px;
    text-decoration:none;
    :hover{
        background:white;
        border-color:gray;
        color:black;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out, color .3s ease-in-out;
    }
    a{
        text-decoration:none;
    }
`

export const DiaryDiv = styled.h3`
    display:flex;
    align-items: center;
    color:white;
    border:4px solid white;
    border-radius:0.25em;
    box-shadow:0 0.125rem 0.25rem #bdbebd;
    background-color:#8977ad;
    height:70px;
    padding:20px;
    a:first-child{
        margin-left:auto;
    }
`
export const Content = styled.div`
    margin-top:1rem;
    margin-bottom:1rem;
    padding:1rem;
    background-color: rgba(255, 255, 255, 0.9);
    border-radius:10px;
    box-shadow:0 0.125rem 0.25rem #bdbebd;
    .title{
        font:
        color:black;
        padding-bottom:0.5rem;
        margin-bottom:0;
        font-weight:700;
    }
    .contents{
        display:flex;
        color: #6c757d;
        padding-top:1rem;
    }
    .lefts{
        width:90px;
        border-right:1px dotted gray;
        margin-right:20px
    }
    .img{
        width:70px;
        height:70px;
        border:1px solid gray;
        border-radius:0.25rem;
        text-align:center;
        margin-right:2rem;
        margin-bottom:10px;
    }
    .commentImg{
        width:40px;
        height:40px;
        border:1px solid gray;
        border-radius:0.25rem;
        text-align:center;
        margin-right:2rem;
    }
    .content-p{
        padding-bottom:1rem;
        margin-bottom: 0;
        border-bottom:0;
    }
    .content-strong{
        display:block
    }
    .commentList{
        list-style:none;
        margin-left:20px;
        margin-right:50px;
    }
`

export const BottomBtn = styled.button`
    margin-left:auto;
    margin-right:10px;
    margin-top:10px;
    width:100px;
    border:1px solid gray;
    border-radius:4px;
    :hover{
        background-color:rgba(255,0,0,0.1);
        transition:background-color 0.2s ease-in-out;
    }
`

export const LoignFrame = styled.div`
    margin-left:auto;
    margin-right:auto;
    margin-top:20px;
    padding:20px;
    background-color:#8977ad;
    width:50%;
    height:400px;
    color:white;
    text-align:center;
    font-size:3em;
    border:5px solid white;
    border-radius:20px;
    box-shadow:0 0.125rem 0.25rem #bdbebd;
    .username{
        width:90%;
        position:flex;
        font-size:20px;
        margin-top:20px;
        margin-bottom:20px;
        margin-left:auto;
        margin-right:auto;
        input{
            height:35px;
            font-size:15px;
        }
    }
    input{
        float:right;
        width:50%;
        border:1px solid black;
        border-radius:5px;
    }
`

export const LoginButton = styled.button`
    margin-top:50px;
    width:90%;
    height:50px;
    border-radius:30px;
    font-size:20px;
    color:white;
    background:purple;
    :hover{
        background:white;
        border-color:gray;
        color:black;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out, color .3s ease-in-out;
    }
`

export const DeleteBtn = styled.button`
    float:right;
    background:lightgray;
    border:0;
    color:white;
    :hover{
        background:rgba(255,0,0,0.3)
    }
`

export const EditBtn = styled.button`
    float:right;
    margin-right:20px;
    background:lightgray;
    border:0;
    color:white;
    :hover{
        background:rgba(255,0,0,0.3)
    }
`

export const CREATECONTENT = styled.button`
    margin-left:30%;
    padding:0px;
    position:fixed;
    height:12%;
    width:30%;
    border:5px solid purple;
    border-radius:40px;
    top:86%;
    font-size:30px;
    :hover{
        background:#D5C2EE;
        width:34%;
        margin-left:28%;
        transition:background 0.2s ease-in-out,width 0.2s ease-in-out,margin-left 0.2s ease-in-out;
    }
`

export const CREATECONTENTMODAL = styled.div`
    display:flex;
    position:fixed;
    top:15%;
    width:50%;
    height:50%;
    margin-left:20%;
    background:white;
    border:3px solid purple;
    justify-content:center;
    padding:10px;
`

export const FORMMODAL = styled.div`
    position:absolute;
    width:90%;
    height:50%;
    border-top:3px solid gray;
    border-bottom:3px solid gray;
    padding-top:10px;
    margin-top:10%;
    margin-bottom:10%;
    text-align:center;
`

export const CREATEBUTTON = styled.button`
    top:80%;
    position:absolute;
    width:30%;
    font-size:20px;
    color:white;
    background:purple;
    border:5px solid white;
    box-shadow:0 0.25rem 0.25rem #bdbebd;
    :hover{
        color:purple;
        background:white;
        border:5px solid purple;
    }
`