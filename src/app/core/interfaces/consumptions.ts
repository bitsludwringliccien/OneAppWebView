export interface Consumptions {
  data: Datum;
  config: Config;
  meta: Meta;
}

interface Meta {
  id: string;
  idType: string;
  params: Params;
  businessUnit: string;
  category: string;
  cache: number;
  expirationCache: number;
  additionalMeta: string;
}

interface Params {
  _format: string;
}

interface Config {
  title: Title;
  description?: any;
  footer?: any;
  detailsLink: DetailsLink;
}

interface DetailsLink {
  show?: any;
  url?: any;
}

interface Title {
  value?: any;
  show: boolean;
}

interface Datum {
  id: string;
  calls: Call[];
  messages: Message[];
}

export interface Message {
  targetNumber: string;
  eventDateTime: string;
}

export interface Call {
  targetNumber: string;
  eventDateTime: string;
  eventDuration: string;
}

