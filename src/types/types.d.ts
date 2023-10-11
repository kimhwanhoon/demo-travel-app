export = Theme;
export as namespace Theme;

declare namespace Theme {
  type PrimaryColorsGroup =
    | 'RED_GROUP'
    | 'ORANGE_GROUP'
    | 'BLUE_GROUP'
    | 'GRAY_GROUP';

  type PrimaryColor = Partial<PrimaryColorsGroup>;
}
