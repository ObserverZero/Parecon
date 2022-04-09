import {
    IonCard,
    IonCardContent, IonCardHeader,
    IonCardSubtitle, IonCardTitle,
    IonContent, IonImg,
    IonItem,
    IonList,
    IonPage,
} from '@ionic/react';

import './Navigation.css';

import 'swiper/swiper-bundle.min.css';
import '@ionic/react/css/ionic-swiper.css';

import 'swiper/swiper-bundle.min.css';
import '@ionic/react/css/ionic-swiper.css';

import SwiperCore, {Virtual} from 'swiper';

import GroupComponent from "../components/GroupComponent";
import affinitygroups from "../data/affinitygroups.json"

SwiperCore.use([Virtual]);

const Interaction: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <IonList>
                    <p>Interaction</p>
                    {affinitygroups.map(item => {
                        return (
                            <GroupComponent {...item}/>
                        )
                    })}
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Interaction;
