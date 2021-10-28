import {IonContent, IonicSwiper, IonPage, } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import './Navigation.css';

import 'swiper/swiper-bundle.min.css';
import '@ionic/react/css/ionic-swiper.css';

import 'swiper/swiper-bundle.min.css';
import '@ionic/react/css/ionic-swiper.css';
import {Pagination} from "swiper";

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
                <h1>Navigation</h1>
                <Swiper
                    pagination={{
                        clickable: true
                    }}
                >
                    <SwiperSlide>
                        TODO: It could be that a dedicated navigation interface could be used even if each of the other
                            modes could still have their own navigation systems. A robust interface that lets you use
                            arbitrary ways of traversing the platform and its members.
                    </SwiperSlide>
                    <SwiperSlide>
                        TODO: One might navigate the dashboard of a group through a carousel slide.
                    </SwiperSlide>
                    <SwiperSlide>
                        TODO: Social app. Make it fun.
                    </SwiperSlide>
                </Swiper>
            </IonContent>
        </IonPage>
    );
};

export default Navigation;