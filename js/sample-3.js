function WebmailViewModel() {
  var self = this;
  self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
  self.chosenFolderId = ko.observable();
  self.chosenFolderData = ko.observable();
  self.goToFolder = function(folder) {
    self.chosenFolderId(folder);
    $.get("mail/"+folder+".json", {}, self.chosenFolderData, "json");
  };
  self.goToFolder('Inbox');
  self.control = function() {
    console.log(self.choosenFolderData());
  }
};
ko.applyBindings(new WebmailViewModel());
