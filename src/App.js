import React, { Component } from "react"
import Hello, { HelloForm } from "./hello.js"
// import Test from './features/components/test.js'

class App extends Component {

  render() {
    return(
      <div align="center">
        {/* <hello.js/> */}
        {/* <Test/> */}
        <Hello />
        {/* <HelloForm /> */}
      </div>
    )
  }

}

export default App

// import React, { Component } from 'react';
// import MyImage from "./MyImage.js"
// import Hello from './hello.js';
// class App extends Component {

//   constructor() {
//     super()
//     this.state = {
//       titleText: "",
//       imageUrlArrays: [
//         /*"https://thedirectorsedition.com/wp-content/uploads/2019/03/dendrobium-xp-2-concept_100695078_h-905x613.jpg",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLHtP9_hFHKf4HrXwnegQNL_oS3-v5uH8kKlrz_LT1DJ04W7CB",
//         "https://images.financialexpress.com/2018/02/rsz_498716.jpg"*/
//       ]
//     }
//   }

//   render () { 
//     const { titleText, imageUrlArrays } = this.state
//     return (
      
//       <div>
//         <Hello text={this.state.titleText}/>
//         <div className="">
//           <div className="col-sm-12 col-md-10">
//             <div className="text-center text-light">
              
//             </div>
//           </div>
//         </div>
//         <div className="row bg-light p-3">
//           <div className="col-sm-12 col-md-10">
//             <div className="p-2 h4 text-danger">
//               { titleText }
//             </div>
//             <div className="d-flex flex-row flex-wrap">   
//               { imageUrlArrays.map((v,i) => <MyImage url={v} key={i} />) }          
//             </div>
//           </div>
//         </div>
//       </div>
//     );
    
//   }

// }

// export default App;
