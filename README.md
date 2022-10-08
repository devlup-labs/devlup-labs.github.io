# DevlUp Labs Portfolio
<a href="https://devlup-labs.github.io"><img src="https://img.shields.io/badge/Maintained%20under-Winter%20of%20Code%2C%20DevlUp%20Labs-brightgreen"/></a>

Portfolio of the Open-Source Community at IIT Jodhpur.

## Project Setup

1. Fork this repository!

2. Clone this repository and setup a remote to the original repository.

3.Make sure node.js is installed else install it.

4. Open up your IDE and in your terminal run the following commands:

 * npm install

 * Open up a second terminal and cd into the 'data' folder and run=> py -3 -m http.server --bind 0.0.0.0 5000
 
 * npm run serve

5. The project should now be running locally!

## Lints and fixes files

* npm run lint

## Workflow

#### 1. Projects,Profiles and Timeline Tabs
* Using Google Sheets functionality we have set-up a connection from every sheet to it's respective tabs.
* Each tab has it's own set of fields in which data has been fed via Google Sheets and gets updated automatically and instantly on changing any value.
* For image storage a link to a Google Drive image is advised,in case of the original image url changing.


#### 2. Blog and Videos Tabs
* The content for the Blog tab was sourced from our own [Medium Page](https://medium.com/devlup-labs).
* The content for the Videos tab was sourced from our own [Youtube Channel](https://www.youtube.com/channel/UCFaRxxB8-BB5GXH-wlwGqIw).
* [RSS-JSON Converter](https://api.rss2json.com) was used to convert the incoming feeds from medium and youtube to JSON from which required data could be used.


#### 3. Contact Us Form
* The action of the form is connected to a Google form, which has a spreadsheet along with it. 
* On clicking Submit button, a function is run which a mail is sent to DevlUps Labs , updating the spreadsheet attached in Google form with user's data to get back quickly to the user!

## Built With

* HTML/CSS 
* [Vuetify](https://vuetifyjs.com/en/) - Material Design Framework
* [Vue JS](https://vuejs.org/) - Javascript framework used

## Collaborators
|Name|Year|Role|
|--|--|--|
|[Ajat Prabha](https://github.com/ajatprabha)|Final|Mentor|
|[Anshul Ahuja](https://github.com/anshulahuja98)|Pre-Final|Mentor|
|[Soham Sonawane](https://github.com/killbotXD)|Sophomore|Mentor|
|[Tanuj Agarwal](https://github.com/Tanuj22)|Sophomore|Mentor|
|[Dnyaneshwari Sonone](https://github.com/Dnyaneshwari-Sonone)|Pre-Final|Developer|
|[Jash Patel](https://github.com/Jashpatel1)|Sophomore|Developer|
|[Sandesh Singh](https://github.com/Sandesh1013)|Freshman|Developer|
|[Samarth Potdar](https://github.com/samarth-1729)|Freshman|Developer|
