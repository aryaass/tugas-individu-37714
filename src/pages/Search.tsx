import { 
  IonButtons, 
  IonHeader, 
  IonPage, 
  IonToolbar, 
  IonSearchbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle, 
  IonGrid,
  IonLabel, 
  IonSegment, 
  IonSegmentButton,
  IonRow,
  IonTitle,
  IonContent
} from '@ionic/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import './Page.css';

const Home: React.FC = () => {

  const [segment, setSegment] = useState<'all' | 'jouleapp' | 'chefsteps'>('all');
  const [searchText, setSearchText] = useState('');
  const showsegment = () => {
    if (segment === 'all') {
      return (
      <IonContent className='bodycolor'>
        <IonGrid style={{backgroundColor:"#edecea"}} id='All'>
          <h6 className='removetextline'>Visual Doneness Guide</h6>
          <IonRow class="ion-justify-content-center">

            <IonCard class="cardguide">
              <IonCardHeader>
                <IonCardSubtitle class="guideimg"></IonCardSubtitle>
                <IonCardTitle class="titlecardguide">Get Started: Basic Guides</IonCardTitle>
                <IonCardTitle class="subtitlecardguide"> VISUAL DONENESS GUIDES</IonCardTitle>
              </IonCardHeader>
            </IonCard>

            <IonCard class="cardguide">
              <IonCardHeader>
                <IonCardSubtitle class="guideimg"></IonCardSubtitle>
                <IonCardTitle class="titlecardguide">Quick and Easy</IonCardTitle>
                <IonCardTitle class="subtitlecardguide"> VISUAL DONENESS GUIDES</IonCardTitle>
              </IonCardHeader>
            </IonCard>

          </IonRow>
          <h6 className='removetextline'>Just Time & Stamp</h6>
          <IonRow class="ion-justify-content-center">

            <IonCard class="cardguide">
              <IonCardHeader>
                <IonCardSubtitle class="range-time-stamp">
                  <p className='range'>Range</p>
                  <p className='suhu'>149°F <br></br> 185°F</p>
                </IonCardSubtitle>
                <IonCardTitle class="titlecardguide">Chicken Leg</IonCardTitle>
                <IonCardTitle class="subtitlecardguide"> 1 HOUR 15 MINUTES - 1 HOUR 45 MINUTES</IonCardTitle>
              </IonCardHeader>
            </IonCard>

            <IonCard class="cardguide">
              <IonCardHeader>
                <IonCardSubtitle class="range-time-stamp">
                  <p className='range'>Range</p>
                  <p className='suhu'>149°F <br></br> 176°F</p>
                </IonCardSubtitle>
                <IonCardTitle class="titlecardguide">Chicken Breast</IonCardTitle>
                <IonCardTitle class="subtitlecardguide"> 45 MINUTES - 2 HOUR 15 MINUTES</IonCardTitle>
              </IonCardHeader>
            </IonCard>

          </IonRow>
          <h6 className='removetextline'>CheftSteps.com Results</h6>
          <IonRow class="ion-justify-content-center">

            <IonCard class="cardguide">
              <IonCardHeader>
                <IonCardSubtitle class="chefsteps-result">
                  <img className='chefstepsimg' src={'assets/ayam.png'} alt="" />
                </IonCardSubtitle>
                <IonCardTitle class="titlecardguide">Can't-F***-It-Up Fried Chicken</IonCardTitle>
                <IonCardTitle class="subtitlecardguide"> CHEFSTEPS.COM</IonCardTitle>
              </IonCardHeader>
            </IonCard>

            <IonCard class="cardguide">
              <IonCardHeader>
                <IonCardSubtitle class="chefsteps-result">
                  <img className='chefstepsimg' src={'assets/chicken-wings.jpg'} alt="" />
                </IonCardSubtitle>
                <IonCardTitle class="titlecardguide">Ultimate Korean Fried Chicken</IonCardTitle>
                <IonCardTitle class="subtitlecardguide"> CHEFSTEPS.COM</IonCardTitle>
              </IonCardHeader>
            </IonCard>

          </IonRow>
        </IonGrid>
      </IonContent>
    )}
    if (segment === 'jouleapp') {
      return (
      <IonContent className='bodycolor'>
        <IonGrid id='JouleApp'>
          <h6 className='removetextline'>Visual Doneness Guide</h6>
          <IonRow class="ion-justify-content-center">

            <IonCard class="cardguide">
              <IonCardHeader>
                <IonCardSubtitle class="guideimg"></IonCardSubtitle>
                <IonCardTitle class="titlecardguide">Get Started: Basic Guides</IonCardTitle>
                <IonCardTitle class="subtitlecardguide"> VISUAL DONENESS GUIDES</IonCardTitle>
              </IonCardHeader>
            </IonCard>

            <IonCard class="cardguide">
              <IonCardHeader>
                <IonCardSubtitle class="guideimg"></IonCardSubtitle>
                <IonCardTitle class="titlecardguide">Quick and Easy</IonCardTitle>
                <IonCardTitle class="subtitlecardguide"> VISUAL DONENESS GUIDES</IonCardTitle>
              </IonCardHeader>
            </IonCard>

          </IonRow>
          <h6 className='removetextline'>Just Time & Stamp</h6>
          <IonRow class="ion-justify-content-center">

            <IonCard class="cardguide">
              <IonCardHeader>
                <IonCardSubtitle class="range-time-stamp">
                  <p className='range'>Range</p>
                  <p className='suhu'>149°F <br></br> 185°F</p>
                </IonCardSubtitle>
                <IonCardTitle class="titlecardguide">Chicken Leg</IonCardTitle>
                <IonCardTitle class="subtitlecardguide"> 1 HOUR 15 MINUTES - 1 HOUR 45 MINUTES</IonCardTitle>
              </IonCardHeader>
            </IonCard>

            <IonCard class="cardguide">
              <IonCardHeader>
                <IonCardSubtitle class="range-time-stamp">
                  <p className='range'>Range</p>
                  <p className='suhu'>149°F <br></br> 176°F</p>
                </IonCardSubtitle>
                <IonCardTitle class="titlecardguide">Chicken Breast</IonCardTitle>
                <IonCardTitle class="subtitlecardguide"> 45 MINUTES - 2 HOUR 15 MINUTES</IonCardTitle>
              </IonCardHeader>
            </IonCard>

          </IonRow>
        </IonGrid>
      </IonContent>
    )}
    if (segment === 'chefsteps') {
      return (
      <IonContent className='bodycolor'>
        <IonGrid id='ChefSteps'>
          <h6 className='removetextline'>CheftSteps.com Results</h6>
          <IonRow class="ion-justify-content-center">

            <IonCard class="cardguide">
              <IonCardHeader>
                <IonCardSubtitle class="chefsteps-result">
                  <img className='chefstepsimg' src={'assets/ayam.png'} alt="" />
                </IonCardSubtitle>
                <IonCardTitle class="titlecardguide">Can't-F***-It-Up Fried Chicken</IonCardTitle>
                <IonCardTitle class="subtitlecardguide"> CHEFSTEPS.COM</IonCardTitle>
              </IonCardHeader>
            </IonCard>

            <IonCard class="cardguide">
              <IonCardHeader>
                <IonCardSubtitle class="chefsteps-result">
                  <img className='chefstepsimg' src={'assets/chicken-wings.jpg'} alt="" />
                </IonCardSubtitle>
                <IonCardTitle class="titlecardguide">Ultimate Korean Fried Chicken</IonCardTitle>
                <IonCardTitle class="subtitlecardguide"> CHEFSTEPS.COM</IonCardTitle>
              </IonCardHeader>
            </IonCard>

          </IonRow>
        </IonGrid>
      </IonContent>
    )}
  }
  const inputChangeHandler = (event:CustomEvent) => {
  setSegment(event.detail.value);
  };
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          {/* <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons> */}
          {/* <IonTitle>{name}</IonTitle> */}
          <IonSearchbar class="searchbar" value={searchText} onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
          <IonButtons class="cancel" slot="primary">
            <Link to={'/Home'}>Cancel</Link>
          </IonButtons>
        </IonToolbar>
        <IonToolbar>
          <IonSegment onIonChange={inputChangeHandler} value={segment} color="dark">
            <IonSegmentButton value="all">
              <IonLabel>All</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="jouleapp">
              <IonLabel>Joule App</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="chefsteps">
              <IonLabel>ChefSteps.com</IonLabel>
            </IonSegmentButton>
          </IonSegment>
        </IonToolbar>
      </IonHeader>
      {showsegment()}
    </IonPage>
  );
};

export default Home;
