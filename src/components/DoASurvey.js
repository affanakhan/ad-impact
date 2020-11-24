// src/components/Profile.js
import React from "react";
import * as Survey from "survey-react";
import "survey-react/survey.css";
import axios from "axios";
import {useAuth0} from "../react-auth0-spa";

const DoASurvey = () => {
  var surveyJSON = {
    "pages": [
     {
      "name": "page3",
      "elements": [
       {
        "type": "text",
        "name": "question3",
        "title": "Please type your full name below."
       }
      ],
      "title": "Survey Part 1",
      "description": "This survey will take you a maximum of 15 minutes. We will ask you to select some products and answer a few questions."
     },
     {
      "name": "page1",
      "elements": [
       {
        "type": "imagepicker",
        "name": "question1",
        "minWidth": "",
        "maxWidth": "200",
        "title": "Please review and select 5 products below.",
        "hideNumber": true,
        "isRequired": true,
        "validators": [
         {
          "type": "expression"
         }
        ],
        "choices": [
         {
          "value": "lion",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
         },
         {
          "value": "giraffe",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
         },
         {
          "value": "panda",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
         },
         {
          "value": "camel",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
         },
         "item1",
         "item2",
         "item3",
         "item4",
         "item5",
         "item6",
         "item7",
         "item8",
         "item9",
         "item10",
         "item11",
         "item12",
         "item13",
         "item14",
         "item15"
        ],
        "colCount": 4,
        "imageFit": "fill",
        "multiSelect": true
       },
       {
        "type": "html",
        "name": "question2"
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question4",
        "title": "Gender",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "Male"
         },
         {
          "value": "item2",
          "text": "Female"
         },
         {
          "value": "item3",
          "text": "Other"
         }
        ],
        "hasOther": true,
        "otherText": "Prefer not to say"
       },
       {
        "type": "radiogroup",
        "name": "question5",
        "title": "How much of your shopping do you do online?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "0%"
         },
         {
          "value": "item2",
          "text": "25%"
         },
         {
          "value": "item3",
          "text": "50%"
         },
         {
          "value": "item4",
          "text": "75%"
         }
        ],
        "hasOther": true,
        "otherText": "100%"
       },
       {
        "type": "text",
        "name": "question6",
        "title": "What websites do you generally shop at?",
        "isRequired": true
       },
       {
        "type": "image",
        "name": "question8",
        "imageLink": "https://i.ibb.co/dgqqHqF/mathq.jpg"
       },
       {
        "type": "radiogroup",
        "name": "question7",
        "title": "Which tile fits the question mark above?",
        "isRequired": true,
        "choices": [
         {
          "value": "item1",
          "text": "1"
         },
         {
          "value": "item2",
          "text": "2"
         },
         {
          "value": "item3",
          "text": "3"
         },
         {
          "value": "item4",
          "text": "4"
         },
         {
          "value": "item5",
          "text": "5"
         },
         {
          "value": "item6",
          "text": "6"
         },
         {
          "value": "item7",
          "text": "7"
         }
        ],
        "hasOther": true,
        "otherText": "8"
       }
      ]
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "imagepicker",
        "name": "question10",
        "minWidth": "",
        "maxWidth": "200",
        "title": "Please review and select 5 products below.",
        "hideNumber": true,
        "isRequired": true,
        "validators": [
         {
          "type": "expression"
         }
        ],
        "choices": [
         {
          "value": "lion",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
         },
         {
          "value": "giraffe",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
         },
         {
          "value": "panda",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
         },
         {
          "value": "camel",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
         },
         "item1",
         "item2",
         "item3",
         "item4",
         "item5",
         "item6",
         "item7",
         "item8",
         "item9",
         "item10",
         "item11",
         "item12",
         "item13",
         "item14",
         "item15"
        ],
        "colCount": 4,
        "imageFit": "fill",
        "multiSelect": true
       },
       {
        "type": "html",
        "name": "question11"
       }
      ]
     }
    ]
   }
   const {user} = useAuth0();

   const sendDataToServer = (survey) => {
    //send Ajax request to your web server.
    // JSON.stringify(survey.data);
    localStorage.setItem('userEmail', user.email)
    axios.post("http://localhost:5000/doasurvey", {
      data: survey.data,
      email: user.email
    })
    .then(res => {
      console.log(res)
    })
    .catch(err => {
      console.log(err)
    })

}

  return (
    <div>
            <Survey.Survey json={ surveyJSON } onComplete={ sendDataToServer } />
    </div>
  );
};

export default DoASurvey;