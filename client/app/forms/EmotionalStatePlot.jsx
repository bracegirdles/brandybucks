import React from 'react';
import ReactDOM from 'react-dom';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, 
         VictoryStack, VictoryGroup } from 'victory';
import { VictoryContainer, VictoryArea, VictoryLine } from 'victory';
import { getAllEmotionalStateData } from '../helper/formHelpers.js';
import eS from './emotionalSpectrumData.js';


// ----------------------------------------------------------------------------
// Plot of Emotional State Data 
// ----------------------------------------------------------------------------
class EmotionalStatePlot extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    getAllEmotionalStateData(this.props.id).then((data) => {
      console.log('data: ', data);

      let y = data.data.map((dataPoint) => {
        return (+(new Date(dataPoint.date)))/(1000*60*60*24); 
      });

      console.log(y);
      
      this.setState({
        data: data.data.map((dataPoint) => {
          console.log('hiiiii: ', dataPoint.noon_mood_score);
          return {time: (((+(new Date(dataPoint.date)))/(1000*60*60*24)) - y[0]),
                  morning_mood_score: dataPoint.morning_mood_score,
                  noon_mood_score: dataPoint.noon_mood_score,
                  end_mood_score: dataPoint.end_mood_score
                 };
        })
      });

      console.log('new data: ', this.state.data);
    })
  }

  render() { 
    if (!this.state.data) {
      return null;
    }

    return (
      <div>
        <h1>Emotional State vs Time Chart</h1>
        <VictoryContainer 
          style={{border: "1px solid #ccc", width: "100%", height: "auto"}}
          width={640}
          height={480}
        >
          <VictoryChart
            style={{border: "1px solid #ccc", width: "100%", height: "auto"}}
            width={640}
            height={480}
            domainPadding={20}
          >
            <VictoryAxis
              tickFormat={(x) => (`${x}`)}
              tickCount={this.state.data.length}
              label="Time (Days)"
            />
            <VictoryAxis
              dependentAxis={true}
              crossAxis={false}
              tickValues={[String.fromCharCode(eS[8].hexCode.surr1, eS[8].hexCode.surr2),
                           String.fromCharCode(eS[7].hexCode.surr1, eS[7].hexCode.surr2),
                           String.fromCharCode(eS[6].hexCode.surr1, eS[6].hexCode.surr2),
                           String.fromCharCode(eS[5].hexCode.surr1, eS[5].hexCode.surr2),
                           String.fromCharCode(eS[4].hexCode.surr1, eS[4].hexCode.surr2),
                           String.fromCharCode(eS[3].hexCode.surr1, eS[3].hexCode.surr2),
                           String.fromCharCode(eS[2].hexCode.surr1, eS[2].hexCode.surr2),
                           String.fromCharCode(eS[1].hexCode.surr1, eS[1].hexCode.surr2),
                           String.fromCharCode(eS[0].hexCode.surr1, eS[0].hexCode.surr2),
                          ]}
              tickCount={9}
              label="Happiness"
            />
            <VictoryGroup
              colorScale={"warm"}
            >
              <VictoryLine
                data={this.state.data}
                x="time"
                y="morning_mood_score"
                animate={{duration: 2000, delay: 250}}
              />

              <VictoryLine
                data={this.state.data}
                x="time"
                y="noon_mood_score"
                animate={{duration: 2000, delay: 250}}
              />
              
              <VictoryLine
                data={this.state.data}
                x="time"
                y="end_mood_score"
                animate={{duration: 2000, delay: 250}}
              />              
              
            </VictoryGroup>
          </VictoryChart>
        </VictoryContainer>  
      </div>
    );
  }

}  
export default EmotionalStatePlot;

//scale="time" for victory axis
// tickFormat={(y) => (`${String.fromCharCode(eS.filter((e) => e.score === y)[0].hexCode.surr1, eS.filter((e) => e.score === y)[0].hexCode.surr2)}`)}
// // ----------------------------------------------------------------------------
// // Stacked Bar Chart
// // ----------------------------------------------------------------------------
// const data2012 = [
//   {quarter: 1, earnings: 13000},
//   {quarter: 2, earnings: 16500},
//   {quarter: 3, earnings: 14250},
//   {quarter: 4, earnings: 19000}
// ];

// const data2013 = [
//   {quarter: 1, earnings: 15000},
//   {quarter: 2, earnings: 12500},
//   {quarter: 3, earnings: 19500},
//   {quarter: 4, earnings: 13000}
// ];

// const data2014 = [
//   {quarter: 1, earnings: 11500},
//   {quarter: 2, earnings: 13250},
//   {quarter: 3, earnings: 20000},
//   {quarter: 4, earnings: 15500}
// ];

// const data2015 = [
//   {quarter: 1, earnings: 18000},
//   {quarter: 2, earnings: 13250},
//   {quarter: 3, earnings: 15000},
//   {quarter: 4, earnings: 12000}
// ];

// class Main extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Stacked Bar Chart</h1>
//         <VictoryContainer 
//           style={{border: "1px solid #ccc"}}
//           viewBox={"0, 0, width, height"}
//           width={"2"}
//           height={"1"}
//         >
//           <VictoryChart
//             theme={VictoryTheme.material}
//             domainPadding={20}
//           >
//             <VictoryAxis
//               tickValues={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
//             />
//             <VictoryAxis
//               dependentAxis={true}
//               tickFormat={(x) => (`$${x / 1000}k`)}
//             />
//             <VictoryStack
//               colorScale={"warm"}
//             >
//               <VictoryBar 
//                 data={data2012}
//                 x={"quarter"}
//                 y={"earnings"}
//               />
//               <VictoryBar 
//                 data={data2013}
//                 x={"quarter"}
//                 y={"earnings"}
//               />
//               <VictoryBar 
//                 data={data2014}
//                 x={"quarter"}
//                 y={"earnings"}
//               />
//               <VictoryBar 
//                 data={data2015}
//                 x={"quarter"}
//                 y={"earnings"}
//               />
//             </VictoryStack>
//           </VictoryChart>
//         </VictoryContainer>  
//       </div>
//     );
//   }
// }

// const app = document.getElementById('app');
// ReactDOM.render(<Main />, app);

// // ----------------------------------------------------------------------------


// // ----------------------------------------------------------------------------
// // Area Chart
// // ----------------------------------------------------------------------------

// class Main2 extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Area Chart</h1>
//         <VictoryContainer
//           style={{border: "1px solid #ccc"}}
//           viewBox={"0, 0, width, height"}
//           width={"2"}
//           height={"1"}
//         >  
//           <VictoryChart
//             theme={VictoryTheme.material}
//             domainPadding={20}
//           >
//             <VictoryAxis
//               tickValues={["September", "October", "November", "December"]}
//             />
//             <VictoryAxis
//               dependentAxis={true}
//               tickFormat={(x) => (`$${x / 1000}k`)}
//             />
//               <VictoryArea 
//                 data={[
//                   {month: "September", profit: 35000, loss: 2000},
//                   {month: "October", profit: 42000, loss: 8000},
//                   {month: "November", profit: 55000, loss: 5000},
//                   {month: "December", profit: 75000, loss: 7000},
//                 ]}
//                 x="month"
//                 y={(datum) => datum.profit - datum.loss}
//               />
//           </VictoryChart>
//         </VictoryContainer>    
//       </div>
//     );
//   }
// }

// const app2 = document.getElementById('app2');
// ReactDOM.render(<Main2 />, app2);
// // ----------------------------------------------------------------------------