const nextPrevButtons = Array.from(document.querySelectorAll('.button'));
const cardImageElement = document.querySelector('#person-image');
const cardNameElement = document.querySelector('#person-name');
const cardOcupationElement = document.querySelector('#person-ocupation');
const cardMessageElement = document.querySelector('#person-message');

class Person {
  constructor(name, lastname) {
    this._name = name;
    this._lastName = lastname;
    this._ocupation;
    this._message;
    this._imageUrl;
  }
  getFullName() {
    return `${this._name} ${this._lastName}`;
  }
  getOcupation() {
    return this._ocupation;
  }
  setMessage(msg) {
    this._message = msg;
  }
  getMessage() {
    return this._message;
  }
  setOcupation(rol) {
    this._ocupation = rol;
  }
  getOcupation() {
    return this._ocupation;
  }
  setImageUrl(url) {
    this._imageUrl = url;
  }
  getImageUrl() {
    return this._imageUrl;
  }
  getFullData() {
    return [this.getFullName(), this.getOcupation(), this.getMessage(), this.getImageUrl()];
  }

}
class Card {
  constructor(personName, personOcupation, personDescription, personImage) {
    this._info = [personName, personOcupation, personDescription, personImage];
    this._idx = 0;
    this._personsList = [];
  };
  displayInfo() {
    const [name, ocupation, message, imageUrl] = this._personsList[this._idx];
    const [nameEl, ocupationEl, messageEl, imgEl] = this._info;
    nameEl.innerText = name;
    ocupationEl.innerText = ocupation;
    messageEl.innerText = message;
    imgEl.style.backgroundImage = ` url(${imageUrl})`;
  }
  addPersonData(person) {
    this._personsList.push(person);
  }
  getAllPersonData() {
    return this._personsList;
  }
  buttonOnClick() {
    const [prevButton, nextButton] = nextPrevButtons;
    prevButton.addEventListener('click', () => {
      if (this._idx > 0) {
        this._idx -= 1;
      } else if (this._idx === 0) {
        this._idx = this._personsList.length - 1;
      }
      this.displayInfo();
    })
    nextButton.addEventListener('click', () => {
      if (this._idx < this._personsList.length - 1) {
        this._idx += 1;
      } else if (this._idx === this._personsList.length - 1) {
        this._idx = 0;
      }
      this.displayInfo();
    })
  }
}
// Woman data 
const woman = new Person('Tanya', 'Sinclair');
woman.setOcupation('UX Engineer');
woman.setImageUrl('../images/image-tanya.jpg')
woman.setMessage('I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future.');

// Man Data 
const man = new Person('John', ' TarkPor');
man.setOcupation('Junior Front End Developer');
man.setImageUrl('../images/image-john.jpg');
man.setMessage('If you want to lay the best foundation possible I’d recommend taking this course.The depth the instructors go into is incredible.I now feel so confident about starting up as a professional developer.');

// Card Slider 
const infoContentWrapper = new Card(cardNameElement, cardOcupationElement, cardMessageElement, cardImageElement);
infoContentWrapper.addPersonData(woman.getFullData());
infoContentWrapper.addPersonData(man.getFullData());
infoContentWrapper.displayInfo();
infoContentWrapper.buttonOnClick();