import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonButton,
  IonButtons, IonContent, IonFab, IonFabButton, IonFabList,
  IonIcon, IonImg,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonToolbar,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  chatbubble,
  search,
  peopleCircle,
  menu,
  calendarClear,
  notifications,
  add,
  addCircle,
  logoTwitter,
  logoVimeo,
  logoInstagram,
  share,
  logoFacebook,
  searchCircleOutline, searchCircle, lockClosed, shield, megaphoneOutline, megaphone,
} from 'ionicons/icons';
import Navigation from './pages/Navigation';
import Interaction from './pages/Interaction';
import Communication from './pages/Communication';
import Calendar from './pages/Calendar';
import GroupFrontPage from "./pages/GroupFrontPage";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/navigation">
              <Navigation />
            </Route>
            <Route exact path="/interaction">
              <Interaction />
            </Route>
            <Route path="/communication">
              <Communication />
            </Route>
            <Route path="/groupfrontpage/:name">
              <GroupFrontPage />
            </Route>
            <Route path="/calendar">
              <Calendar />
            </Route>
            <Route exact path="/">
              <Redirect to="/calendar" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="communication" href="/communication">
              <IonIcon icon={chatbubble} size="small"/>
            </IonTabButton>
            <IonTabButton tab="interaction" href="/interaction">
              <IonIcon icon={peopleCircle} size="large"/>
            </IonTabButton>
            <IonTabButton tab="calendar" href="/calendar">
              <IonIcon icon={calendarClear} size="small"/>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
      <IonToolbar>
        <IonButtons slot="start">
          <IonButton>
            <IonIcon slot="icon-only" icon={menu} size="large"/>
          </IonButton>
          {/*
          <IonButton>
            <IonIcon slot="icon-only" icon={notifications} size="large"/>
          </IonButton>
          */}
        </IonButtons>
        <IonButtons slot="end">
          {/*
          <IonButton>
            <img className="menuProfileButton" src="/assets/avatars/1.jpg" />
          </IonButton>
          */}
          <IonButton>
            <IonIcon slot="icon-only" icon={search} size="large"/>
          </IonButton>
        </IonButtons>
      </IonToolbar>
    </IonApp>
);

export default App;
