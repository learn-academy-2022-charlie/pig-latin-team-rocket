import React, { Component } from 'react'
import './App.css'
import butcherPig from './assets/butcherPig.jpeg'

class App extends Component{
  constructor(props){
    super(props)
    // the state object holds information that can be displayed to the user and updated throughout the program
    this.state = {
      // "phrase" is the text entered by the user - right now there are test words hard coded to make the process of testing your code faster and easier
      // ACTION ITEM: when you are ready for your full user experience, delete the test words so phrase is assigned an empty string
      phrase: "alpha through yummy squeal queen fry",
      // "phraseTranslated" is what the user will see appear on the page as Pig Latin, it starts as the preset message and updates when your user clicks the "submit" button
      phraseTranslated: "This is where your translated sentence will appear."
    }
  }

  // The "myPigLatinCodeHere" function is where you will put your logic to convert the sentence entered by the user to Pig Latin

  myPigLatinCodeHere = () => {
    // the variable "userInput" will contain the text input from the user modified into an array of words
    // no need to change this variable
    let userInput = this.state.phrase.split(" ")
    // console.log("userInput:", userInput)

    // now that we have an array of words, we can map over the array and access each word
    let translatedWordsArray = userInput.map(currentWord => {
      // ACTION ITEM: use "currentWord" as a starting point for your code
      console.log("currentWord:", currentWord)

      let vowelsArray = currentWord.split("").filter(vowel => {
        return vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u" || vowel === "y"
      })
      console.log("vowelsArray:", vowelsArray)

      // your code here!

      
//  ### Rules of Pig Latin
// - For words beginning with a vowel, add "way" to the end.
// - For words beginning with one or more consonants, move all of the first consecutive consonants to the end, and add "ay".
// - If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where "qu" doesn't come first!
// - "y" is treated like a vowel in appropriate circumstances.

      // Remember: console.log is your friend :)
      
      // alpha 
      // does the first letter match a, e, i, o, u,
      // if it does
      // then output alpha + "way"
      let yIndex = currentWord.indexOf("y")
      console.log(yIndex)
      let qIndex = currentWord.indexOf("qu")
      console.log(qIndex)
      let firstVowelIndex = currentWord.indexOf(vowelsArray[0])
        
        if(currentWord[0] === vowelsArray[0] ){
           currentWord = currentWord + "way"
        } else if(qIndex !== -1){
          currentWord = currentWord.substring(qIndex + 2) + currentWord.substring(0, qIndex + 2) + "ay"
        } else if(firstVowelIndex !== 0 ) {
          currentWord = currentWord.substring(firstVowelIndex) + currentWord.substring(0,firstVowelIndex) +"ay"
        } else if(yIndex > 0 && yIndex !== 2  ){
          currentWord = currentWord.substring(yIndex) + currentWord.substring(0 ,yIndex) + "ay"
        } 
        
      // queen
      // does the u have a q before it
      // identify the position of u and use that position to see if its a q in front of u
      // if there is q in front the u
      // seperate the word at the letter after the u and add quay to the end of the new word
      // eenquay
      
      // through
      // identify position of o
      // if o is not the first letter 
      // identify how many letters are before it
      // take those letters and add ay to the end of the word
      // oughthray
      
      // yummy
      // does the word start with a special vowel
      // if so find the position of that letter
      // take the posistioning of the letter and move to the end of word
      // ad ay to the end of the word as well
      // ummyyay
      
      // squeal
      // does the consonant include qu 
      // if so does it have letters before it
      // if it does the u stay in its position and we move s and q to the end with ay added
      // uealsqay
      
      // fry
      // is y biend treated like a vowel in this phrase
      // if so move consonants that are in front of y to the end of y
      // add ay
      // yfray

      // ACTION ITEM: change the value of currentWord to the name of whatever variable you made containing your Pig Latin'd word
      return currentWord
    })


    // joining the array back to a string of translated words
    // no need to change this variable
    let translatedWords = translatedWordsArray.join(" ")
    console.log("translatedWords:", translatedWords)

    // the setState method will take your information from "translatedWords" and update the state object that is displayed to the user
    // no need to change this method
    this.setState({phraseTranslated: translatedWords})
  }

  restartGame = () => {
    // this method restarts the game by setting the original state
    // ACTION ITEM: when you are ready for your full user experience, delete the test words in phrase so that is assigned an empty string
    this.setState({
      phrase: "alpha through yummy squeal queen fry",
      phraseTranslated: "This is where your translated sentence will appear."
    })
  }

  // no need to modify this method
  setUpPreventDefault = (e) => {
    // this method prevents React from refreshing the page unnecessarily
    e.preventDefault()
    this.myPigLatinCodeHere()
  }

  // no need to modify this method
  handleInput = (e) => {
    // this method takes the input and saves the value in this.state.phrase so we can use the input in our program
    this.setState({phrase: e.target.value})
  }

  render() {
    return (
      <>
        <h1>Pig Latin Translator</h1>
        <img
          src={butcherPig} class="animated"
          alt="pig with butcher cut names in pig latin"
          className="butcherPig"
        />
        <div className="inputArea">
          <h4>Enter phrase to be translated:</h4>
          {/* user input field - every DOM event that happens in the input will call the handleChange method and update state */}
          <input
            type="text"
            className="userInput"
            onChange={this.handleInput}
            value={this.state.phrase}
          />
          <br />
          {/* button that called the setUpPreventDefault method which calls the myPigLatinCodeHere method */}
          <button onClick={this.setUpPreventDefault}>Submit</button>
          <button onClick={this.restartGame}>Clear</button>
        </div>
        <p>{this.state.phraseTranslated}</p>
        <footer>Coded by MrRobot & Davon</footer>
      </>
    )
  }
}

export default App
