import { 
  IonButtons, 
  IonContent, 
  IonHeader, 
  IonMenuButton, 
  IonPage, 
  IonTitle,  
  IonToolbar
} from '@ionic/react';
import './Page.css';

const Page: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          {/* <IonTitle>{name}</IonTitle> */}
          {/* <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar> */}
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
      <IonTitle class="picture">
          <IonTitle class="title">
            Settings
          </IonTitle>
        </IonTitle>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name={name} /> */}
      </IonContent>
    </IonPage>
  );
};

export default Page;
