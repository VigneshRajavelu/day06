1) 
class Movie {
    constructor(title, studio, rating = "PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
  
    static getPG(movies) {
      return movies.filter(movie => movie.rating === "PG");
    }
  }
  const movies = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "R"),
    new Movie("Movie 3", "Studio 3", "PG-13"),
  ];
  const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");
  console.log(casinoRoyale); 
  const pgMovies = Movie.getPG(movies);
  console.log(pgMovies);

  2)

class Circle {
    constructor(radius = 1.0, color = "red") {
      this.radius = radius;
      this.color = color;
    }
    getRadius() {
      return this.radius;
    }
    setRadius(radius) {
      this.radius = radius;
    }
    getColor() {
      return this.color;
    }
  
    setColor(color) {
      this.color = color;
    }
    toString() {
      return Circle[radius=${this.radius},color=${this.color}];
    }
    getArea() {
      return Math.PI * this.radius * this.radius;
    }
    getCircumference() {
      return 2 * Math.PI * this.radius;
    }
  }
  
  // Example 
  const circle1 = new Circle();
  console.log(circle1.toString()); 
  console.log(circle1.getArea());
  console.log(circle1.getCircumference());

  3)
class Person {
    constructor(name, age, location) {
      this.name = name;
      this.age = age;
      this.location = location;
    }
    displayDetails() {
      console.log(Name: ${this.name}, Age: ${this.age}, Location: ${this.location});
    }
  }
// Example
const person1 = new Person("vignesh", 22, "neyveli");
person1.displayDetails();

  4)
  class UberPriceCalculator {
      constructor(baseRate, distanceRate, timeRate) {
        this.baseRate = baseRate;
        this.distanceRate = distanceRate;
        this.timeRate = timeRate;
      }
      calculatePrice(distance, time) {
        const price = this.baseRate + this.distanceRate * distance + this.timeRate * time;
        return price;
      }
    }
    
    // Example
    const uberCalculator = new UberPriceCalculator(5.0, 1.5, 0.2);
    const rideDistance = 10; // in miles
    const rideTime = 20; // in minutes
    
    const totalPrice = uberCalculator.calculatePrice(rideDistance, rideTime);
    console.log(Uber Price: Rs${totalPrice.toFixed(2)});