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
    margin-left:auto;
    margin-right:0.1rem;
    border-radius:0.25rem;
    border-color:white;
    background:purple;
    color:white;
    font-size:20px;
    height:40px;
    :hover{
        background:white;
        border-color:gray;
        color:black;
        transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out, color .3s ease-in-out;
    }
`

export const DiaryDiv = styled.h3`
    display:flex;
    align-items: center;
    color:white;
    border-radius:0.25em;
    box-shadow:0 0.125rem 0.25rem #bdbebd;
    background-color:#8977ad;
    height:60px;
    padding:20px;
`
export const Content = styled.div`
    margin-top:1rem;
    margin-bottom:1rem;
    padding:1rem;
    background-color: rgba(255, 255, 255, 1);
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
`