function WebmailViewModel() {
  var self = this;
  self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
  self.chosenFolderId = ko.observable();
  self.chosenFolderData = ko.observable();
  self.chosenMailData = ko.observable();
  self.goToFolder = function(folder) {
    self.chosenFolderId(folder);
    self.chosenMailData(null);
    $.get("mail/"+folder+".json", {}, self.chosenFolderData, "json");
  };
  self.goToFolder('Inbox');
  self.control = function() {
    console.log(self.choosenFolderData());
  }
  self.goToMail = function(mail) {
    self.chosenFolderId(mail.folder);
    self.chosenFolderData(null);
    $.get("mail/"+mail.id+".json", {}, self.chosenMailData, "json");
  }
};
ko.applyBindings(new WebmailViewModel());
