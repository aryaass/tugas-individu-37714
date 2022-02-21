import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle,
  IonToolbar
} from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';

const Home: React.FC = () => {

  const { name } = useParams<{ name: string; }>();
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollY={true}>
        <IonTitle class="picture">
          <IonTitle class="title">
            Help and Support
          </IonTitle>
        </IonTitle>
        <ExploreContainer name={name} />
      </IonContent>
    </IonPage>
  );
};

export default Home;
