import {
    IonAvatar,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonContent,
    IonHeader,
    IonItem, IonItemOption,
    IonItemOptions, IonItemSliding,
    IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './UserProfile.css';

import SwiperCore, {Virtual} from 'swiper';

SwiperCore.use([Virtual]);

const GroupFrontPage: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonAvatar>
                    <img src="/assets/avatars/2.jpg" />
                </IonAvatar>
                <p className="displayName">Petrika</p>
                <p className="systemName">@petrikathedonkey</p>
            </IonContent>
        </IonPage>
    );
};

export default GroupFrontPage;
