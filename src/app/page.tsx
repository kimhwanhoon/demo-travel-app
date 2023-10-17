import Main1 from './HomePageComponents/Main1-main-banner/Main1';
import Main2 from './HomePageComponents/Main2-top-destination/Main2';
import Main3 from './HomePageComponents/Main3-how-to/Main3';
import Main4 from './HomePageComponents/Main4-most-famous-tour/Main4';
import { Main5 } from './HomePageComponents/Main5-tour-divider/Main5';
import { Main7 } from './HomePageComponents/Main7-subscribe/Main7';
import { Main6 } from './Main6-recommendation/Main6';

export default function MainPage() {
  return (
    <main className=''>
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />
      <Main5 />
      <Main6 />
      <Main7 />
      <div className='h-10'></div>
    </main>
  );
}
