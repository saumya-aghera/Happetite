import * as Survey from "survey-react";
import ReactDOM from 'react-dom';

Survey.StylesManager.applyTheme("modern");

var surveyJSON = {"pages":[{"name":"page1","elements":[{"type":"checkbox","name":"You are really looking forward to attending a friends wedding in a few weeks. You are out taking a brisk walk, trip over some broken up sidewalk and break your leg. Do you…","visible":false,"isRequired":true,"readOnly":true,"choices":["Immediately call the bride and groom to cancel.","Decide to wait a few days and see how you feel before canceling.","Let the bride and groom know that you are feeling optimistic about your recovery and plan to be there."]}]},{"name":"page2","elements":[{"type":"checkbox","name":"You apply for a job that you think you're highly qualified for. Two weeks have passed and you have heard nothing. Do you...","visible":false,"isRequired":true,"choices":["Feel depressed and worry that you won't ever have a job.","Decide to give it another couple of weeks before looking into other opportunities. You’ll wait it out.","Tell yourself that you have skills and potential and that a job will come eventually and keep looking."]}]},{"name":"our birthday is a week away and no one has mentioned trying to make any plans to take you out or celebrate. Do you...","elements":[{"type":"checkbox","name":"Your birthday is a week away and no one has mentioned trying to make any plans to take you out or celebrate. Do you...","choices":["Assume people forgot or don't care.","Hope that if you wait a little longer, someone will mention it.","Assume that people will want to celebrate you and start talking with them about plans for your birthday."]}]},{"name":"page3"},{"name":"page4","elements":[{"type":"checkbox","name":"You have an opportunity to be hired for a much higher paying job that is out of the range of your normal experience. Do you...","choices":["Decide there is no way you're capable and say no.","Feel uncertain about your skills and ask other people to convince you that you might be able to pull this off.","Feel certain that you could undertake and succeed at something new as long as you really tried and got help as needed."]}]}]}

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}

ReactDOM.render(
    <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />, document.getElementById("surveyContainer"));