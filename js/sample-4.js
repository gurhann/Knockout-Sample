function WebmailViewModel() {
  var self = this;
  self.folders = ['Inbox', 'Archive', 'Sent', 'Spam'];
  self.chosenFolderId = ko.observable();
  self.chosenFolderData = ko.observable();
  self.chosenMailData = ko.observable();
  self.goToFolder = function(folder) {
    location.hash = folder;

  };
  //self.goToFolder('Inbox');
  self.goToMail = function(mail) {
    location.hash = mail.folder + "/" +mail.id;
  };

  Sammy(function() {
    this.get("#:folder", function() {
      self.chosenFolderId(this.params.folder);
      self.chosenMailData(null);
      $.get("mail/"+this.params.folder+".json", {}, self.chosenFolderData, "json");
    });
    this.get("#:folder/:mailId", function() {
      self.chosenFolderId(this.params.folder);
      self.chosenFolderData(null);
      $.get("mail/"+this.params.mailId+".json", {}, self.chosenMailData, "json");
    });
    this.get('    ', function(){this.app.runRoute("get", "#Inbox")})
  }).run();
};
ko.applyBindings(new WebmailViewModel());
