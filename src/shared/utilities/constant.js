import {appIcons, appImages} from '../theme/assets';

const web_client_id =
  '396667718237-b5871eer19sabub7jg8qhneksq75d443.apps.googleusercontent.com';

const stripe_publishableKey =
  'pk_test_51Lf25xJxAUizx0q5OIWfv41879r73FiP61ItNOlcUbE6MsGY8WCmULqWC9KrYyCYz18pbUBPDM7Lbb8N3giMguHh00P7XAmQlT';

const image_options = {
  title: 'Load Photo',
  cameraType: 'front',
  customButtons: [
    {name: 'button_id_1', title: 'CustomButton 1'},
    {name: 'button_id_2', title: 'CustomButton 2'},
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

const image_option = {
  width: 400,
  height: 400,
  multiple: true,
  mediaType: 'photo',
};

const networkText = 'Check Internet Connection';

var interestList = [
  {
    key: 1,
    title: 'Event Photography',
    selected: false,
  },
  {
    key: 2,
    title: 'Branding',
    selected: false,
  },
  {
    key: 3,
    title: 'Wedding Photography',
    selected: false,
  },
  {
    key: 4,
    title: 'Stylling',
    selected: false,
  },
  {
    key: 5,
    title: 'Travel',
    selected: false,
  },
  {
    key: 6,
    title: 'Food Photography',
    selected: false,
  },
  {
    key: 7,
    title: 'Ecomerece Photography',
    selected: false,
  },
  {
    key: 8,
    title: 'Canva',
    selected: false,
  },
  {
    key: 12,
    title: 'Canva',
    selected: false,
  },
  {
    key: 9,
    title: 'Adobe',
    selected: false,
  },
  {
    key: 10,
    title: 'Dropbox',
    selected: false,
  },
  {
    key: 11,
    title: 'Merchandising',
    selected: false,
  },
];

const Selection_List = [
  {
    title: 'Male',
    value: 'Male',
  },
  {
    title: 'Female',
    value: 'Female',
  },
  {
    title: 'Other',
    value: 'Other',
  },
];

const Pronoun_List = [
  {
    title: 'she/her',
    value: 'she/her',
  },
  {
    title: 'him/he',
    value: 'him/he',
  },
  {
    title: 'they/them',
    value: 'they/them',
  },
];

const Service_List = [
  {
    id: 0,
    title: 'Air  Conditioner',
    icon: appIcons.air,
  },
  {
    id: 1,
    title: 'Car Service ',
    icon: appIcons.car,
  },
  {
    id: 2,
    title: 'Plumber',
    icon: appIcons.plumber,
  },
  {
    id: 3,
    title: 'Electrician',
    icon: appIcons.electric,
  },
  {
    id: 4,
    title: 'Car Panters',
    icon: appIcons.panter,
  },
  {
    id: 5,
    title: 'Painter',
    icon: appIcons.paint,
  },
  {
    id: 6,
    title: 'Pest Control',
    icon: appIcons.pest,
  },
  {
    id: 7,
    title: 'Lock Smith',
    icon: appIcons.key,
  },
];

const Provider_List = [
  {
    id: 0,
    title: 'Ali Raza',
    Phone: '03100000002',
    icon: appImages.user,
    userType: 'name',
  },
  {
    id: 1,
    title: 'Raza',
    Phone: '031000003',
    icon: appImages.user,
    userType: '',
  },
  {
    id: 2,
    title: 'Ali Haider',
    Phone: '03100000004',
    icon: appImages.user,
    userType: '',
  },
  {
    id: 3,
    title: 'Ali 123',
    Phone: '03100000005',
    icon: appImages.user,
    userType: '',
  },

  {
    id: 4,
    title: 'Ali 232',
    Phone: '03100000002',
    icon: appImages.user,
    userType: '',
  },
  {
    id: 5,
    title: 'Fasial',
    Phone: '0310000003302',
    icon: appImages.user,
    userType: '',
  },
  {
    id: 6,
    title: 'Hassan',
    Phone: '0310000003302',
    icon: appImages.user,
    userType: '',
  },

  {
    id: 7,
    title: 'Javed',
    Phone: '0310000000234',
    icon: appImages.user,
    userType: '',
  },
  {
    id: 8,
    title: 'Hamad',
    Phone: '03100000032',
    icon: appImages.user,
    userType: '',
  },

  {
    id: 9,
    title: 'Sheraz',
    Phone: '0310000000222',
    icon: appImages.user,
    userType: '',
  },

  {
    id: 10,
    title: 'Qazi',
    Phone: '031000000045',
    icon: appImages.user,
    userType: '',
  },
];

export {
  web_client_id,
  stripe_publishableKey,
  networkText,
  image_options,
  interestList,
  Selection_List,
  Pronoun_List,
  image_option,
  Service_List,
  Provider_List,
};
