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

        avenueToInteger( avenue ) {
          return eastWest.indexOf( avenue );
        }

   blocksTravelled() {
          let x = this.avenueToInteger(this.endingLocation.horizontal) - this.avenueToInteger(this.beginningLocation.horizontal)
          let y = this.endingLocation.horizontal - this.beginningLocation.horizontal
            return  Math.abs(x) +  Math.abs(y)
      
  }



  }
