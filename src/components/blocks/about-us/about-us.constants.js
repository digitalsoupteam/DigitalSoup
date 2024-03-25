import NikPhoto from '../../../assets/nik-photo-2.png';
import KirillPhoto from '../../../assets/Kirill.jpg';
import AlexPhoto1 from '../../../assets/Alex1.png';
import LinaPhoto from '../../../assets/lina.jpg';

const teamMembers = [
  {
    memberName: 'CEO \nNikita Daszewski',
    description: 'In SMM since 2015 \nIn Development since 2021',
    photo: NikPhoto,
  },
  {
    memberName: 'Front-end teamlead \nKirill Bashorin',
    description: 'In development since 2019',
    photo: KirillPhoto,
  },
  {
    memberName: 'Solidity teamlead \nAleks Korolev',
    description: 'In development since 2016',
    photo: AlexPhoto1,
    hideContact: true,
  },
  {
    memberName: 'Art director \nEli Weinstein',
    description: 'In Design since 2014',
    photo: LinaPhoto,
  },
];

export { teamMembers };
