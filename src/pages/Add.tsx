import {
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

import './Add.css';

import SwiperCore, {Virtual} from 'swiper';

SwiperCore.use([Virtual]);

const Add: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonList>
                    <IonItemSliding>
                        <IonItem>
                            <IonLabel>Someone</IonLabel>
                        </IonItem>
                        <IonItemOptions side="end">
                            <IonItemOption onClick={() => {}}>Unread</IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>
                    <IonItemSliding>
                        <IonItem>
                            <IonLabel>Someone Else</IonLabel>
                        </IonItem>
                        <IonItemOptions side="end">
                            <IonItemOption onClick={() => {}}>Unread</IonItemOption>
                        </IonItemOptions>
                    </IonItemSliding>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Add;
