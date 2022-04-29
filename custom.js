
const Survey = require('survey-core');

// The derived question type
Survey.ComponentCollection.Instance.add({
  name: "custom",
  title: "Custom",
  questionJSON: {
    type: "text",
  },
});

//Survey with one question of the derived type
const s = {
  "title": "Demo Survey",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page",
    "elements": [
     {
      "type": "custom",
      "name": "q1",
      "title": "This is a question of custom type",
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