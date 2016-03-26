//viewmodeli temsil ediyor
function AppViewModel() {
    this.firstName = ko.observable("Gürhan");
    this.lastName = ko.observable("Küçük");
    this.fullName = ko.computed(function() {
       return this.firstName() + " " + this.lastName();
    },this);
    
    this.capitalizeLastName = function() {
     var currentVal = this.lastName();
     this.lastName(currentVal.toUpperCase());
    };
}

ko.applyBindings(new AppViewModel());