

const userModalElement = document.querySelector('.big-picture');
const userModalCloseElement = document.querySelector('.big-picture__cancel');
const userModalBigPicture = document.querySelector('.big-picture__img img');
const userModalLike = document.querySelector('.likes-count');
const userModalComment = document.querySelector('.comments-count');
const userModalListComment = document.querySelector('.social__comments');
const userModalDescription = document.querySelector('.social__caption');
const commentsLoader = document.querySelector('.comments-loader');

function openUserModal () {
  userModalElement.classList.remove('hidden');
  commentsLoader.classList.add('hidden');
}

function closeUserModal () {
  userModalElement.classList.add('hidden');
}

userModalCloseElement.addEventListener('click', () => {
  openUserModal();
});

userModalCloseElement.addEventListener('click', () => {
  closeUserModal();
});

function showBigPicture ({ comments, description, likes, url }) {
  userModalBigPicture.src = url;
  userModalLike.textContent = likes;
  userModalListComment.textContent = comments;
  userModalDescription.textContent = description;
  openUserModal();
}

export { showBigPicture };
