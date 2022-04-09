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

import './GroupComponent.css';
import {heart, heartOutline, notifications, notificationsOutline} from "ionicons/icons";

type Group = {
    name: string,
    display_name: string,
    description: string,
    banner: string
}

function GroupComponent(contents: Group) {
    return (
        <IonItem className="ion_item_group_component_in_interaction_list">
            <IonCard href={"/groupfrontpage/:" + contents.name}>
                <IonImg src={contents.banner}/>
                <IonItem>
                    <IonLabel>{contents.display_name}</IonLabel>
                </IonItem>
                <IonCardContent>
                    <p>{contents.description}</p>
                </IonCardContent>
            </IonCard>
        </IonItem>
    );
};

export default GroupComponent

