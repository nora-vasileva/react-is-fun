import React, {Component} from 'react'
import ReactDOM from 'react-dom'

let SkiData = {
    total: 50,
    powder: 20,
    backcountry: 10,
    goal: 100
}

const getPercent = decimal => {
    return decimal*100 + '%'
}

const calcGoalProgress = (total, goal) => {
    return getPercent(total/goal)
}

const SkiDayCounter = ({total, backcountry, powder, goal}) => {
    return (
        <section>
                <div>
                    <p>Total Days: {total}</p>
                </div>
                <div>
                    <p>Powder Days: {powder}</p>
                </div>
                <div>
                    <p>Backcountry Days: {backcountry}</p>
                </div>
                <div>
                    <p>Goal Progress: {calcGoalProgress(total, goal)}</p>
                </div>
            </section>
    )
}

// class SkiDayCounter extends Component {
//     getPercent = decimal => {
//         return decimal * 100 + '%'
//     }

//     calcGoalProgress = (total, goal) => {
//         return this.getPercent(total/goal)
//     }

//     render() {
//         const {total, powder, backcountry, goal} = this.props;
//         return (
//             <section>
//                 <div>
//                     <p>Total Days: {total}</p>
//                 </div>
//                 <div>
//                     <p>Powder Days: {powder}</p>
//                 </div>
//                 <div>
//                     <p>Backcountry Days: {backcountry}</p>
//                 </div>
//                 <div>
//                     <p>Goal Progress: {this.calcGoalProgress(total, goal)}</p>
//                 </div>
//             </section>
//         )
//     }
// }

ReactDOM.render(
    <SkiDayCounter total={SkiData.total} powder={SkiData.powder} backcountry={SkiData.backcountry} goal={SkiData.goal} />,
    document.getElementById('root')
)