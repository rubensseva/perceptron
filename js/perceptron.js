function predict(coords, weights, threshold) {
  const reducer = (accumulator, currentCoord, i) => accumulator + (currentCoord * weights[i]);
  const result = coords.reduce(reducer, 0.0)
  return result > threshold ? 1.0 : 0.0
}



function trainWeights(numTimes, coordsArr, weights, l_rate, threshold) {
  for (let i = 0; i < numTimes; i++) {
    coordsArr.forEach(coordsObj => {
      const predicted = predict(coordsObj.coords, weights, threshold)
      const error = coordsObj.color - predicted
      coordsObj.coords.forEach((coord, i) => {
        weights[i] += error * l_rate * coord
      })

    })
  }
}


