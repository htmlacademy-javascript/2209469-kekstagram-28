import { isEscapeKey } from './util';

const userModalElement = document.querySelector('.big-picture');
const userModalOpenElement = document.querySelector('picture_img');
const userModalCloseElement = document.querySelector('.big-picture__cancel');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

function openUserModal () {
  userModalElement.classList.remove('hidden');
  document.addEventListener('keydown', onDocumentKeydown);
}

function closeUserModal () {
  userModalCloseElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
}

userModalCloseElement.addEventListener('click', () => {
  openUserModal();
});

userModalOpenElement.addEventListener('click', () => {
  closeUserModal();
});


export { showBigPicture };
