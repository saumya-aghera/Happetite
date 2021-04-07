import React from 'react'
import './Affirmations.css'
import { List } from 'semantic-ui-react'


function Affirmations() {
    return (
        <>
        <div className="affirm-main">
            <div className="affirm-comt">
                <h2>Affirmations</h2>
                <p><u>Instructions:</u> It is very important to identify and acknowledge the positive things in you and make them known as well. The statements below are things that we know but never really take the time out to acknowledge and embrace. We all need to feel good about ourselves and therefore positive affirmations help us do so. Your task is to read out these affirmations to yourself starting from right now till the end of this week at least once a day for 5 mins. As you are reading these statements out, make sure you are not in a hurry and can dedicate 5 mins to the exercise daily. Choose a time when you are free and relatively relaxed. Remember to embrace the positivity!</p>
                <List bulleted className="list-affirm">
                    <List.Item>I deserve to be happy</List.Item>
                    <List.Item>I love my body and my mind deeply</List.Item>
                    <List.Item>Today, I will reflect only on the good things in life</List.Item>
                    <List.Item>I forgive myself for all past mistakes</List.Item>
                    <List.Item>I hold no grudges against anyone</List.Item>
                    <List.Item>Whatever has happened, is for the good</List.Item>
                    <List.Item>I will live in the present</List.Item>
                    <List.Item>From today, I will abandon old habits and embrace new and better ones</List.Item>
                    <List.Item>I am grateful for everything I have got so far</List.Item>
                    <List.Item>I am a fighter, and I will overcome this</List.Item>
                    <List.Item>I will love myself more from today</List.Item>
                    <List.Item>Everything is okay and I am at peace with myself</List.Item>
                </List>

            </div>
           
        </div>
            
        </>
    )
}

export default Affirmations
