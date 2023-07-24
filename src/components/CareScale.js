function CareScale({scaleValue, careType}){
  const range = [1, 2, 3]
  const scaleType = careType === 'light' ? '☀️' : '💧'

  return (
    <div onClick={alertCareType(careType)}>
      {range.map((rangeElem) => 
        scaleValue >= rangeElem ? <span key={rangeElem.toString()}>{scaleType}</span> : null 
      )}
    </div>
  )
}

function alertCareType(careType){
  //console.log(careType);
}

export default CareScale