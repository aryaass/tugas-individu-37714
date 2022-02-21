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
  IonIcon,
  IonRow,
  IonCol,
  IonFab,
  IonButton,
  IonText,
  IonFabButton
} from '@ionic/react';
import { search, layersOutline, qrCodeOutline } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Splash from '../components/splash/Splash';
import './Page.css';

const Home: React.FC = () => {

  const[showSplash, setShowSplash]= useState(false);

  useEffect(()=>{
    setShowSplash(true);
    setTimeout(() => {
      setShowSplash(false);
    }, 3000);
  },[])
  
  return (
    <IonPage>
      {
        showSplash ? <Splash />: null
      }
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          {/* <IonTitle>{name}</IonTitle> */}
          {/* <IonSearchbar value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar> */}

          <IonButtons class="cancel" slot="primary">
            <Link to={'/Search'}>
              Search <IonIcon class="iconsearch" slot="start" icon={search} />
            </Link>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent scrollY={true}>
        <IonTitle class="picture">
          <IonTitle class="title">
            Get Your Joule. <br></br> Be Happy.
          </IonTitle>
        </IonTitle>
        
        <IonTitle>
          <h5 className='textline1'>Search by Type</h5>
        </IonTitle>

        <IonGrid id='Search-by-Type'>
          <IonRow class="ion-justify-content-center">

            <IonCol size="4">
              <IonCard class="cardtype">
                <IonCardContent class="bgcircle">
                  <img className='typeimg' src={'assets/beef.svg'} alt="" />
                </IonCardContent>
                <h3 className="h3title"><p>Beef</p></h3>
              </IonCard>
            </IonCol>

            <IonCol size="4">
              <IonCard class="cardtype">
                <IonCardContent class="bgcircle">
                <img className='typeimg' src={'assets/fish.svg'} alt="" />
                </IonCardContent>
                <h3 className="h3title"><p>Seafood</p></h3>
              </IonCard>
            </IonCol>

            <IonCol size="4">
              <IonCard class="cardtype">
                <IonCardContent class="bgcircle">
                  <img className='typeimg' src={'assets/chicken.svg'} alt="" />
                </IonCardContent>
                <h3 className="h3title"><p>Poultry</p></h3>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow class="ion-justify-content-center">
            <IonCol size="4">
              <IonCard class="cardtype">
                <IonCardContent class="bgcircle">
                  <img className='typeimg' src={'assets/pork.svg'} alt="" />
                </IonCardContent>
                <h3 className="h3title"><p>Pork</p></h3>
              </IonCard>
            </IonCol>

            <IonCol size="4">
              <IonCard class="cardtype">
                <IonCardContent class="bgcircle">
                  <img className='typeimg' src={'assets/lamb.svg'} alt="" />
                </IonCardContent>
                <h3 className="h3title"><p>Lamb</p></h3>
              </IonCard>
            </IonCol>

            <IonCol size="4">
              <IonCard class="cardtype">
                <IonCardContent class="bgcircle">
                  <img className='typeimg' src={'assets/deer.svg'} alt="" />
                </IonCardContent>
                <h3 className="h3title"><p>Game</p></h3>
              </IonCard>
            </IonCol>
          </IonRow>

          <IonRow class="ion-justify-content-center">
            <IonCol size="4">
              <IonCard class="cardtype">
                <IonCardContent class="bgcircle">
                  <img className='typeimg' src={'assets/vegetables.svg'} alt="" />
                </IonCardContent>
                <h3 className="h3title"><p>Vegetables</p></h3>
              </IonCard>
            </IonCol>

            <IonCol size="4">
              <IonCard class="cardtype">
                <IonCardContent class="bgcircle">
                  <img className='typeimg' src={'assets/dessert.svg'} alt="" />
                </IonCardContent>
                <h3 className="h3title"><p>Desserts</p></h3>
              </IonCard>
            </IonCol>

            <IonCol size="4">
              <IonCard class="cardtype">
                <IonCardContent class="bgcircle">
                  <img className='typeimg' src={'assets/other.svg'} alt="" />
                </IonCardContent>
                <h3 className="h3title"><p>Other</p></h3>
              </IonCard>
            </IonCol>

          </IonRow>
        </IonGrid>

        <IonTitle>
          <h5 className='textline1'>Cooking Guides</h5>
        </IonTitle>

        <IonGrid id='Cooking-Guides'>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12">

              <IonCard class="cardguide">
                <IonCardContent>
                  <IonCardSubtitle class="guideimg"></IonCardSubtitle>
                  <IonCardTitle class="titlecardguide">Get Started: Basic Guides</IonCardTitle>
                </IonCardContent>
                <IonIcon class="iconlayer" icon={layersOutline} />
              </IonCard>

              <IonCard class="cardguide">
                <IonCardContent>
                  <IonCardSubtitle class="guideimg1"></IonCardSubtitle>
                  <IonCardTitle class="titlecardguide">Quick and Easy</IonCardTitle>
                </IonCardContent>
                <IonIcon class="iconlayer" icon={layersOutline} />
              </IonCard>

              <IonCard class="cardguide">
                <IonCardContent>
                  <IonCardSubtitle class="guideimg1"></IonCardSubtitle>
                  <IonCardTitle class="titlecardguide">Cooking in a Jar-No <br></br>Bag Required!</IonCardTitle>
                </IonCardContent>
                <IonIcon class="iconlayer" icon={layersOutline} />
              </IonCard>

              <IonCard class="cardguide">
                <IonCardContent>
                  <IonCardSubtitle class="guideimg"></IonCardSubtitle>
                  <IonCardTitle class="titlecardguide">All the Guides</IonCardTitle>
                </IonCardContent>
                <IonIcon class="iconlayer" icon={layersOutline} />
              </IonCard>

              <IonCard class="cardguide">
                <IonCardContent>
                  <IonCardSubtitle class="guideimg1"></IonCardSubtitle>
                  <IonCardTitle class="titlecardguide">Joule Ready <br></br>(Available in the US)</IonCardTitle>
                </IonCardContent>
                <IonIcon class="iconlayer" icon={layersOutline} />
              </IonCard>

            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
        <IonFab vertical="bottom" horizontal="center" slot="fixed" >
          <IonButton color="light" shape="round" type="button" size="small" class="btnBottom">
            <IonText color="primary">Search for Joule</IonText>
          </IonButton>
        </IonFab>

        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton color="light">
            <IonIcon icon={qrCodeOutline} />
          </IonFabButton>
        </IonFab>
    </IonPage>
  );
};

export default Home;
