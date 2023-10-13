import Main1 from './HomePageComponents/Main1-main-banner/Main1';
import Main2 from './HomePageComponents/Main2-top-destination/Main2';
import Main3 from './HomePageComponents/Main3-how-to/Main3';
import Main4 from './HomePageComponents/Main4-most-famous-tour/Main4';

export default function MainPage() {
  return (
    <main>
      <Main1 />
      <Main2 />
      <Main3 />
      <Main4 />

      <div className="h-10"></div>
    </main>
  );
}
