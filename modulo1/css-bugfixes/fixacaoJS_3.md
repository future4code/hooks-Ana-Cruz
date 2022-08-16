function calculaNota(ex, p1, p2) {
  const mediaPond = (ex*1 + p1*2 + p2*3)/(1+2+3)
  if(mediaPond>=9){
    return "A"
  } else if(mediaPond<9 && mediaPond>=7.5){
    return "B"
  } else if(mediaPond<7.5 && mediaPond>=6){
    return "C"
  } else {
    return "D"
  }
}