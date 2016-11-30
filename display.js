/* global moment */

var users = [ { id: 0,
                username: 'jwang',
                displayName: 'Jessica Wang',
                profilePic: 'images/jwang.jpg',
                bio: 'Female. 20. Coffee lover. Argentine Tango Dancer. Future software developer;)',
                following: [],
                followers: [],
                updatesCount: 5 },
              { id: 1,
                username: 'biagi',
                displayName: 'Rodolfo Biagi',
                profilePic: 'images/biagi.jpg',
                bio: 'An Argentine Tango musician who started his musical career by playing background music for silent movies, and this was where he was first discovered by a tango band leader.',
                following: [],
                followers: [],
                updatesCount: 3 },
              { id: 2,
                username: 'varela',
                displayName: 'Hector Varela',
                profilePic: 'images/varela.jpg',
                bio: 'Héctor Varela was a musician criticized by the innovative players, but loved by the fans of dancing and popular tango.',
                following: [],
                followers: [],
                updatesCount: 2 },
];

var primaryUser = users[0];
var currentlyViewing = primaryUser;

var updates = [ { userId: 0, timestamp: newMoment('5:00PM 11/22/16'), post: 'I\'m going home for the day!' },
                { userId: 0, timestamp: newMoment('4:30PM 11/22/16'), post: 'Class just ended.' },
                { userId: 2, timestamp: newMoment('2:00PM 11/22/16'), post: 'No me hablas tesoro mio, No me hablas ni me has mirado, Fueron tres años mi vida, Tres años muy lejos de tu corazon.' },
                { userId: 0, timestamp: newMoment('12:15PM 11/22/16'), post: '...and lunch is over, so back to class.' },
                { userId: 1, timestamp: newMoment('12:00PM 11/22/16'), post: 'Todo es amor, la brisa y tú, jugando en el rumor, y el ruiseñor, cantando en una flor, buscando amor, amor.' },
                { userId: 1, timestamp: newMoment('11:55AM 11/22/16'), post: 'La soledad, que me envuelve el corazón, va encendiendo en mi alma, el fuego de tu amor lejano. En las brumas de tu olvido, viaja mi ilusión, gritando tu nombre en vano.' },
                { userId: 1, timestamp: newMoment('11:45AM 11/22/16'), post: 'Soñemos, que los dos estamos libres. Soñemos, en la gloria de este amor. Soñemos, que ya nada nos separa, y que somos cual dos almas, que nacieron para amar.' },
                { userId: 0, timestamp: newMoment('11:30AM 11/22/16'), post: 'Off to my lunch break! Maybe I\'ll go across the street?' },
                { userId: 0, timestamp: newMoment('9:00AM 11/22/16'), post: 'Starting my weekday by going to coding class!' },
                { userId: 2, timestamp: newMoment('7:00AM 11/21/16'), post: 'Es la historia de un amor, como no hay otro igual. Que me hizo comprender, todo el bien todo el mal, que le dio luz a mi vida, apagandola después. ¡Ay, qué vida tan oscura, corazón, sin tu amor no viviré!' } ];

function newMoment(timestamp) {
  return moment(timestamp, 'h:mmA M/D/YY');
}

function getUpdateElements(user, index) {
  return [createElement('div', { class: 'photo', style: 'background-image:url('+ user.profilePic + ')' }, null),
          createElement('h4', { class: 'name' }, user.displayName),
          createElement('p', { class: 'username' }, '@' + user.username),
          createElement('p', { class: 'timestamp' }, updates[index].timestamp.format('h:mmA M/D/YY')),
          createElement('p', { class: 'post' }, updates[index].post)];
}

function createElement(tag, attributes, children) {
  var newElement = document.createElement(tag);
  for (var key in attributes) {
    newElement.setAttribute(key, attributes[key]);
  }
  if (children === null)
    return newElement;
  if (!(children instanceof Element) && !(children instanceof Array)) {
    newElement.appendChild(document.createTextNode(children));
    return newElement;
  }
  if (!(children instanceof Array))
    children = [children];
  children.forEach(function(child) {
    newElement.appendChild(child);
  });
  return newElement;
}

function userInfo(user) {
  var userInfo = createElement('div', { id: 'user-info' },
                    [createElement('div', { class: 'photo' }, null),
                     createElement('div', { id: 'description' },
                        [createElement('h2', { id: 'name' }, user.displayName),
                         createElement('p', { id: 'username' }, '@' + user.username),
                         createElement('p', { id: 'about-me' }, user.bio)])]);
  var profilePic = userInfo.firstChild;
  profilePic.style.backgroundImage = 'url(' + user.profilePic + ')';
  if (user === primaryUser) {
    userInfo.appendChild(createElement('button', { id: 'edit-profile' }, 'Edit Profile'));
    userInfo.lastChild.addEventListener('click', function() { editProfile() }, false);
    return userInfo;
  }
  var following = (primaryUser.following.indexOf(user.id) > -1);
  userInfo.appendChild(createElement('button', { id: 'follow' }, following ? 'Following' : 'Follow'));
  userInfo.lastChild.addEventListener('click', function() { follow(user.id) }, false);
  return userInfo;
}

function userUpdates(user) {
  var updatesToDisplay = []
  updates.forEach(function (update, index) {
    if (update.userId === user.id)
      updatesToDisplay.push(createElement('div', { class: 'update' }, getUpdateElements(user, index)));
  });
  return createElement('div', { id: 'updates', class: 'shadow' }, updatesToDisplay);
}

function stats(user) {
  return createElement('div', { id: 'stats', class: 'shadow' },
            [createElement('span', { id: 'posts', class: 'stat' },
                [createElement('p', { class: 'label' }, 'posts'),
                 createElement('p', { class: 'count' }, user.updatesCount)]),
             createElement('span', { id: 'following', class: 'stat' },
                [createElement('p', { class: 'label' }, 'following'),
                createElement('p', { class: 'count' }, user.following.length)]),
             createElement('span', { id: 'followers', class: 'stat' },
                [createElement('p', { class: 'label' }, 'followers'),
                createElement('p', { class: 'count' }, user.followers.length)])]);
}

function refreshStats() {
  remove('stats');
  var centerContainer = document.getElementById('center');
  centerContainer.insertBefore(stats(currentlyViewing), centerContainer.firstChild);
}

function allUpdates() {
  var updatesToDisplay = [];
  updates.forEach(function (update, index) {
    if(primaryUser.following.indexOf(update.userId) > -1)
      updatesToDisplay.push(createElement('div', { class: 'update' }, getUpdateElements(users[update.userId], index)));
  });
  return createElement('div', { id: 'updates', class: 'shadow' }, updatesToDisplay);
}

function editProfile() {
  remove(['description', 'edit-profile']);
  var userInfo = document.getElementById('user-info');
  userInfo.appendChild(createElement('input', { id: 'image-upload', type: 'file' }, null));
  userInfo.lastChild.addEventListener('change', changeProfilePic, false);
  userInfo.appendChild(createElement('label', { for: 'image-upload' }, createElement('span', { class: 'lnr lnr-camera' }, null)));
  userInfo.appendChild(editor(primaryUser));
  userInfo.appendChild(createElement('p', { id: "error-msg" }, ' '));
  userInfo.appendChild(createElement('button', { id: 'save' }, 'Save'));
  userInfo.lastChild.addEventListener('click', saveProfile, false);
  var username = document.getElementById('username-text');
  username.addEventListener('keyup', function() { checkUsername(username.value) }, false);
}

function changeProfilePic() {
  var img = 'images/' + document.getElementById('image-upload').files[0].name;
  primaryUser.profilePic = img;
  var photos = document.getElementsByClassName('photo');
  for (var i = 0; i < photos.length; i++) {
    photos[i].style.backgroundImage = 'url(\'' + img + '\')';
  }
}

function editor(user) {
  return createElement('div', { id: 'editor', class: 'shadow' },
            [createElement('div', { id: 'name', class: 'field' },
                [createElement('div', {  }, createElement('span', { class: 'lnr lnr-laptop' }, null)),
                 createElement('textarea', { id: 'name-text', placeholder: 'Name', maxlength: '24' }, user.displayName)]),
             createElement('div', { id: 'username', class: 'field' },
                [createElement('div', {  }, createElement('span', { class: 'lnr lnr-user' }, null)),
                 createElement('textarea', { id: 'username-text', placeholder: 'Username', maxlength: '24' }, user.username),
                 createElement('div', { id: 'check' }, createElement('span', { class: 'lnr lnr-checkmark-circle' }, null)),
                 createElement('div', { id: 'cross' }, createElement('span', { class: 'lnr lnr-cross-circle' }, null))]),
             createElement('div', { id: 'bio', class: 'field' },
                [createElement('div', {  }, createElement('span', { class: 'lnr lnr-bubble' }, null)),
                 createElement('textarea', { id: 'bio-text', placeholder: 'Bio',  }, user.bio)])]);
}

function checkUsername(value) {
  var taken = false;
  var validCharacters = /^[a-z0-9_]*$/;
  var message = document.getElementById('error-msg');
  var cross = document.getElementById('cross');
  var check = document.getElementById('check');
  if (value === primaryUser.username || !value.length) {
    message.textContent = ' ';
    cross.style.visibility = 'hidden';
    check.style.visibility = 'hidden';
    return;
  }
  if (value.length < 4 || !validCharacters.test(value)) {
    message.textContent = '*please enter a valid username*';
    cross.style.visibility = 'visible';
    return
  }
  users.forEach(function (user) {
    if (value === user.username) {
      message.textContent = '*this username is taken*';
      taken = true;
      cross.style.visibility = 'visible';
      return;
    }
  });
  if (taken) return;
  message.textContent = ' ';
  cross.style.visibility = 'hidden';
  check.style.visibility = 'visible';
}

function saveProfile() {
  if (!document.getElementById('name-text').value.trim()) {
    document.getElementById('error-msg').textContent = '*your name cannot be blank*';
    return;
  }
  if (!document.getElementById('username-text').value.trim()) {
    document.getElementById('error-msg').textContent = '*please enter a valid username*';
    return;
  }
  if (document.getElementById('cross').style.visibility === 'visible' || !document.getElementById('username-text').value)
    return;
  primaryUser.displayName = document.getElementById('name-text').value;
  primaryUser.username = document.getElementById('username-text').value;
  primaryUser.bio = document.getElementById('bio-text').value;
  switchUser(primaryUser);
}

function follow(id) {
  var followButton = document.getElementById('follow').firstChild;
  if (followButton.data === 'Following') {
    var index = primaryUser.following.indexOf(id);
    primaryUser.following.splice(index, 1);
    index = users[id].followers.indexOf(primaryUser.id);
    users[id].followers.splice(index, 1);
    followButton.data = 'Follow';
  } else {
    primaryUser.following.unshift(id);
    users[id].followers.unshift(primaryUser.id);
    followButton.data = 'Following';
  }
  refreshStats(currentlyViewing);
}

function remove(ids) {
  if (! (ids instanceof Array))
    ids = [ids];
  ids.forEach(function (id) {
    var element = document.getElementById(id);
    if(element)
      element.parentElement.removeChild(element);
  });
}

function displayProfile(user) {
  var leftContainer = document.getElementById('left');
  leftContainer.appendChild(userInfo(user));
  var centerContainer = document.getElementById('center');
  centerContainer.insertBefore(stats(user), centerContainer.firstChild);
  centerContainer.appendChild(userUpdates(user));
  currentlyViewing = user;
}

function goHome() {
  remove(['user-info', 'stats', 'updates']);
  var centerContainer = document.getElementById('center');
  centerContainer.appendChild(allUpdates());
}

function switchUser(user) {
  remove(['user-info', 'stats', 'updates']);
  displayProfile(user);
}

function addUpdate() {
  var updatesContainer = document.getElementById('updates');
  var post = document.getElementById('post-input').value;
  if (!post.trim())
    return;
  updates.unshift({ userId: primaryUser.id, timestamp: moment(), post: post });
  primaryUser.updatesCount++;
  if (currentlyViewing === primaryUser) {
    refreshStats(currentlyViewing);
    updatesContainer.insertBefore(createElement('div', { class: 'update'}, getUpdateElements(primaryUser, 0)), updatesContainer.firstChild);
  }
  document.getElementById('post-input').value = '';
}

function checkSearchInput() {
  var input = document.getElementById('search-input').value;
  if (!input.trim())
    return;
  users.forEach( function(user) {
    if(user.username === input) {
      switchUser(user);
      return;
    }
  });
  document.getElementById('search-input').value = '';
}

displayProfile(primaryUser);

document.getElementById('home-button').addEventListener('click', goHome, false);
document.getElementById('profile-button').addEventListener('click', function() { switchUser(primaryUser) }, false);
document.getElementById('post-button').addEventListener('click', addUpdate, false);
document.getElementById('search-button').addEventListener('click', checkSearchInput, false);
