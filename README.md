# **Highlight 사용방법**


####위로 뜨길 원하는 컨텐츠의 최상위 부모에 'Highlight' className추가. (main태그X)

####Highlight가 나왔으면 하는 component에 추가 및 원하는 위치에 className추가
````js
import Highlight from 'Highlight폴더 상대경로'

const test = () => {
  return(
    <React.Fragment>
      <Highlight HighlightText={"string"} />
      <div clssName="guide-status">준비중</div>
      <div clssName="guide-name">아무개</div>
    </React.Fragment>  
  )
}
````

####Highlight-desc 폴더 안에 배열형식의 jsx파일 생성
````js
const HighlightT = [
  {
    elementClass: 'guide-status',
    title: '상태',
    description: 'elementClass는 highlight가 됬으면 하는 부분의 className.'
  },
  {
    elementClass: 'guide-name',
    title: '이름',
    description: '다르면 오류발생.'
  },
]

export default HighlightT
````

####Highlight-desc 폴더내 index에 위의 파일을 추가
````js
// 한개일 때 
import HighlightT from './HighlightText'

export default {HighlightT}

// 두개 이상일 때
import HighlightT from './HighlightText'
import HighlightT2 from './HighlightText2'

export default {HighlightT, HighlightT2}
````

###!주의사항
◦ header, main, footer와 형제인 위치에
````html
<div className="dim"></div>
````
이 없으면 _에러_
<br />
◦ 1번에서 props로 넘어오는 값과 3번에서 export해주는 파일명이 다르면 _에러_<br/>
◦ 배열에 적은 elementClass와 같은 className이 없으면 _에러_

