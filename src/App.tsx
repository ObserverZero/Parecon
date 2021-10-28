import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonButton,
  IonButtons,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  navigate,
  chatbubble,
  search,
  peopleCircle,
  menu,
} from 'ionicons/icons';
import Navigation from './pages/Navigation';
import Interaction from './pages/Interaction';
import Communication from './pages/Communication';

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
          <Route exact path="/">
            <Redirect to="/interaction" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="interaction" href="/interaction">
            <IonIcon icon={peopleCircle} />
          </IonTabButton>
          <IonTabButton tab="communication" href="/communication">
            <IonIcon icon={chatbubble} />
          </IonTabButton>
          <IonTabButton tab="navigation" href="/navigation">
            <IonIcon icon={navigate} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
    <IonToolbar>
      <IonTitle>XR.oslo(app)</IonTitle>
      <IonButtons slot="start">
        <IonButton>
          <IonIcon slot="icon-only" icon={menu} />
        </IonButton>
      </IonButtons>
      <IonButtons slot="end">
        <IonButton>
          <IonIcon slot="icon-only" icon={search} />
        </IonButton>
      </IonButtons>
    </IonToolbar>
  </IonApp>
);

export default App;
