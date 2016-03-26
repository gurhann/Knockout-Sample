// tablodaki tek bir satırı ifade eder
function SeatReservation(name, initialMeal) {
  var self = this;
  self.name = name;
  self.meal = ko.observable(initialMeal);
}

function ReservationViewModel() {
  var self = this;
  //yemekler
  self.availableMeals = [
    {mealName: "Standart (sandwich)", price : 0},
    {mealName: "Premium (lobster)", price : 34.95},
    {mealName: "Ultimate (whole zebra)", price : 290}
  ];

  //başlangıc datası
  self.seats = ko.observableArray([
    new SeatReservation("Gürhan", self.availableMeals[0]),
    new SeatReservation("Nida Nur", self.availableMeals[1]),
    new SeatReservation("Elif Nur", self.availableMeals[2])
  ]);

  self.addSeat = function() {
    self.seats.push(new SeatReservation("", self.availableMeals[0]));
  }
}

ko.applyBindings(new ReservationViewModel());
