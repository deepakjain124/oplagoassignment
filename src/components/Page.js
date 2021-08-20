import React, { useState, useEffect } from 'react'
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Card from './Card'
import './Page.css'

const Page = () => {
    return ( <
        >
        <
        div className = "main-contaner" >
        <
        div className = "containers" >
        <
        div className = "top" >
        <
        div className = "left" >
        <
        button > ⚪LIVE < /button>{' '} <
        span >
        <
        h1 > Upcoming Live Coaching < /h1>{' '} <
        /span>{' '} <
        /div>{' '} <
        /div>{' '} <
        /div>{' '} <
        /div>{' '} <
        Carousel plugins = {
            [
                'infinite',
                'arrows',
                {
                    resolve: slidesToShowPlugin,

                    options: {
                        numberOfSlides: 3,
                    },
                },
            ]
        }
        breakpoints = {
            {
                640: {
                    plugins: [
                        'infinite',
                        'arrows',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 1,
                            },
                        },
                    ],
                },
                900: {
                    plugins: [
                        'infinite',
                        'arrows',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 1,
                            },
                        },
                    ],
                },
                1200: {
                    plugins: [
                        'infinite',
                        'arrows',
                        {
                            resolve: slidesToShowPlugin,
                            options: {
                                numberOfSlides: 2,
                            },
                        },
                    ],
                },
            }
        } >
        <
        Card background = "#658949"
        time = "Batch closes in 1 day"
        heading = "UPSC IAS GS 2022 Foundation live Coaching"
        classes = "380"
        question = "1500"
        notes = "200" /
        >
        <
        Card background = "#658949"
        time = "Batch closes in 3 day"
        heading = "CIVIL Assistant Engineer Live Coaching Batch 2"
        classes = "230"
        question = "5000"
        notes = "85" /
        >
        <
        Card background = "#658949"
        time = "Batch closes in 6 days"
        heading = "BPSC Foundation Live Coaching (Pre + Main)"
        classes = "220"
        question = "6000"
        notes = "100" /
        >
        <
        Card background = "#495189"
        time = "5 days left to enroll"
        heading = "IBPS PO & SBI PO Live Coaching in English Batch"
        classes = "240"
        question = "1000"
        notes = "120" /
        >
        <
        Card background = "#495189"
        time = "5 days left to enroll"
        heading = "CIVIL Junior Engineer Live Coaching Batch 2"
        classes = "200"
        question = "5000"
        notes = "80" /
        >
        <
        Card background = "#658949"
        time = "5 days left to enroll"
        heading = "UPSC CDS -2 2021 Live Coaching Batch 3"
        classes = "220"
        question = "6000"
        notes = "100" /
        >
        <
        /Carousel>{' '} <
        />
    )
}
export default Page