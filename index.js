let eastWest = [
  '1st Avenue',
  '2nd Avenue',
  '3rd Avenue',
  'Lexington Avenue',
  'Park',
  'Madison Avenue',
  '5th Avenue'
];


class Driver {
  constructor(name, startDate) {
    this.name = name
    startDate =  new Date()
        this.startDate = startDate
  }
  yearsExperienceFromBeginningOf(year){
    let startDate =  new Date(1995)
    let endDate =  new Date(year)
    let x = endDate - startDate
 return x
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
        }

   blocksTravelled() {
          let x = Math.abs(beginningLocation.vertical - endingLocation.vertical)
          let y = Math.abs(beginningLocation.horizontal-endingLocation.horizontal)
          let z = x + y
          return z
  }


  }
