export class Office {
  id:   number;
  name: string;
  lat:  number;
  lng:  number;
  metrics: Metric[]
}

export class Metric {
  name: string;
  travelDocs: TravelDoc[];
}

class TravelDoc {
  name:  string;
  terms: TermStats[];
}

class TermStats {
  name:      string;
  current:   number;
  previous:  number;
}
