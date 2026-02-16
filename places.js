function Place(location, landmarks, timeOfYear, notes) {
    this.location = location;
    this.landmarks = landmarks;
    this.timeOfYear = timeOfYear;
    this.notes = notes;
  }
  
  Place.prototype.summary = function() {
    return `${this.location} (${this.timeOfYear}): ${this.landmarks}. Notes: ${this.notes}`;
  };
  