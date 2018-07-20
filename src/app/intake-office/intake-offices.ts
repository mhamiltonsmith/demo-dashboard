import { IntakeOffice } from './IntakeOffice';

export const intake_offices: IntakeOffice[] = [
  {
    id: 0,
    name: "Beijing",
    map:  "CN",
    lat:  39.90,
    lng:  116.41,
    travelDocs: [
      {
        name: "TRV",
        terms: [
          {
            name: "YTD",
            current: 169794,
            previous: 160338
          },
          {
            name: "WTD",
            current: 11128,
            previous: 11150
          },
          {
            name: "Rank",
            current: 2,
            previous: 1
          }
        ]
      },
      {
        name: "SP",
        terms: [
          {
            name: "YTD",
            current: 14925,
            previous: 15769
          },
          {
            name: "WTD",
            current: 1281,
            previous: 1179
          },
          {
            name: "Rank",
            current: 3,
            previous: 2,
          }
        ]
      },
      {
        name: "WP",
        terms: [
          {
            name: "YTD",
            current: 1521,
            previous: 1736
          },
          {
            name: "WTD",
            current: 60,
            previous: 84
          },
          {
            name: "Rank",
            current: 22,
            previous: 15,
          }
        ]
      }
    ]
  },
  {
    id: 1,
    name: "Mumbai",
    map:  "IN",
    lat:  19.08,
    lng:  72.88,
    travelDocs: [
      {
        name: "TRV",
        terms: [
          {
            name: "YTD",
            current: 25794,
            previous: 200338
          },
          {
            name: "WTD",
            current: 1128,
            previous: 1150
          },
          {
            name: "Rank",
            current: 5,
            previous: 8
          }
        ]
      },
      {  
        name: "SP",
        terms: [
          {
            name: "YTD",
            current: 1425,
            previous: 1569
          },
          {
            name: "WTD",
            current: 128,
            previous: 179
          },
          {
            name: "Rank",
            current: 3,
            previous: 2
          }
        ]
      },
      {
        name: "WP",
        terms: [
          {
            name: "YTD",
            current: 151,
            previous: 136
          },
          {
            name: "WTD",
            current: 6,
            previous: 8
          },
          {
            name: "Rank",
            current: 2,
            previous: 1
          }
        ]
      }
    ]
  }
];
