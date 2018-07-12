export class IntakeOffice {
  id:   number;
  name: string;
  map:  string;
  lat:  number;
  lng:  number;
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
  chartjsId: string;
}
