import {
    IonAvatar,
    IonContent, IonFab, IonFabButton, IonFabList,
    IonHeader, IonIcon, IonImg,
    IonItem, IonItemOption,
    IonItemOptions, IonItemSliding,
    IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Communication.css';

import SwiperCore, {Virtual} from 'swiper';
import {add, chatbubble, megaphone, megaphoneOutline} from "ionicons/icons";

import profiles from "../data/profiles.json"

const random_profiles = profiles.sort((a, b) => 0.5 - Math.random());

SwiperCore.use([Virtual]);

type Profile = {
    name: string,
    display_name: string,
    avatar: string,
    description: string,
}

const Communication: React.FC = () => {
    return (
        <>
            <IonPage>
                <IonContent>
                    <IonList>
                        <p>wow</p>
                        <IonFab vertical="top" horizontal="start" slot="fixed">
                            <IonFabButton size="small">
                            </IonFabButton>
                            <IonFabList side="bottom" activated={true}>
                                <IonFabButton>
                                    <IonIcon size="small" icon={megaphone} />
                                </IonFabButton>
                            </IonFabList>
                        </IonFab>
                        {random_profiles?.map((profiles: Profile, key) => (
                            <IonItemSliding>
                                <IonItem>
                                    <IonAvatar slot="start">
                                        <IonImg src={profiles.avatar} />
                                    </IonAvatar>
                                    <IonLabel>{profiles.display_name}</IonLabel>
                                </IonItem>
                                <IonItemOptions side="end">
                                    <IonItemOption onClick={() => {}}>Unread</IonItemOption>
                                </IonItemOptions>
                            </IonItemSliding>
                        ))}
                    </IonList>
                </IonContent>
            </IonPage>
        </>
    );
};

export default Communication;
