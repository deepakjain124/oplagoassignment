import React from 'react'
import image from '../photos/main.jpeg'

const Card = (props) => {
    return ( <
        > { ' ' } <
        >
        <
        div className = "card" >
        <
        img src = { image }
        alt = "loading" / >
        <
        div className = "days"
        style = {
            { background: props.background } } >
        <
        p >
        <
        i class = "far fa-clock" > < /i> {props.time}{' '} <
        /p>{' '} <
        /div>{' '} <
        div className = "heading" >
        <
        h1 > { props.heading } < /h1>{' '} <
        /div>{' '} <
        hr / >
        <
        div className = "classes" >
        <
        p >
        <
        i class = "fab fa-youtube-square YT" > < /i> {props.classes}+ Live
        Classes { ' ' } <
        /p>{' '} <
        /div>{' '} <
        div className = "questions" >
        <
        p >
        <
        i class = "far fa-bookmark BM" > < /i> {props.questions} + Questions{' '} <
        /p>{' '} <
        p >
        <
        i class = "far fa-sticky-note NOTES" > < /i> {props.notes} + Notes{' '} <
        /p>{' '} <
        /div>{' '} <
        /div>{' '} <
        />{' '} <
        />
    )
}
export default Card