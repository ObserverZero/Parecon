import {
    IonAvatar, IonButton, IonButtons,
    IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
    IonContent,
    IonIcon, IonImg,
    IonItem,
    IonLabel,
    IonList,
    IonToolbar
} from '@ionic/react';

import './Topic.css';
import {heart, heartOutline, notifications, notificationsOutline} from "ionicons/icons";

type Topics = {
    avatar: string,
    message: string,
    userName: string
}

function Topic(contents: Topics) {
    return (
            <IonList>
                <IonCard>
                    <IonItem>
                        <IonAvatar slot="start">
                            <IonImg src={contents.avatar} />
                        </IonAvatar>
                        <IonLabel>{contents.userName}</IonLabel>
                    </IonItem>
                    <IonCardContent>
                        <p>{contents.message}</p>
                        <IonToolbar>
                            <IonButtons slot="start">
                                <IonButton>
                                    <IonIcon slot="icon-only" icon={notificationsOutline} size="small"/>
                                </IonButton>
                                <IonButton>
                                    Comment
                                </IonButton>
                                <IonButton>
                                    <IonIcon slot="icon-only" icon={heartOutline} size="small"/>
                                </IonButton>
                            </IonButtons>
                        </IonToolbar>
                    </IonCardContent>
                </IonCard>
            </IonList>
    );
};

export default Topic;
