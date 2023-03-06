export interface ISerie{
  url: string,
  name: string,
  contentType: string,
  description: string,
  contentRating: string,
  genre: string,
  poster: string,
  formattedDuration: string,
  releasedDate: Date,
  actors: string,
  director: string,
  creator: string,
  audio: string,
  subtitle: string,
  availableForOffline: string,
  numberOfSeasons: number,
  seasonStartDate: Date,
  source: string,
  sourceLink: string,
  uniqId: string,
  scrapedAt: Date
}

export class Serie implements ISerie {
  url!: string;
  name!: string;
  contentType!: string;
  description!: string;
  contentRating!: string;
  genre!: string;
  poster!: string;
  formattedDuration!: string;
  releasedDate!: Date;
  actors!: string;
  director!: string;
  creator!: string;
  audio!: string;
  subtitle!: string;
  availableForOffline!: string;
  numberOfSeasons!: number;
  seasonStartDate!: Date;
  source!: string;
  sourceLink!: string;
  uniqId!: string;
  scrapedAt!: Date;
}
