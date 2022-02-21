import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle,
  IonToolbar, 
  IonCard,
  IonCardSubtitle,
  IonCardTitle, 
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/react';
import './Page.css';

const Home: React.FC = () => {
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
            Tips and Tricks
          </IonTitle>
        </IonTitle>

        <IonGrid id='Cooking-Guides'>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12">

              <IonCard class="cardguide">
                <IonCardContent>
                  <IonCardSubtitle class="guideimg"></IonCardSubtitle>
                  <IonCardTitle class="titlecardguide">Get Started: Basic Guides</IonCardTitle>
                </IonCardContent>
              </IonCard>

              <IonCard class="cardguide">
                <IonCardContent>
                  <IonCardSubtitle class="guideimg"></IonCardSubtitle>
                  <IonCardTitle class="titlecardguide">Quick and Easy</IonCardTitle>
                </IonCardContent>
              </IonCard>

              <IonCard class="cardguide">
                <IonCardContent>
                  <IonCardSubtitle class="guideimg"></IonCardSubtitle>
                  <IonCardTitle class="titlecardguide">Cooking in a Jar-No <br></br>Bag Required!</IonCardTitle>
                </IonCardContent>
              </IonCard>

              <IonCard class="cardguide">
                <IonCardContent>
                  <IonCardSubtitle class="guideimg"></IonCardSubtitle>
                  <IonCardTitle class="titlecardguide">All the Guides</IonCardTitle>
                </IonCardContent>
              </IonCard>

              <IonCard class="cardguide">
                <IonCardContent>
                  <IonCardSubtitle class="guideimg"></IonCardSubtitle>
                  <IonCardTitle class="titlecardguide">Joule Ready <br></br>(Available in the US)</IonCardTitle>
                </IonCardContent>
              </IonCard>

            </IonCol>
          </IonRow>
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};

export default Home;
