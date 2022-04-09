import {
    IonButton,
    IonCard,
    IonCardContent, IonCardHeader,
    IonCardSubtitle, IonCardTitle,
    IonContent, IonIcon,
    IonItem, IonLabel,
    IonList,
    IonPage,
} from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Navigation.css';
import '../components/Topic';

import 'swiper/swiper-bundle.min.css';
import '@ionic/react/css/ionic-swiper.css';

import 'swiper/swiper-bundle.min.css';
import '@ionic/react/css/ionic-swiper.css';

import SwiperCore, {Virtual} from 'swiper';
import {pin, walk, warning, wifi, wine} from "ionicons/icons";
import GroupFrontPage from "./GroupFrontPage";
import Topic from "../components/Topic";

SwiperCore.use([Virtual]);

const Interaction: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <p>Interaction</p>
                <IonList lines={"none"}>
                    <IonItem>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardSubtitle>4/2 - 2022</IonCardSubtitle>
                                <IonCardTitle>Equinor!</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>Gi kontroll over hva som kommer opp i folks kalender til gruppene klienten ser i?</IonCardContent>
                        </IonCard>
                    </IonItem>
                    <IonItem>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardSubtitle>2 Feb.</IonCardSubtitle>
                                <IonCardTitle>Banner Workshop</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                Bannere til aksjon på Fredag.
                            </IonCardContent>
                        </IonCard>
                    </IonItem>
                    <IonItem>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardSubtitle>3 Mars</IonCardSubtitle>
                                <IonCardTitle>Sivil Ulydighetskurs</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                Kurs på greenhouse. Åpen for alle nye medlemmer.
                            </IonCardContent>
                        </IonCard>
                    </IonItem>
                    <IonItem>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardSubtitle>15. Mars</IonCardSubtitle>
                                <IonCardTitle>Våropprør</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                Fuck up Downtown Oslo.
                            </IonCardContent>
                        </IonCard>
                    </IonItem>
                    <IonItem>
                        <IonCard>
                            <IonCardHeader>
                                <IonCardSubtitle>1. Juni</IonCardSubtitle>
                                <IonCardTitle>Accept Terms of Government's Surrender.</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                Shuffle members of a particular group. This could expose the dashboard features of each
                                individual group.
                            </IonCardContent>
                        </IonCard>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Interaction;
