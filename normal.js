
const Survey = require('survey-core');

//Survey with one question of type text
const s = {
  "title": "Demo Survey",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page",
    "elements": [
     {
      "type": "text",
      "name": "q1",
      "title": "This is a question of known type text",
      "isRequired": true,
     },
    ]
   }
  ],
  "showTitle": false
 }


const survey = new Survey.SurveyModel(s);

survey.onValueChanging.add((sender, options) => {
  console.log('onValueChanging is triggered')
  console.table({ oldValue: options.oldValue, value: options.value}) 
})
survey.onValueChanged.add((sender, options) => {
  console.log('onValueChanged is triggered');
})

// Get the question manually for reproduction sake
const q = survey.getAllQuestions()[0];

q.value = "abc"