import React from 'react'
import './FAQ.css'
import BackHeader from '../BackHeader/BackHeader'

const FAQ = ({ loggedIn, onLogin, user, setUser,updatedModuleStatus,changeUpdatedModuleStatus }) => {
    return (
        <div>
            <BackHeader
            loggedIn={loggedIn}
                onLogin={onLogin}
                user={user}
                setUser={setUser}
            updatedModuleStatus={updatedModuleStatus}
            changeUpdatedModuleStatus={changeUpdatedModuleStatus} />
        <div className='faq-main'>
            
            <div className='faq-cont'>
                <h2 className="card-title" style={{ color: 'black' }}>Frequently Asked Questions (FAQ)</h2>
                   
                <div class="mt-4">
                    <div class="accordion" id="accordion" role="tablist">
                                
                                
                        <div class="card">
                            <div class="card-header" role="tab" id="heading-1">
                                <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapse-1" aria-expanded="false" aria-controls="collapse-3" data-abc="true">
                                    Why should you complete all the activities (videos, quizzes etc.)?</a> </h6>
                            </div>
                            <div id="collapse-1" class="collapse" role="tabpanel" aria-labelledby="heading-1" data-parent="#accordion">
                                <div class="card-body">
                                    <div class="mb-0">
                                        The purpose of the various activities is to enable you to understand, reflect and apply the knowledge. Different activities are chosen for different modules based on the content. Your complete involvement in the program activities will help you to check your application of the content explained and if it is improving your overall well-being and reducing negative thoughts.
                                        </div>
                                </div>
                            </div>
                        </div>
                        


                        <div class="card">
                            <div class="card-header" role="tab" id="heading-2">
                                <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapse-2" aria-expanded="false" aria-controls="collapse-2" data-abc="true">
                                    How will you know that module is completed?
                                    </a> </h6>
                            </div>
                            <div id="collapse-2" class="collapse" role="tabpanel" aria-labelledby="heading-2" data-parent="#accordion">
                                <div class="card-body">
                                    <div class="mb-0">
                                    It is important for you to view all the activities. A mark in front of the activity will automatically reflect to show whether activity is completed or not. 

                                            </div>
                                </div>
                            </div>
                        </div>
                        <div class="card">
                            <div class="card-header" role="tab" id="heading-3">
                                <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapse-3"
                                    aria-expanded="false" aria-controls="collapse-3" data-abc="true">
                                    What is the purpose of various quizzes?
                                    </a> </h6>
                            </div>
                            <div id="collapse-3" class="collapse" role="tabpanel" aria-labelledby="heading-3" data-parent="#accordion">
                                <div class="card-body">
                                    <div class="mb-0">
                                    The quiz is not given here to grade your knowledge about the contents but it is to give an opportunity to check your present knowledge and to keep a check on the progress in your knowledge and application due to the program
                                         </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="card">
                            <div class="card-header" role="tab" id="heading-4">
                                <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapse-4" aria-expanded="false" aria-controls="collapse-4" data-abc="true">
                                    How do I raise any Queries/Concerns/ suggestions during the course?</a> </h6>
                            </div>
                            <div id="collapse-4" class="collapse" role="tabpanel" aria-labelledby="heading-4" data-parent="#accordion">
                                <div class="card-body">
                                    <div class="mb-0">
                                        If you have any queries related to the program material, activity or any other point related to the present program it can be put ahead in following ways
                                        <ol>
                                            <li>
There is a tab called 'Contact Us' on home page. You can directly email your queries over there. 
                                            </li>
                                            <li>
Any Suggestions related to present program can be directly sent to program moderator via email using 'Contact Us' tab.
                                            </li>

                                        </ol>



                                        </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" role="tab" id="heading-5">
                                <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapse-5" aria-expanded="false" aria-controls="collapse-5" data-abc="true">
                                    How many weeks will this program be spread over? </a> </h6>
                            </div>
                            <div id="collapse-5" class="collapse" role="tabpanel" aria-labelledby="heading-5" data-parent="#accordion">
                                <div class="card-body">
                                    <div class="mb-0">
                                        The program is organized in six modules which will be spread over six weeks. 
                                        </div>
                                </div>
                            </div>
                        </div>

                        <div class="card">
                            <div class="card-header" role="tab" id="heading-6">
                                <h6 class="mb-0"> <a class="collapsed" data-toggle="collapse" href="#collapse-6" aria-expanded="false" aria-controls="collapse-6" data-abc="true">
                                    What If I feel uncomfortable during the program?</a> </h6>
                            </div>
                            <div id="collapse-6" class="collapse" role="tabpanel" aria-labelledby="heading-6" data-parent="#accordion">
                                <div class="card-body">
                                    <div class="mb-0">
                                        This program is related to one of the most sensitive issues of our society therefore contents of this course may bring some kind of emotional changes in you. If you experience negative emotions during the course, you may contact the moderator through email immediately for further guidance.  
                                        </div>
                                </div>
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