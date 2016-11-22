var user = {
  username: 'jwang',
  profilePicture: 'images/profile-picture.jpg',
  aboutMe: 'Female. 20. Coffee lover. Dancer. Future software developer;)',
  updates: [newUpdate('5:00pm', 'Going home for the day! :D'),
            newUpdate('4:30pm', 'Class just ended.'),
            newUpdate('12:15pm', '...and back to class!'),
            newUpdate('11:30am', 'Off to my lunch break!'),
            newUpdate('9:00am', 'Starting my weekday by going to coding class! Starting my weekday by going to coding class! Starting my weekday by going to coding class!')]
}

var containerPointer = document.getElementById('updates');
var pointer;

function newUpdate(timestamp, post) {
  return { timestamp: timestamp, post: post };
}

function newElement(tagName, className, text) {
  var newElement = document.createElement(tagName);
  newElement.className = className;
  if (text !== null)
    newElement.appendChild(document.createTextNode(text));
  return newElement;
}

function displayUserInfo() {
  pointer = document.getElementById('photo');
  pointer.style.backgroundImage = 'url(' + user.profilePicture + ')';
  pointer = document.getElementById('username');
  pointer.appendChild(document.createTextNode('@' + user.username));
  pointer = document.getElementById('about-me');
  pointer.appendChild(document.createTextNode(user.aboutMe));
}

function displayExistingUpdates() {
  var i;
  for (i = 0; i < user.updates.length; i++) {
    containerPointer.appendChild(newElement('div', 'update', null));
    displayPost(containerPointer.lastChild, i);
  }
}

function displayPost(pointer, index) {
  pointer.appendChild(newElement('h4', 'username', '@' + user.username));
  pointer.appendChild(newElement('p', 'timestamp', user.updates[index].timestamp));
  pointer.appendChild(newElement('p', 'post', user.updates[index].post));
}

function addUpdate() {
  var post = document.getElementById('post-text').value;
  user.updates.unshift(newUpdate('*insert time here*', post));
  containerPointer.insertBefore(newElement('div', 'update', null), containerPointer.firstChild);
  displayPost(containerPointer.firstChild, 0);
}

function enablePosting() {
  pointer = document.getElementById('post-button');
  pointer.addEventListener('click', addUpdate, false);
}

displayUserInfo();
displayExistingUpdates();
enablePosting();
