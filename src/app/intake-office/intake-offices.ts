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
            chartjsId: "line-chart",
            current: 169794,
            previous: 160338
          },
          {
            name: "WTD",
            chartjsId: "bar-chart",
            current: 11128,
            previous: 11150
          },
          {
            name: "Rank",
            chartjsId: "none",
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
            chartjsId: "radar-chart",
            current: 14925,
            previous: 15769
          },
          {
            name: "WTD",
            chartjsId: "polar-chart",
            current: 1281,
            previous: 1179
          },
          {
            name: "Rank",
            current: 3,
            previous: 2,
            chartjsId: "none"
          }
        ]
      },
      {
        name: "WP",
        terms: [
          {
            name: "YTD",
            chartjsId: "pie-chart",
            current: 1521,
            previous: 1736
          },
          {
            name: "WTD",
            chartjsId: "donut-chart",
            current: 60,
            previous: 84
          },
          {
            name: "Rank",
            current: 22,
            previous: 15,
            chartjsId: "none"
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
            chartjsId: "line-chart",
            current: 25794,
            previous: 200338
          },
          {
            name: "WTD",
            chartjsId: "bar-chart",
            current: 1128,
            previous: 1150
          },
          {
            name: "Rank",
            chartjsId: "none",
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
            chartjsId: "radar-chart",
            current: 1425,
            previous: 1569
          },
          {
            name: "WTD",
            chartjsId: "polar-chart",
            current: 128,
            previous: 179
          },
          {
            name: "Rank",
            chartjsId: "none",
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
            chartjsId: "pie-chart",
            current: 151,
            previous: 136
          },
          {
            name: "WTD",
            chartjsId: "donut-chart",
            current: 6,
            previous: 8
          },
          {
            name: "Rank",
            chartjsId: "none",
            current: 2,
            previous: 1
          }
        ]
      }
    ]
  }
];
