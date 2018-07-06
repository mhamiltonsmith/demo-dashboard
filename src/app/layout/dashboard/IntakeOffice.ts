export class IntakeOffice {
  id:   number;
  name: string;
  map:  string;
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
