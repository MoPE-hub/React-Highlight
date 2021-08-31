import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom'
import DriverTextIndex from "./highlight-desc"

const Highlight = (props) => {

  const [counter, setCounter] = useState({
    number: 0
  })

  const [btnClick, setBtnClick] = useState({
    btn: false
  })

  /**
   * @props <Highlight driverText={"string"} />
   * @props string
   * */
  const driverText = props.driverText

  const opacityDim = document.getElementsByClassName('dim')
  const btnBlock = document.getElementsByClassName('driver-description-button-box')
  const descBlock = document.getElementsByClassName('driver-description-text')
  const dim = document.getElementsByClassName('driver-highlight-back')
  const textBox = document.getElementsByClassName('driver-description-box')

  const defaultTarget = document.getElementsByClassName(DriverTextIndex[driverText][0].elementClass)
  const target = document.getElementsByClassName(DriverTextIndex[driverText][counter.number].elementClass)

  useEffect(() => {
    document.addEventListener('load', function() {
      ReactDOM.render(
        target, document.getElementById('root'))
    }, false)
    defaultBoxPosition()
  }, [counter])

  useEffect(() => {
    if(btnClick.btn === true){
      target[0].classList.toggle('driver-highlight-text')
    }
  }, [btnClick])

  const defaultBoxPosition = () => {
    // 가이드 highlight
    dim[0].style.position = "absolute"
    dim[0].style.top = target[0].getBoundingClientRect().top + 'px'
    dim[0].style.left = target[0].getBoundingClientRect().left + 'px'
    dim[0].style.width = target[0].getBoundingClientRect().width + 'px'
    dim[0].style.height = target[0].getBoundingClientRect().height + 'px'
    dim[0].style.backgroundColor = "white"
    dim[0].style.zIndex = "1003"
  }

  const defaultDescPosition = () => {
    // 가이드 설명 (우측 아래 고정)
    textBox[0].style.display = "block"
    textBox[0].style.position = "absolute"
    textBox[0].style.bottom = "5%"
    textBox[0].style.right = "5%"
    textBox[0].style.width = "30%"
    textBox[0].style.height = "auto"
    textBox[0].style.backgroundColor = "white"
    textBox[0].style.zIndex = "1003"
  }

  const openButton = () => {
    setCounter({
      ...counter,
      number: 0
    })
    setBtnClick({
      ...btnClick,
      btn: true
    })

    dim[0].style.display = "block"
    dim[0].style.position = "absolute"
    dim[0].style.top = defaultTarget[0].getBoundingClientRect().top + 'px'
    dim[0].style.left = defaultTarget[0].getBoundingClientRect().left + 'px'
    dim[0].style.width = defaultTarget[0].getBoundingClientRect().width + 'px'
    dim[0].style.height = defaultTarget[0].getBoundingClientRect().height + 'px'
    dim[0].style.backgroundColor = "white"
    dim[0].style.zIndex = "1003"

    descBlock[0].style.display = "block"
    btnBlock[0].style.display = "block"
    opacityDim[0].style.display = "block"

    defaultDescPosition()
  }

  const closeButton = () => {
    setCounter({
      ...counter,
      number: 0
    })
    btnBlock[0].style.display = "none"
    opacityDim[0].style.display = "none"
    descBlock[0].style.display = "none"
    textBox[0].style.display = "none"
    dim[0].style.display = "none"
    target[0].classList.toggle('driver-highlight-text')
  }

  const nextButton = () => {
    setCounter({
      ...counter,
      number: counter.number + 1
    })
    setBtnClick({
      ...btnClick,
      btn: true
    })
    target[0].classList.toggle('driver-highlight-text')

    defaultBoxPosition()
  }

  const prevButton = () => {
    setCounter({
      ...counter,
      number: counter.number - 1
    })
    setBtnClick({
      ...btnClick,
      btn: true
    })

    target[0].classList.toggle('driver-highlight-text')
    defaultBoxPosition()
  }

  return (
    <React.Fragment>
      <div className="driver-box">
        <div className="driver-start-button">
          <div>
            <button onClick={() => openButton()} className=""></button>
          </div>
        </div>
      </div>

      <div className="driver-description-box">
        <div className="driver-description-text">
          <div className="">
            <span className="triangle-white"></span>
            <div className="driver-title">
              {
                DriverTextIndex[driverText][counter.number].title
              }
            </div>
            <div className="driver-desc">
              {
                DriverTextIndex[driverText][counter.number].description
              }
            </div>
          </div>
          <div className="driver-description-button-box">
            <div className="driver-description-button">
              <div>
                <button onClick={closeButton} className="btn btn-white driver-highlight-text">닫기</button>
              </div>
              <div>
                <button onClick={prevButton} className="btn btn-white driver-highlight-text m-r-20" disabled={counter.number === 0}>이전</button>
                <button onClick={nextButton} className="btn btn-white driver-next-button driver-highlight-text" disabled={counter.number === DriverTextIndex[driverText].length - 1}>다음</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="driver-highlight-back"></div>
    </React.Fragment>
  )
}

export default Highlight