import React, { useState } from 'react';
import './FAQ.css';


const FAQ = () => {

   

    const [activeIndex, setActiveIndex] = useState(null);


    const onTitleClick = (index) => {
        setActiveIndex(index)
    }


    return (
        <div class="cont-faq" id="faq">

    
            <div class="row py-5">
                <div class="col-lg-9 mx-auto text-white text-center">
                    <h1 class="display-4" style={{fontWeight:'500'}}>Frequently Asked Questions (FAQ)</h1>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-9 mx-auto">
          
                    <div id="accordionExample" class="accordion shadow">
                        <div class="card">
                    <div id="headingOne" class="card-header bg-white shadow-sm border-0">
                        <h2 class="mb-0">
                            <button type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne" class="btn btn-link text-dark font-weight-bold text-uppercase collapsible-link">Why should you complete all the activities (videos, quizzes etc.)?</button>
                        </h2>
                    </div>
                    <div id="collapseOne" aria-labelledby="headingOne" data-parent="#accordionExample" class="collapse">
                        <div class="card-body p-5">
                            <p class="font-weight-light m-0">The purpose of the various activities is to enable you to understand, reflect and apply the knowledge. Different activities are chosen for different modules based on the content. Your complete involvement in the program activities will help you to check your application of the content explained and if it is improving your overall well-being and reducing negative thoughts.</p>
                        </div>
                    </div>
                </div>

               
                <div class="card">
                    <div id="headingTwo" class="card-header bg-white shadow-sm border-0">
                        <h2 class="mb-0">
                            <button type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" class="btn btn-link collapsed text-dark font-weight-bold text-uppercase collapsible-link">How will you know that module is completed?</button>
                        </h2>
                    </div>
                    <div id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordionExample" class="collapse">
                        <div class="card-body p-5">
                            <p class="font-weight-light m-0">It is important for you to view all the activities. A mark in front of the activity will automatically reflect to show whether activity is completed or not.</p>
                        </div>
                    </div>
                </div>

            
                <div class="card">
                    <div id="headingThree" class="card-header bg-white shadow-sm border-0">
                        <h2 class="mb-0">
                            <button type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" class="btn btn-link collapsed text-dark font-weight-bold text-uppercase collapsible-link">What is the purpose of various quizzes?</button>
                        </h2>
                    </div>
                    <div id="collapseThree" aria-labelledby="headingThree" data-parent="#accordionExample" class="collapse">
                        <div class="card-body p-5">
                            <p class="font-weight-light m-0">The quiz is not given here to grade your knowledge about the contents but it is to give an opportunity to check your present knowledge and to keep a check on the progress in your knowledge and application due to the program</p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div id="headingFour" class="card-header bg-white shadow-sm border-0">
                        <h2 class="mb-0">
                            <button type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" class="btn btn-link collapsed text-dark font-weight-bold text-uppercase collapsible-link">How do I raise any Queries/Concerns/ suggestions during the course?</button>
                            </h2>
                    </div>
                    <div id="collapseFour" aria-labelledby="headingFour" data-parent="#accordionExample" class="collapse">
                        <div class="card-body p-5">
                            <p class="font-weight-light m-0">
                                If you have any queries related to the program material, activity or any other point related to the present program it can be put ahead in following ways
                                <ul>
                                    <li>
                                        There is a tab on queries and concern. You can directly post your queries over there. 
                                    </li>
                                    <li>
                                        Any Suggestions related to present program can be directly sent to program moderator
                                    </li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="card">
                    <div id="headingFive" class="card-header bg-white shadow-sm border-0">
                        <h2 class="mb-0">
                            <button type="button" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree" class="btn btn-link collapsed text-dark font-weight-bold text-uppercase collapsible-link">How many weeks will this program be spread over?</button>                        </h2>
                    </div>
                    <div id="collapseFive" aria-labelledby="headingFive" data-parent="#accordionExample" class="collapse">
                        <div class="card-body p-5">
                            <p class="font-weight-light m-0">The program is organized in six modules which will be spread over six weeks.</p>
                        </div>
                    </div>
                </div>

                
                <div class="card">
                    <div id="headingSix" class="card-header bg-white shadow-sm border-0">
                        <h2 class="mb-0">
                            <button type="button" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" class="btn btn-link collapsed text-dark font-weight-bold text-uppercase collapsible-link">What If I feel uncomfortable during the program?</button>
                        </h2>
                    </div>
                    <div id="collapseSix" aria-labelledby="headingSix" data-parent="#accordionExample" class="collapse">
                        <div class="card-body p-5">
                            <p class="font-weight-light m-0">This program is related to one of the most sensitive issues of our society therefore contents of this course may bring some kind of emotional changes in you. If you experience negative emotions during the course, you may contact the moderator through email immediately for further guidance.</p>
                        </div>
                    </div>
                </div>
                    </div>

            </div>
                </div>
            </div>
       

    );
}

export default FAQ