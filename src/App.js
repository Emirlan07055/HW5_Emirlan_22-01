// import React from "react";
// class Test extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {s1: 0}
//     }
//
//
//     buttonHandler = () => {
//         let val = this.state.s1
//         val++
//         this.setState({s1: val})
//     }
//
//     render() {
//         return (
//             <div>
//                 <div>
//                     <button onClick={this.buttonHandler}>Push</button>
//                 </div>
//                 <div>
//                     {this.state.s1}
//                 </div>
//             </div>
//         );
//     }
// }
// export default Test

/************************************/

// import React from "react";
//
// class Clock extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {date: new Date()};
//     }
//
//     componentDidMount() {
//         this.timerID = setInterval(
//             () => this.tick(),
//             1000
//         );
//     }
//
//     componentWillUnmount() {
//         clearInterval(this.timerID);
//     }
//     tick() {
//         this.setState({
//             date: new Date()
//         });
//     }
//
//
//     render() {
//         return (
//             <div>
//                 <h1>Время</h1>
//                 <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
//             </div>
//         );
//     }
// }
//
// export default Clock
