import React from 'react'
import Highlight from '../module/highlight'

const Description = () => {

  return(
    <React.Fragment>
      <Highlight driverText={"DriverT"} />
      <div className="ex-box">
        <div className="guide-status">상태</div>
        <div className="guide-name">이름</div>
        <div className="guide-date">날짜</div>
      </div>
    </React.Fragment>
  )
}

export default Description