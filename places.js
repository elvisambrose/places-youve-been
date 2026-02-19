function Place(name, location, landmarks, timeOfYear, notes) {
    this.name = name;
    this.location = location;
    this.landmarks = landmarks;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
  }
  
  Place.prototype.summary = function() {
    return `${this.name} - ${this.location} (${this.timeOfYear}): ${this.landmarks}. Notes: ${this.notes}`;
  };
  