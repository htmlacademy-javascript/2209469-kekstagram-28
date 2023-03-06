const PICTURE_COUNT = 25;
const AVATAR_COUNT = 6;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const COMMENT_COUNT = 20;

const COMMENTS_LINES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const names = [
  'Александра',
  'Кекс',
  'Антон',
  'Игорь',
  'Владислав',
  'Андрей',
];

const descriptions = [
  'Это фото — произведение искусства... Прекрасный фон, красивый антураж!',
  'Я просто прямой потомок грандиозности.',
  'Мир начинается с улыбки. #helloWorld',
  'Жизнь слишком коротка. Поэтому не забывайте улыбаться, пока ваши зубы все еще на месте.',
  'Круто, и так мило.',
  'Норм?',
  'Котики, ну куда же без них? #RedCat #keks',
  'Это фото сделало мой день.',
  'Работать трудно, но помните, что и хорошо погулять не просто. #relax #chill #friends',
  'Я люблю свою работу, особенно тогда, когда наступает отпуск! #chill',
  'Я не ленива. Я просто включила режим энергосбережения.',
];

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (array) =>
  array[getRandomInteger(0, array.length - 1)];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const generateCommentId = createIdGenerator();

const createMessage = () =>
  Array.from({ length: getRandomInteger(1, 2)}, () =>
    getRandomArrayElement(COMMENTS_LINES)
  ).join(' ');

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_COUNT)}.svg`,
  message: createMessage(),
  name: getRandomArrayElement(names),
});

const createPicture = (index) => ({
  id: index,
  url: `photo/${index}.jpg`,
  descriptions: getRandomArrayElement(descriptions),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from(
    { length: getRandomInteger(0, COMMENT_COUNT) },
    createComment
  ),
});

const getPictures = () =>
  Array.from({ length: PICTURE_COUNT }, (_, pictureIndex) =>
    createPicture(pictureIndex + 1)
  );

getPictures();
