
import ProfieImage from '../assets/img/CurentProfile.jpeg';
import CoverPhoto from '../assets/img/CoverPhotos.jpg';

const CurrentUser = [
    {
        id: 'me',
        name : localStorage.getItem('name'),
        username: '@thebegjoker',
        ProfieImage: ProfieImage,
        CoverPhoto: CoverPhoto
    }
];

export default CurrentUser;