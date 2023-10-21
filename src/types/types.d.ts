export = Theme;
export as namespace Theme;

declare namespace Theme {
  type PrimaryColorsGroup =
    | 'RED_GROUP'
    | 'ORANGE_GROUP'
    | 'BLUE_GROUP'
    | 'GRAY_GROUP';

  type PrimaryColor = Partial<PrimaryColorsGroup>;

  interface CarouselContent {
    href: string;
    src: string;
    title: string;
    desc: string;
  }

  type PhotoInfo = {
    src: string;
    alt: string;
  };

  interface TourCard {
    tourRef: string;
    photoInfo: PhotoInfo[];
    title: string;
    desc: string;
    tourPlaces: string;
    priceFrom: number;
  }
}
