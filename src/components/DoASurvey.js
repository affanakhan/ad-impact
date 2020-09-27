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
      "name": "page1",
      "elements": [
       {
        "type": "imagepicker",
        "name": "Pick 5 Images from Below",
        "titleLocation": "top",
        "descriptionLocation": "underTitle",
        "choices": [
         {
          "value": "lion",
          "text": "price, name, description, rating",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
         },
         {
          "value": "giraffe",
          "text": "rating",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
         },
         {
          "value": "panda",
          "text": "rating",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
         },
         {
          "value": "camel",
          "text": "rating",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
         },
         {
          "value": "tiger",
          "text": "rating",
          "imageLink": "https://c402277.ssl.cf1.rackcdn.com/photos/18134/images/priority_species_small/Medium_WW226365.jpg?1574452099"
         },
         {
          "value": "leopard",
          "text": "rating",
          "imageLink": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.worldwildlife.org%2Fspecies%2Famur-leopard&psig=AOvVaw0VbeicGyrHYbiIVnjE4eOo&ust=1600881029710000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjUtNug_esCFQAAAAAdAAAAABAH"
         },
         {
          "value": "wahle",
          "text": "rating",
          "imageLink": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.worldwildlife.org%2Fspecies%2Fwhale&psig=AOvVaw03UKr98cidL9xmyg7DhTog&ust=1600881062950000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDZmuug_esCFQAAAAAdAAAAABAD"
         }
        ],
        "multiSelect": true
       }
      ],
      "title": "Selection 1"
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "imagepicker",
        "name": "question3",
        "title": "question4",
        "titleLocation": "top",
        "descriptionLocation": "underTitle",
        "choices": [
         {
          "value": "lion",
          "text": "price, name, description, rating",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/lion.jpg"
         },
         {
          "value": "giraffe",
          "text": "rating",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/giraffe.jpg"
         },
         {
          "value": "panda",
          "text": "rating",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/panda.jpg"
         },
         {
          "value": "camel",
          "text": "rating",
          "imageLink": "https://surveyjs.io/Content/Images/examples/image-picker/camel.jpg"
         },
         {
          "value": "tiger",
          "text": "rating",
          "imageLink": "https://c402277.ssl.cf1.rackcdn.com/photos/18134/images/priority_species_small/Medium_WW226365.jpg?1574452099"
         },
         {
          "value": "leopard",
          "text": "rating",
          "imageLink": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.worldwildlife.org%2Fspecies%2Famur-leopard&psig=AOvVaw0VbeicGyrHYbiIVnjE4eOo&ust=1600881029710000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCOjUtNug_esCFQAAAAAdAAAAABAH"
         },
         {
          "value": "wahle",
          "text": "rating",
          "imageLink": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.worldwildlife.org%2Fspecies%2Fwhale&psig=AOvVaw03UKr98cidL9xmyg7DhTog&ust=1600881062950000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDZmuug_esCFQAAAAAdAAAAABAD"
         }
        ],
        "multiSelect": true
       }
      ],
      "title": "Selection 2"
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "text",
        "name": "question1",
        "title": "What is your name?"
       },
       {
        "type": "text",
        "name": "question2",
        "title": "What is your favorite?"
       }
      ]
     }
    ]
   }

   const {user} = useAuth0();
   localStorage.setItem('userEmail', user.email)

   const sendDataToServer = (survey) => {
    //send Ajax request to your web server.
    // JSON.stringify(survey.data);
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