import {
    IonAvatar, IonButton,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonContent,
    IonHeader, IonImg,
    IonItem, IonItemOption,
    IonItemOptions, IonItemSliding,
    IonLabel,
    IonList,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './GroupFrontPage.css';

import SwiperCore, {Virtual} from 'swiper';
import Topic from "../components/Topic";
import topics from "../data/topics.json"

SwiperCore.use([Virtual]);

const GroupFrontPage: React.FC = (group) => {
    return (
        <IonPage>
            <IonContent>
                <IonList>
                    <IonCard>
                        <IonCardHeader>
                            <IonAvatar className="group_page_avatar">
                                <IonImg src="/assets/avatars/2.jpg" />
                            </IonAvatar>
                            <IonCardTitle>Matgruppen XR Oslo</IonCardTitle>
                            <IonCardSubtitle>&matgruppenxroslo</IonCardSubtitle>
                        </IonCardHeader>
                        <IonCardContent>
                            <p>Mandat fra folket i oslo XR til å hive mat inn i hele veganmafiaen.</p>
                            <p>Bli med!</p>
                            <IonButton size="small">Send Request</IonButton>
                            <p>10 Members.</p>
                        </IonCardContent>
                    </IonCard>
                </IonList>
                {topics.map(item => {
                    return (
                    <Topic {...item}/>
                )})}
            </IonContent>
        </IonPage>
    );
};

export default GroupFrontPage;
