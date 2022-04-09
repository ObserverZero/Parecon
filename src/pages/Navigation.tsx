import {IonContent, IonicSwiper, IonPage, IonList, } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Navigation.css';

import 'swiper/swiper-bundle.min.css';
import '@ionic/react/css/ionic-swiper.css';

import 'swiper/swiper-bundle.min.css';
import '@ionic/react/css/ionic-swiper.css';

import SwiperCore from 'swiper';

SwiperCore.use([IonicSwiper]);



const slideOpts = {
  initialSlide: 1,
  speed: 400
};

const Navigation: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <p>Navigation</p>
                      <IonList>
                        <p>Here be the menu for creating a new thing</p>
                        <p>This must be fun and super easy</p>
                      </IonList>
            </IonContent>
        </IonPage>
    );
};

export default Navigation;
