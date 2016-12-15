/* global moment */

var users = [ { id: 0,
                username: 'jwang',
                password: 'wanj',
                displayName: 'Jessica Wang',
                profilePic: 'images/jwang.jpg',
                bio: 'Coffee lover. Dancer. Developer;)',
                following: [3, 5, 1],
                followers: [1, 2, 3, 4, 5, 6, 7],
                updatesCount: 5,
                likes: [6, 8, 9],
                interactions: [0, 1, 2, 15, 16, 17] },
              { id: 1,
                username: 'biagi',
                password: 'rodolfo',
                displayName: 'Rodolfo Biagi',
                profilePic: 'images/biagi.jpg',
                bio: 'An Argentine Tango musician who started his musical career by playing background music for silent movies.',
                following: [0],
                followers: [0],
                updatesCount: 3,
                likes: [],
                interactions: [8] },
              { id: 2,
                username: 'varela',
                password: 'hector',
                displayName: 'Hector Varela',
                profilePic: 'images/varela.jpg',
                bio: 'Varela was a musician criticized by the innovative players, but loved by the fans of dancing and popular tango.',
                following: [0],
                followers: [],
                updatesCount: 2,
                likes: [],
                interactions: [9] },
              { id: 3,
                username: 'donato',
                password: 'edgardo',
                displayName: 'Edgardo Donato',
                profilePic: 'images/donato.jpg',
                bio: 'Donato was a tango composer and orchestra leader, born in Buenos Aires, Argentina, raised from a young age and musically trained in Montevideo, Uruguay.',
                following: [0],
                followers: [0],
                updatesCount: 0,
                likes: [12, 7],
                interactions: [10, 18, 19] },
              { id: 4,
                username: 'diaz',
                password: 'hugo',
                displayName: 'Hugo Diaz',
                profilePic: 'images/diaz.jpg',
                bio: 'Víctor Hugo Díaz was a tango, folklore and jazz harmonicist.',
                following: [0],
                followers: [],
                updatesCount: 0,
                likes: [1, 2, 6, 8, 9],
                interactions: [3, 4, 5, 6, 7, 11] },
              { id: 5,
                username: 'dagostino',
                password: 'angel',
                displayName: 'Angel D\'Agostino',
                profilePic: 'images/dagostino.jpg',
                bio: 'I am milonguero, I always was, in the best sense of the word.',
                following: [0],
                followers: [0],
                updatesCount: 0,
                likes: [],
                interactions: [12] },
              { id: 6,
                username: 'darienzo',
                password: 'juan',
                displayName: 'Juan D\'Arienzo',
                profilePic: 'images/darienzo.jpg',
                bio: 'Juan D\'Arienzo was an Argentine tango musician, also known as \"El Rey del Compás\".',
                following: [0],
                followers: [],
                updatesCount: 0,
                likes: [],
                interactions: [13] },
              { id: 7,
                username: 'demare',
                password: 'lucio',
                displayName: 'Lucio Demare',
                profilePic: 'images/demare.jpg',
                bio: 'Lucio Demare was an Argentine composer who worked on a number of film scores.',
                following: [0],
                followers: [],
                updatesCount: 0,
                likes: [],
                interactions: [14] }
];

var updates = [ { id: 0, userId: 2, timestamp: newMoment('7:00AM 11/21/16'), post: 'Es la historia de un amor, como no hay otro igual. Que me hizo comprender, todo el bien todo el mal, que le dio luz a mi vida, apagandola después. ¡Ay, qué vida tan oscura, corazón, sin tu amor no viviré! #historiadeunamor #tango', likes: [] },
                { id: 1, userId: 0, timestamp: newMoment('9:00AM 11/22/16'), post: 'Starting my weekday by going to coding class!', likes: [4] },
                { id: 2, userId: 0, timestamp: newMoment('11:30AM 11/22/16'), post: 'Off to my lunch break! Maybe I\'ll go across the street?', likes: [4] },
                { id: 3, userId: 1, timestamp: newMoment('11:45AM 11/22/16'), post: 'Soñemos, que los dos estamos libres. Soñemos, en la gloria de este amor. Soñemos, que ya nada nos separa, y que somos cual dos almas, que nacieron para amar. #sonemos #hugoduval #tango', likes: [] },
                { id: 4, userId: 1, timestamp: newMoment('11:55AM 11/22/16'), post: 'La soledad, que me envuelve el corazón, va encendiendo en mi alma, el fuego de tu amor lejano. En las brumas de tu olvido, viaja mi ilusión, gritando tu nombre en vano. #caricias #hugoduval #tango', likes: [] },
                { id: 5, userId: 1, timestamp: newMoment('12:00PM 11/22/16'), post: 'Todo es amor, la brisa y tú, jugando en el rumor, y el ruiseñor, cantando en una flor, buscando amor, amor. #todoesamor #hugoduval #tango', likes: [] },
                { id: 6, userId: 0, timestamp: newMoment('12:15PM 11/22/16'), post: '...and lunch is over, so back to class.', likes: [0, 4] },
                { id: 7, userId: 2, timestamp: newMoment('2:00PM 11/22/16'), post: 'No me hablas tesoro mio, No me hablas ni me has mirado, Fueron tres años mi vida, Tres años muy lejos de tu corazon. #fuerontresanos #tango', likes: [3] },
                { id: 8, userId: 0, timestamp: newMoment('4:30PM 11/22/16'), post: 'Class just ended.', likes: [0, 4] },
                { id: 9, userId: 0, timestamp: newMoment('5:00PM 11/22/16'), post: 'I\'m going home for the day!', likes: [0, 4] },
                { id: 10, userId: 3, timestamp: moment(), post: 'Sacále punta a esta milonga, que ya empezó. Seguí esos fueyes que rezongan, del corazón. Y las pebetas que han venido, del Club Fulgor. El tango requiebra la vida, Y en sus notas desparrama, su amor. #sacalepunta #milonga', likes: [] },
                { id: 11, userId: 3, timestamp: moment(), post: '¡Carnaval de mi barrio!, donde todo es amor, cascabeles de risa, matizando el dolor, ¡carnaval de mi barrio!, pedacito de sol, con nostalgias de luna, y canción de farol. #carnavaldemibarrio #tango', likes: [] },
                { id: 12, userId: 5, timestamp: moment(), post: 'Ahora no me conocés… ¡me borro tu ingratitud!… Aunque dejés mi alma trunca, no podrás olvidar nunca, lo de nuestra juventud… #ahoranomeconoces #angelvargas #tango', likes: [3] },
                { id: 13, userId: 5, timestamp: moment(), post:  'Mañanita arrabalera, Sin taitas por las veredas, Ni minas en el balcón, Tus faroles apagados. #adiosarrabal #angelvargas #tango', likes: [] },
                { id: 14, userId: 1, timestamp: moment(), post: 'Ya sé que me has olvidado, ya sé que te fuiste lejos. Ya sé que con mis consejos, no te voy a enderezar. #campoafuera #milonga', likes: [] } ]

var hashtags = { adiosarrabal: [13],
                 ahoranomeconoces: [12],
                 angelvargas: [12, 13],
                 campoafuera: [14],
                 caricias: [4],
                 carnavaldemibarrio: [11],
                 fuerontresanos: [7],
                 historiadeunamor: [0],
                 hugoduval: [3, 4, 5],
                 milonga: [10, 14],
                 sacalepunta: [10],
                 sonemos: [3],
                 tango: [0, 3, 4, 5, 7, 11, 12, 13],
                 todoesamor: [5] };

var interactions = [ { id: 0, userId: 0, activity: 'like', post: 6 },
                     { id: 1, userId: 0, activity: 'like', post: 8 },
                     { id: 2, userId: 0, activity: 'like', post: 9 },
                     { id: 3, userId: 4, activity: 'like', post: 1 },
                     { id: 4, userId: 4, activity: 'like', post: 2 },
                     { id: 5, userId: 4, activity: 'like', post: 6 },
                     { id: 6, userId: 4, activity: 'like', post: 8 },
                     { id: 7, userId: 4, activity: 'like', post: 9 },
                     { id: 8, userId: 1, activity: 'follow', followed: 0 },
                     { id: 9, userId: 2, activity: 'follow', followed: 0 },
                     { id: 10, userId: 3, activity: 'follow', followed: 0 },
                     { id: 11, userId: 4, activity: 'follow', followed: 0 },
                     { id: 12, userId: 5, activity: 'follow', followed: 0 },
                     { id: 13, userId: 6, activity: 'follow', followed: 0 },
                     { id: 14, userId: 7, activity: 'follow', followed: 0 },
                     { id: 15, userId: 0, activity: 'follow', followed: 3 },
                     { id: 16, userId: 0, activity: 'follow', followed: 5 },
                     { id: 17, userId: 0, activity: 'follow', followed: 1 },
                     { id: 18, userId: 3, activity: 'like', post: 12 },
                     { id: 19, userId: 3, activity: 'like', post: 7 } ];

let primaryUser;
let currentlyViewing = primaryUser;
let viewing = null;
let interactionsDisplayed = 10;
const left = document.getElementById('left');
const center = document.getElementById('center');
const right = document.getElementById('right');

// loading data, for testing purposes
loadData(); // function call!!!
function loadData() {
  // Going through updates and replacing userId key with a user key that holds a user object.
  // And likes with references to users instead of their ids
  updates.forEach( update => {
    update.user = users[update.userId];
    delete update.userId;
    update.likes = update.likes.map( id => users[id] );
  });
  // Going through each user and replacing interactions array with array of references to the interactions instead of ids
  // Going through each user and replacing likes array with array of references to the actual updates
  // Same with following and followers.
  users.forEach( user => {
    user.interactions = user.interactions.map( id => interactions[id] );
    user.likes = user.likes.map( id => updates[id] );
    user.following = user.following.map( id => users[id] );
    user.followers = user.followers.map( id => users[id] );
  });
  // Going through interactions array for replacing userId with references to the user
  // going through interactions and replacing post with actual post or followed with user references
  interactions.forEach( interaction => {
    interaction.user = users[interaction.userId];
    delete interaction.userId;
    if(interaction.hasOwnProperty('post'))
      interaction.post = updates[interaction.post];
    else
      interaction.followed = users[interaction.followed];
  });
  // Make hashtags refer to the actual posts
  for (const hashtag in hashtags) {
    hashtags[hashtag] = hashtags[hashtag].map( id => updates[id]);
  }
}

// Takes a formatted time and returns a new Moment obj.
function newMoment(timestamp) {
  return moment(timestamp, 'h:mmA M/D/YY');
}

// Returns a new element w/ the given tag, attrubutes, children, & eventListener
function createElement(tag, attributes, children, eventListener) {
  const newElement = document.createElement(tag);
  for (const key in attributes) {
    newElement.setAttribute(key, attributes[key]);
  }
  if (eventListener)
    newElement.addEventListener(eventListener[0], eventListener[1]);
  if (!children && children !== 0) return newElement;
  if (!(children instanceof Array))
    children = [children];
  return children.reduce( (children, child) => {
    return children.concat(child);
  },[]).map( child => {
    if (!(child instanceof Element))
      child = document.createTextNode(child);
    return child;
  }).reduce( (element, child) => {
    element.appendChild(child);
    return element;
  }, newElement);
}

// Displays the user profile of the given user.
function displayProfile(user) {
  if (!user) return;
  modifyDocument('empty', ['left', 'center'])
  currentlyViewing = user;
  left.appendChild(userInfo(user));
  left.appendChild(getInteractions(user, user.interactions, 0));
  center.appendChild(stats(user));
  document.getElementById('posts').click();
}

// Follows the given user
function follow(user) {
  const following = primaryUser.following.includes(user);
  const suggestions = right.getElementsByClassName('plus');
  const sugIndex = (user.id < primaryUser.id) ? user.id : (user.id - 1);
  if (following) {
    suggestions[sugIndex].classList.toggle('lnr-checkmark-circle');
    suggestions[sugIndex].classList.toggle('lnr-plus-circle');
    primaryUser.following.splice(primaryUser.following.indexOf(user), 1);
    user.followers.splice(user.followers.indexOf(primaryUser), 1);
    const interactionToRemove = interactions.find( ({activity, user: theUser, followed}) =>
      (activity === 'follow' && followed === user && theUser == primaryUser)
    );
    interactions.splice(interactions.indexOf(interactionToRemove), 1);
    primaryUser.interactions.splice(primaryUser.interactions.indexOf(interactionToRemove), 1);
  } else {
    suggestions[sugIndex].classList.toggle('lnr-checkmark-circle');
    suggestions[sugIndex].classList.toggle('lnr-plus-circle');
    primaryUser.following.unshift(user);
    user.followers.unshift(primaryUser);
    const newId = interactions.slice().pop().id + 1;
    const newInteraction = { id: newId, user: primaryUser, activity: 'follow', followed: user };
    interactions.push(newInteraction);
    primaryUser.interactions.push(newInteraction);
  }
  if (!currentlyViewing) {
    goHome();
    return;
  } else {
    refreshStats(currentlyViewing);
    document.getElementById(viewing).click();
  }
  if (currentlyViewing === primaryUser) {
    modifyDocument('remove', 'interactions');
    left.appendChild(getInteractions(primaryUser, primaryUser.interactions, 0));
    return;
  }
  if (currentlyViewing !== user) return;
  document.getElementById('follow').firstChild.data = following ? 'Follow' : 'Following';
}

// Either empties or removes elements of the specific ids from the DOM
function modifyDocument(action, ids) {
  const remove = element => element.parentElement.removeChild(element);
  const empty = element => {
    while(element.firstChild)
      element.removeChild(element.firstChild);
  }
  const doAction = (action === 'remove') ? remove : empty;
  if (!(ids instanceof Array))
    ids = [ids];
  ids.forEach(function (id) {
    const element = document.getElementById(id);
    if (!element) return;
    doAction(element);
  });
}

// Called when login link is clicked on the landing page. Checks for a username/password match to login.
function login() {
  const username = document.getElementById('username-input').value;
  const password = document.getElementById('password-input').value;
  if (!username.trim() || !password.trim()) return;
  const user = users.find( user => (user.username === username) );
  if (!user) return;
  if (user.password !== password) return;
  document.getElementById('username-input').value = '';
  document.getElementById('password-input').value = '';
  primaryUser = user;
  right.appendChild(trending());
  right.appendChild(suggestions());
  goHome();
  toggleVisibility(['header', 'content', 'landing']);
}

// Called when logout button is clicked. User is taken to the landing page where they can log in or create a new account.
function logout() {
  toggleVisibility(['header', 'content', 'landing']);
  modifyDocument('empty', ['left', 'center', 'right']);
  primaryUser = null;
}

// Takes an array of element ids and toggle's each id's visibility
function toggleVisibility(ids) {
  if (!(ids instanceof Array))
    ids = [ids];
  ids.forEach( id => {
    document.getElementById(id).classList.toggle("visible");
    document.getElementById(id).classList.toggle("hidden");
  });
}

// Displays the home page w/ updates from all users the primary user is following
function goHome() {
  modifyDocument('empty', ['left', 'center']);
  currentlyViewing = null;
  left.appendChild(userInfo(primaryUser));
  left.appendChild(getInteractions(currentlyViewing, interactions, 0));
  center.appendChild(updatePoster());
  center.appendChild(allUpdates());
}

// Returns #updates element containing all updates for the users the primary user is following
function allUpdates() {
  const updatesToDisplay = [];
  updates.forEach( update => {
    if(primaryUser.following.includes(update.user))
      updatesToDisplay.unshift(createElement('div', { class: 'update' }, getUpdateElements(update)));
  });
  if (updatesToDisplay.length)
    return createElement('div', { id: 'updates', class: 'shadow' }, updatesToDisplay);
  updatesToDisplay.push(createElement('div', { class: 'update' }, 'No updates to display. Follow other users to view their updates in your newsfeed.'));
  return createElement('div', { id: 'updates', class: 'shadow' }, updatesToDisplay);
}

// Returns #user-info element containing the info specific to the given user: photo, name, username, bio, etc...
function userInfo(user) {
  const eventListener = ['click', function() { displayProfile(user) }];
  const userInfo = createElement('div', { id: 'user-info', class: 'shadow' },
                    [createElement('div', { class: 'photo' }, null, eventListener),
                     createElement('div', { id: 'description' },
                        [createElement('h2', { id: 'name' }, user.displayName, eventListener),
                         createElement('p', { id: 'username' }, addLinks('@' + user.username)),
                         createElement('p', { id: 'about-me' }, user.bio)])]);
  const profilePic = userInfo.firstChild;
  profilePic.style.backgroundImage = 'url(' + user.profilePic + ')'
  if (!currentlyViewing) return userInfo;
  if (user === primaryUser) {
    userInfo.appendChild(createElement('button', { id: 'edit-profile' }, 'Edit Profile', ['click', function() { editProfile() }]));
    return userInfo;
  }
  userInfo.appendChild(createElement('button', { id: 'follow' }, primaryUser.following.includes(user.id) ? 'Following' : 'Follow', ['click', function() { follow(user) }]));
  return userInfo;
}

// Displays the profile editor where the primary user can edit his/her user info.
function editProfile() {
  modifyDocument('remove', ['description', 'edit-profile']);
  const userInfo = document.getElementById('user-info');
  userInfo.appendChild(createElement('input', { id: 'image-upload', type: 'file' }, null, ['change', changeProfilePic]));
  userInfo.appendChild(createElement('label', { for: 'image-upload' }, createElement('span', { class: 'lnr lnr-camera' })));
  userInfo.appendChild(editor(primaryUser));
  userInfo.appendChild(createElement('p', { id: "error-msg" }, ' '));
  userInfo.appendChild(createElement('button', { id: 'save' }, 'Save', ['click', saveProfile]));
}

// Changes the profile photo to whatever img file the user uploads, currently only works if photo is located in 'images' folder
function changeProfilePic() {
  const img = 'images/' + document.getElementById('image-upload').files[0].name;
  primaryUser.profilePic = img;
  document.getElementById('user-info').getElementsByClassName('photo')[0].style.backgroundImage = 'url(\'' + img + '\')';
  const updatePhotos = document.getElementById('updates').getElementsByClassName('photo');
  for (let i = 0; i < updatePhotos.length; i++) {
    updatePhotos[i].style.backgroundImage = 'url(\'' + img + '\')';
  }
}

// Returns #editor element containing all child elements that make up the profile editor
function editor(user) {
  return createElement('div', { id: 'editor', class: 'shadow' },
            [createElement('div', { id: 'name', class: 'field' },
                [createElement('div', {  }, createElement('span', { class: 'lnr lnr-laptop' })),
                 createElement('textarea', { id: 'name-text', placeholder: 'Name', maxlength: '24' }, user.displayName)]),
             createElement('div', { id: 'username', class: 'field' },
                [createElement('div', {  }, createElement('span', { class: 'lnr lnr-user' })),
                 createElement('textarea', { id: 'username-text', placeholder: 'Username', maxlength: '24' }, user.username, ['keyup', function() { checkUsername(this.value) }]),
                 createElement('div', { id: 'check' }, createElement('span', { class: 'lnr lnr-checkmark-circle' })),
                 createElement('div', { id: 'cross' }, createElement('span', { class: 'lnr lnr-cross-circle' }))]),
             createElement('div', { id: 'bio', class: 'field' },
                [createElement('div', {  }, createElement('span', { class: 'lnr lnr-bubble' })),
                 createElement('textarea', { id: 'bio-text', placeholder: 'Bio',  }, user.bio)])]);
}

// Checks the given value for a valid username and dynamically displays whether or not the username is o.k.
function checkUsername(value) {
  const validCharacters = /^[a-z0-9_]*$/;
  const message = document.getElementById('error-msg');
  const cross = document.getElementById('cross');
  const check = document.getElementById('check');
  if (value === primaryUser.username || !value.length) {
    message.textContent = ' ';
    cross.style.visibility = 'hidden';
    check.style.visibility = 'hidden';
    return;
  }
  if (value.length < 4 || !validCharacters.test(value)) {
    message.textContent = '*please enter a valid username*';
    cross.style.visibility = 'visible';
    return;
  }
  if (users.some(function(user) { return user.username === value })) {
    message.textContent = '*this username is taken*';
    cross.style.visibility = 'visible';
    return;
  }
  message.textContent = ' ';
  cross.style.visibility = 'hidden';
  check.style.visibility = 'visible';
}

// Saves the changes made by the user to their user info if all fields are inputed correctly
function saveProfile() {
  if (!document.getElementById('name-text').value.trim()) {
    document.getElementById('error-msg').textContent = '*your name cannot be blank*';
    return;
  }
  if (!document.getElementById('username-text').value.trim()) {
    document.getElementById('error-msg').textContent = '*please enter a valid username*';
    return;
  }
  if (document.getElementById('cross').style.visibility === 'visible' || !document.getElementById('username-text').value) return;
  primaryUser.displayName = document.getElementById('name-text').value;
  primaryUser.username = document.getElementById('username-text').value;
  primaryUser.bio = document.getElementById('bio-text').value;
  displayProfile(primaryUser);
}

// 'Interactions' section: Returns #interactons element containing the interactions of the primary user + users he/she is following
function getInteractions(user, userInteractions, extra) {
  let interactionsArray = [];
  let interaction = '';
  if (user)
    interactionsArray = userInteractions.slice();
  else
    interactionsArray = userInteractions.filter( ({user}) => (user === primaryUser || primaryUser.following.indexOf(user) > -1) );
  const container = createElement('div', { id: 'interactions', class: 'shadow' }, createElement('h3', {  }, 'Interactions'));
  let itemsAdded = 0;
  interactionsArray.reverse()
  while (itemsAdded < interactionsDisplayed + extra) {
    const item = interactionsArray[itemsAdded];
    if (!item) break;
    if (item.user === primaryUser)
      interaction += 'you ';
    else
      interaction += '@' + item.user.username + ' ';
    switch (item.activity) {
      case 'like':
        if (item.post.user === primaryUser) {
          if (interaction === 'you ')
            container.appendChild(createElement('p', { class: 'interaction' }, [createElement('span', { class: "lnr lnr-heart" }), interaction + 'liked your own post']));
          else
            container.appendChild(createElement('p', { class: 'interaction' }, [createElement('span', { class: "lnr lnr-heart" }), addLinks(interaction + 'liked your post')]));
          break;
        }
        if (interaction === '@' + item.post.user.username + ' ') {
          container.appendChild(createElement('p', { class: 'interaction' }, [createElement('span', { class: "lnr lnr-heart" }), addLinks(interaction + 'liked his own post')]));
          break;
        }
        container.appendChild(createElement('p', { class: 'interaction' }, [createElement('span', { class: "lnr lnr-heart" }), addLinks(interaction + 'liked @' + item.post.user.username + '\'s post')]));
        break;
      case 'follow':
        if (item.followed === primaryUser)
          container.appendChild(createElement('p', { class: 'interaction' }, [createElement('span', { class: "lnr lnr-eye" }), addLinks(interaction + 'followed you')]));
        else
          container.appendChild(createElement('p', { class: 'interaction' }, [createElement('span', { class: "lnr lnr-eye" }), addLinks(interaction + 'followed @' + item.followed.username)]));
        break;
    }
    interaction = '';
    itemsAdded++;
  }
  if (itemsAdded < interactionsArray.length)
    container.appendChild(createElement('a', { class: 'more' }, '• • • show more • • •', ['click', displayMoreInteractions]));
  else
    container.appendChild(createElement('a', { class: 'more' }, '• • •', ['click', minimizeInteractions]));
  return container;
}

// Minimizes the interactions div and returns the display to 10 interactions
function minimizeInteractions() {
  modifyDocument('remove', 'interactions');
  interactionsDisplayed = 10;
  left.appendChild(getInteractions(currentlyViewing, currentlyViewing ? currentlyViewing.interactions : interactions, 0));
}

// Displays up to 5 more interactions in the interactions div
function displayMoreInteractions() {
  modifyDocument('remove', 'interactions');
  left.appendChild(getInteractions(currentlyViewing, currentlyViewing ? currentlyViewing.interactions : interactions, 5));
  interactionsDisplayed += 5;
}

// Returns #stats element with the given users stats: # of posts, # of users he/she is following, & # of followers
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
                 createElement('p', { class: 'count' }, user.followers.length)])],
             ['click', function(e) { displayCenterContent(e, user) }]);
}

// Refreshes #stats element on profile. Called when a new user is followed/unfollowed, new post, etc...
function refreshStats() {
  modifyDocument('remove', 'stats');
  center.insertBefore(stats(currentlyViewing), center.firstChild);
}

// Modifies content in center container to display posts, following, or followers. Called when stats is clicked.
function displayCenterContent(event, user) {
  modifyDocument('remove', ['hashtag', 'new-update', 'updates', 'list'])
  if (viewing) document.getElementById(viewing).style.borderColor = null;
  event.target.style.borderColor = '#81a9ca';
  switch (event.target) {
    case document.getElementById('posts'):
      viewing = 'posts';
      if (user === primaryUser)
        center.appendChild(updatePoster())
      center.appendChild(userUpdates(user));
      break;
    case document.getElementById('following'):
      viewing = 'following';
      center.appendChild(listOfUsers(user.following));
      break;
    case document.getElementById('followers'):
      viewing = 'followers';
      center.appendChild(listOfUsers(user.followers));
      break;
  }
}

// Returns #new-update element for posting a new update.
function updatePoster() {
  return createElement('div', { id: 'new-update', class: 'shadow' },
            [createElement('textarea', { id: 'post-input', placeholder: 'Type a new update...' }),
             createElement('button', { id: 'post-button' }, 'Post', ['click', addUpdate])]);
}

// Adds new updates that are posted to the data model, and displays them if applicable.
function addUpdate() {
  const updatesContainer = document.getElementById('updates');
  const post = document.getElementById('post-input').value;
  document.getElementById('post-input').value = '';
  if (!post.trim()) return;
  const newUpdateId = updates.length;
  const newUpdate = { id: newUpdateId, user: primaryUser, timestamp: moment(), post: post, likes: [] };
  updates.push(newUpdate);
  primaryUser.updatesCount++;
  addHashtags(newUpdate);
  if (!currentlyViewing) {
    updatesContainer.insertBefore(createElement('div', { class: 'update'}, getUpdateElements(newUpdate)), updatesContainer.firstChild);
    return;
  }
  refreshStats(primaryUser);
  document.getElementById(viewing).click();
}

// Checks the given post for hashtags and adds them to the data model.
function addHashtags(update) {
  let {post} = update;
  let newHashtags = false;
  post = post.toLowerCase();
  const validCharacters = /^[a-z0-9_]*$/;
  while (post.indexOf('#') > -1) {
    post = post.substring(post.indexOf('#') + 1);
    let pointer = 0;
    while (pointer < post.length && validCharacters.test(post.charAt(pointer)))
      pointer++;
    const hashtag = post.substring(0, pointer);
    if (!hashtag.length)
      continue;
    newHashtags = true;
    if (hashtags[hashtag] && !hashtags[hashtag].includes(update))
      hashtags[hashtag].push(update);
    else if (!hashtags[hashtag])
      hashtags[hashtag] = [update]
    post = post.substring(pointer);
  }
  if (newHashtags) {
    modifyDocument('remove', 'trending');
    right.insertBefore(trending(), document.getElementById('suggestions'));
  }
}

// Returns an #updates element containing all updates for any one given user.
function userUpdates(user) {
  const updatesToDisplay = []
  updates.forEach( update => {
    if (update.user === user)
      updatesToDisplay.unshift(createElement('div', { class: 'update' }, getUpdateElements(update)));
  });
  if (updatesToDisplay.length)
    return createElement('div', { id: 'updates', class: 'shadow' }, updatesToDisplay);
  if (currentlyViewing === primaryUser)
    updatesToDisplay.push(createElement('div', { class: 'update' }, 'No updates to display. Post a new update and it will show up on your profile.'));
  else
    updatesToDisplay.push(createElement('div', { class: 'update' }, '@' + currentlyViewing.username + ' has not posted any updates yet.'));
  return createElement('div', { id: 'updates', class: 'shadow' }, updatesToDisplay);
}

// Returns an #update element representing a single update.
function getUpdateElements({id, user, timestamp, post, likes}) {
  const liked = (primaryUser.likes.indexOf(updates[id]) > -1);
  var updateElements = [createElement('div', { class: 'photo', style: 'background-image:url('+ user.profilePic + ')' }, null, ['click', function() { displayProfile(user) }]),
                        createElement('h4', { class: 'name' }, user.displayName, ['click', function() { displayProfile(user) }]),
                        createElement('p', { class: 'username' }, '@' + user.username, ['click', function() { displayProfile(user) }]),
                        createElement('p', { class: 'timestamp' }, timestamp.format('h:mmA M/D/YY')),
                        createElement('p', { class: 'post' }, addLinks(post)),
                        createElement('button', { class: liked ? 'liked' : 'like' }, createElement('span', { class: 'lnr lnr-heart' })),
                        createElement('span', { class: 'like-count' }, likes.length)];
  updateElements[5].addEventListener('click', e => { likePost(e.target, updates[id]) });
  return updateElements;
}

// Adds links for either #hashtags or @user tags. The links will link to hashtag page or user profile when clicked.
function addLinks(post) {
  const components = []
  if (post.search(/[#@]/) === -1) {
    components.push(post);
    return components;
  }
  const validCharacters = /^[A-Za-z0-9_]*$/;
  while (post.search(/[#@]/) > -1) {
    const char = post.charAt(post.search(/[#@]/));
    components.push(post.substring(0, post.indexOf(char)))
    post = post.substring(post.indexOf(char) + 1);
    let pointer = 0;
    while (pointer < post.length && validCharacters.test(post.charAt(pointer)))
      pointer++;
    const hashtag = post.substring(0, pointer);
    if (!hashtag.length) {
      components.push(char);
      continue;
    }
    let eventListener = null;
    if (char === '#')
      eventListener = ['click', function(e) { viewHashtag(e.target.lastChild.textContent) }];
    else
      eventListener = ['click', function(e) { displayProfile(users.find( ({username}) => (e.target.lastChild.textContent === username) )) }];
    components.push(createElement('a', { class: 'hashtag', href: '#' }, [char, createElement('span', {  }, hashtag)], eventListener));
    post = post.substring(pointer);
  }
  if (post) components.push(post);
  return components;
}

// 'Likes' the given post and records the like in the data model.
function likePost(updateElement, update) {
  const liked = (updateElement.className === 'liked');
  if (!liked) {
    primaryUser.likes.push(update);
    update.likes.push(primaryUser.id);
    updateElement.className = 'liked';
    const newId = interactions.slice().pop().id + 1;
    const newInteraction = { id: newId, user: primaryUser, activity: 'like', post: update };
    interactions.push(newInteraction);
    primaryUser.interactions.push(newInteraction);
  } else {
    primaryUser.likes.splice(primaryUser.likes.indexOf(update), 1);
    update.likes.splice(update.likes.indexOf(primaryUser.id), 1);
    updateElement.className = 'like';
    const interactionToRemove = interactions.find( ({activity, post, user}) =>
      (activity === 'like' && post === update && user == primaryUser)
    );
    interactions.splice(interactions.indexOf(interactionToRemove), 1);
    primaryUser.interactions.splice(primaryUser.interactions.indexOf(interactionToRemove), 1);
  }
  if (!currentlyViewing) {
    modifyDocument('remove', 'interactions');
    left.appendChild(getInteractions(currentlyViewing, interactions, 0));
  }
  if (currentlyViewing === primaryUser) {
    modifyDocument('remove', 'interactions');
    left.appendChild(getInteractions(primaryUser, primaryUser.interactions, 0));
  }
  updateElement.parentElement.lastChild.textContent = update.likes.length;
}

// Returns #list element containing a lists of users (for displaying following & followers)
function listOfUsers(usersList) {
  const list = createElement('table', { id: 'list', class: 'shadow' }, null, ['click', function(e) { displayProfile((e.target.id && e.target.id !== 'list') ? users[e.target.id] : null) }]);
  if (!usersList.length) {
    const message = createElement('p', { class: 'message' });
    if (currentlyViewing === primaryUser && viewing === 'following')
      message.textContent = 'You are not following any users yet.'
    else if (currentlyViewing === primaryUser)
      message.textContent = 'You have no followers yet.'
    else if (viewing === 'following')
      message.textContent = '@' + currentlyViewing.username + ' is not following any users yet.'
    else
      message.textContent = '@' + currentlyViewing.username + ' does not have any followers yet.'
    list.appendChild(message);
    return list;
  }
  const oddRow = (usersList.length % 2 === 1);
  let rows = Math.floor(usersList.length / 2) + (oddRow ? 1 : 0);
  while (rows > 0) {
    if (!oddRow || rows > 1)
      list.appendChild(createElement('tr', {  }, [createElement('td', { class: 'user' }), createElement('td', { class: 'user' })]));
    else
      list.appendChild(createElement('tr', {  }, createElement('td', { class: 'user' })));
    rows--;
  }
  const userElements = list.getElementsByClassName('user');
  for (let i = 0; i < userElements.length; i++) {
    const {id, username, displayName, profilePic, updatesCount, following, followers} = usersList[i];
    userElements.item(i).setAttribute('id', id);
    userElements.item(i).appendChild(createElement('div', { class: 'photo', style: 'background-image:url(' + profilePic + ')' }));
    userElements.item(i).appendChild(createElement('h4', { class: 'name' }, displayName));
    userElements.item(i).appendChild(createElement('p', { class: 'username' }, '@' + username));
    userElements.item(i).appendChild(createElement('p', { class: 'stat' }, updatesCount + ' posts . ' + following.length + ' following . ' + followers.length + ' followers'));
  }
  return list;
}

// 'Trending' section: Returns #trending element containing top five hashtags. When there is a tie, newer hashtags take priority.
function trending() {
  const trending = createElement('div', { id: 'trending', class: 'shadow' }, createElement('h3', {  }, 'Trending'));
  const sorted = [];
  for (let hashtag in hashtags) {
    if (!sorted.length) {
      sorted.push(hashtag);
      continue;
    }
    let pointer = 0;
    while(hashtags[sorted[pointer]].length > hashtags[hashtag].length)
      pointer++;
    sorted.splice(pointer, 0, hashtag);
  }
  for (let i = 0; i < 5; i++)
    trending.appendChild(createElement('a', { class: 'hashtag', href: '#' }, ['#', createElement('span', {  }, sorted[i])], ['click', function(e) { viewHashtag(e.target.lastChild.textContent) }]));
  return trending;
}

// Displays a page for the given hashtag, and displays all updates containing that hashtag on the page.
function viewHashtag(hashtag) {
  modifyDocument('empty', ['center', 'left']);
  currentlyViewing = null;
  center.appendChild(createElement('h2', { id: 'hashtag', class: 'shadow' }, '#' + hashtag));
  center.appendChild(hashtagUpdates(hashtag));
  left.appendChild(userInfo(primaryUser));
  left.appendChild(getInteractions(currentlyViewing, interactions, 0));
}

// Returns #updates element containing all updates containg the given hashtag
function hashtagUpdates(hashtag) {
  const updatesToDisplay = [];
  hashtags[hashtag].forEach(update => { updatesToDisplay.unshift(createElement('div', { class: 'update' }, getUpdateElements(update))) });
  return createElement('div', { id: 'updates', class: 'shadow' }, updatesToDisplay);
}

// 'Who To Follow' section: Returns div element containing a list of all users besides the primary user.
function suggestions() {
  const suggestions = createElement('div', { id: 'suggestions', class: 'shadow' }, [createElement('h3', {  }, 'Who to follow')]);
  users.forEach( function(user) {
    if (user === primaryUser) return;
    const icon = primaryUser.following.includes(user) ? 'lnr-checkmark-circle' : 'lnr-plus-circle';
    suggestions.appendChild(createElement('div', { class: 'user' },
                               [createElement('div', { class: 'photo', style: 'background-image:url(\'' + user.profilePic + '\')' }, null, ['click', function() { displayProfile(user) }]),
                                createElement('h4', { class: 'name' }, user.displayName, ['click', function() { displayProfile(user) }]),
                                createElement('p', { class: 'username' }, '@' + user.username, ['click', function() { displayProfile(user) }]),
                                createElement('span', { class: 'plus lnr ' + icon }, null, ['click', function() { follow(user) }])]));
  });
  return suggestions;
}

// Attemps to display the profile of whatever user's username is typed into the search bar.
function checkSearchInput() {
  const input = document.getElementById('search-input').value;
  if (!input.trim()) return;
  displayProfile(users.find( ({username}) => (username === input) ));
  document.getElementById('search-input').value = '';
}

let focusResult = -1;
let lastFocused = null;

// User can navigate through search results using arrow keys, and search results dynamically update as user types
function keyboardNav(e) {
  const results = document.getElementsByClassName('result');
  switch (e.keyCode) {
    case 13: //enter key
      if (focusResult === -1) checkSearchInput();
      else results[focusResult].click();
      break;
    case 40: //down arrow
      lastFocused = results[focusResult];
      focusResult = (focusResult === results.length - 1) ? -1 : (focusResult + 1);
      break;
    case 38: //up arrow
      lastFocused = results[focusResult];
      focusResult = (focusResult === -1) ? (results.length - 1) : (focusResult - 1);
      break;
    case 27: //escape key
      hideResults(null);
      break;
    default: //any other key
      displayResults();
  }
  if (lastFocused)
    lastFocused.style.backgroundColor = 'transparent';
  if (results[focusResult]) {
    results[focusResult].style.backgroundColor = '#f2f6f9';
  }
}

// Search results are displayed directly underneathe search bar
function displayResults() {
  focusResult = -1;
  const input = document.getElementById('search-input').value.toLowerCase();
  const resultsContainer = document.getElementById('results');
  resultsContainer.style.visibility = 'hidden';
  while (resultsContainer.firstChild)
    resultsContainer.removeChild(resultsContainer.firstChild);
  document.getElementById('search-input').style.borderBottomLeftRadius = '15px';
  document.getElementById('search-button').style.borderBottomRightRadius = '15px';
  if (!input.trim()) return;
  const results = getSearchResults(input);
  if (!results.length) return;
  document.getElementById('search-input').style.borderBottomLeftRadius = '0';
  document.getElementById('search-button').style.borderBottomRightRadius = '0';
  results[results.length-1].style.borderBottomLeftRadius = '15px'
  results[results.length-1].style.borderBottomRightRadius = '15px'
  results.forEach( result => resultsContainer.appendChild(result) );
  resultsContainer.style.visibility = 'visible';
}

// Returns an array of .result elements for the search bar
function getSearchResults(key) {
  let primaryUserAdded = false;
  const results = [];
  const regExp = new RegExp("\\b" + key);
  users.forEach( user => {
    const info = (user.displayName + ' ' + user.username).toLowerCase();
    if (!regExp.test(info)) return;
    if (primaryUser === user) {
      results.unshift(addResult(user));
      primaryUserAdded = true;
      return;
    }
    if (primaryUserAdded && primaryUser.following.indexOf(user) > -1) {
      results.splice(1, 0, addResult(user))
      return;
    }
    if (primaryUser.following.indexOf(user) > -1) {
      results.unshift(addResult(user));
      return;
    }
    results.push(addResult(user));
  });
  return results;
}

// Returns a single .result element for the search bar
function addResult(user) {
  return createElement('div', { class: 'result' },
            [createElement('div', { class: 'photo', style: 'background-image:url(\'' + user.profilePic + '\')' }),
             createElement('h4', { class: 'name' }, user.displayName),
             createElement('p', { class: 'username' }, '@' + user.username)],
          ['click', function() { displayProfile(user) }]);
}

// Hides the #results element from being visible in the search bar.
function hideResults(event) {
  if (event && (event.target === document.getElementById('results') || event.target === document.getElementById('search-input'))) return;
  document.getElementById('results').style.visibility = 'hidden';
  document.getElementById('search-input').style.borderBottomLeftRadius = '15px';
  document.getElementById('search-button').style.borderBottomRightRadius = '15px';
}

// Adds event listeners to the header (navigation buttons and the search bar)
document.getElementById('login-link').addEventListener('click', login);
document.getElementById('password-input').addEventListener('keyup', event => { event.keyCode === 13 ? login() : null } );
document.getElementById('home-button').addEventListener('click', goHome);
document.getElementById('search-button').addEventListener('click', checkSearchInput);
document.getElementById('search-input').addEventListener('keyup', function(e) { keyboardNav(e) });
document.getElementById('search-input').addEventListener('focus', displayResults);
document.getElementById('profile-button').addEventListener('click', function() { displayProfile(primaryUser) });
document.getElementById('logout-button').addEventListener('click', logout);
document.getElementById('body').addEventListener('click', function(e) { hideResults(e) });

// Bypass login page. (for testing purposes)
primaryUser = users[0];
right.appendChild(trending());
right.appendChild(suggestions());
goHome();
toggleVisibility(['header', 'content', 'landing']);
