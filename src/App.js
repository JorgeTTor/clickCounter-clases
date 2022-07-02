
import './App.css';
import React from 'react';
import Button from './componentes/Button';
import Counter from './componentes/Counter';
import freeCodeCampLogo from './images/freecodecamp-logo.png';


class App extends React.Component {
  constructor() {
   super();
   this.state = {
    numClicks: 0
   };
   this.handleClick =  this.handleClick.bind(this);
   this.resetCounter = this.resetCounter.bind(this)
  }

  handleClick() {
    this.setState(({ numClicks }) => ( {numClicks: numClicks + 1}));

  }
  resetCounter() {
    this.setState(( { numClicks: 0}));
  }



  render(){
    return (
      <div className="App">
        <div className="freecodecamp-logo-container">
          <img 
            className="freecodecamp-logo"
            src={freeCodeCampLogo}
            alt="Logo de la Escuela"
          />
        </div>
        <div className="counter-container">
  
           <Counter numClicks = {this.state.numClicks} />
            <Button 
            text='Click'
            isClickButton={true}
            handleClick={this.handleClick} />
            <Button 
            text='Reset'
            isClickButton={false}
            handleClick={this.resetCounter}
             />
           </div>
      </div>
    );
  }
}

// function App() {

//   const [numClicks, setNumClicks ] = useState(0);

//   const handleClick = () => {
//     setNumClicks(numClicks + 1);
//     console.log('Click')
//   }
  
//   const resetCounter = () => {
//     setNumClicks(0);
//     console.log('Reset');
//   }

//   return (
//     <div className="App">
//       <div className="freecodecamp-logo-container">
//         <img 
//           className="freecodecamp-logo"
//           src={freeCodeCampLogo}
//           alt="Logo de la Escuela"
//         />
//       </div>
//       <div className="counter-container">

//          <Counter numClicks = {numClicks} />
//           <Button 
//           text='Click'
//           isClickButton={true}
//           handleClick={handleClick} />
//           <Button 
//           text='Reset'
//           isClickButton={false}
//           handleClick={resetCounter}
//            />
//          </div>
//     </div>
//   );
  


export default App;
