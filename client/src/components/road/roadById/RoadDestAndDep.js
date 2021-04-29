import React from 'react'
import './roadDesAndDep.css'

function RoadDestAndDep({ road_id }) {
    return (
            <div className="road_dd">
                <div className="road_dd_fields">
                    <p>08:00</p>
                    <div className="step">
                        <div className="v-stepper">
                            <div className="circle"></div>
                            <div className="line"></div>
                        </div>
                    </div>
                    <p>{road_id.departure}</p>
                </div>
                <div className="road_dd_fields">
                    <p>08:00</p>
                        <div className="step">
                            <div className="v-stepper">
                                <div className="circle_bottom"></div>
                                <div className="line_bottom"></div>
                            </div>
                        </div>
                    <p>{road_id.arrive}</p>
                </div>
            </div>
    )
}

export default RoadDestAndDep
