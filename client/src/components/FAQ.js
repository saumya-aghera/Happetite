import React, { useState } from 'react'

const items = [
  {
  title: "Q1. Why should you complete all the activities (videos, quizzes etc.)?",
  content:'The purpose of the various activities is to enable you to understand, reflect and apply the knowledge. Different activities are chosen for different modules based on the content. Your complete involvement in the program activities will help you to check your application of the content explained and if it is improving your overall well-being and reducing negative thoughts.'
  },
  
  {
  title: 'Q2. How will you know that module is completed?',
  content:'It is important for you to view all the activities. A mark in front of the activity will automatically reflect to show whether activity is completed or not. '
  },

  {
  title: 'Q3. What is the purpose of various quizzes? ',
  content:'The quiz is not given here to grade your knowledge about the contents but it is to give an opportunity to check your present knowledge and to keep a check on the progress in your knowledge and application due to the program'

    },
  {
  title: 'Q4. How do I raise any Queries/Concerns/ suggestions during the course? ',
  content:`If you have any queries related to the program material, activity or any other point related to the present program it can be put ahead in following ways


1.	There is a tab on queries and concern. You can directly post your queries over there. 
2.	Any Suggestions related to present program can be directly sent to program moderator
`

    },
  {
  title: 'Q5. How many weeks will this program be spread over? ',
  content:'The program is organized in six modules which will be spread over six weeks. '

    },
  {
  title: 'Q6. What If I feel uncomfortable during the program?',
  content:'This program is related to one of the most sensitive issues of our society therefore contents of this course may bring some kind of emotional changes in you. If you experience negative emotions during the course, you may contact the moderator through email immediately for further guidance.  '

    }
  

]

const FAQ = () => {

   

    const [activeIndex, setActiveIndex] = useState(null);


    const onTitleClick = (index) => {
        setActiveIndex(index)
    }

    const renderedItems = items.map((item,index) => {
        const active = index === activeIndex ? 'active' : '';
        
        return (
            <React.Fragment key={item.title} >
              
                <div
                    className={`title ${active}`}
                    onClick={() => { onTitleClick(index) }}
                >
                <i className="dropdown icon"></i>
                {item.title}
            </div>
                <div className={`content ${active}`}>
                <p>{ item.content }</p>
                    </div>
                
            </React.Fragment>
        )
    })

    return (
        <div className='ui styled accordion'>
            {renderedItems}
        </div>
    )
}

export default FAQ
