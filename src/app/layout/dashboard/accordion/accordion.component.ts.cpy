import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  data: any = {
    colData: [
      {
        name: "TRV",
        accordionId: "accordion-trv",
        rowData: [
          {
            name: "YTD",
            headingId : "heading-trv-ytd",
            collapseId : "collapse-trv-ytd",
            sparklineId: "spark-trv-ytd",
            chartjsId: "line-chart",
            targets : "#collapse-trv-ytd, #collapse-sp-ytd, #collapse-wp-ytd",
            current: 169794,
            previous: 160338,
            isBadge: false
          },
          {
            name: "Week",
            headingId : "heading-trv-wtd",
            collapseId : "collapse-trv-wtd",
            sparklineId: "spark-trv-wtd",
            chartjsId: "bar-chart",
            targets : "#collapse-trv-wtd, #collapse-sp-wtd, #collapse-wp-wtd",
            current: 11128,
            previous: 11150,
            isBadge: false
          },
          {
            name: "Rank",
            headingId : "heading-trv-rank",
            collapseId : "collapse-trv-rank",
            sparklineId: "spark-trv-rank",
            targets : "#collapse-trv-rank, #collapse-sp-rank, #collapse-wp-rank",
            current: 2,
            previous: 1,
            isBadge: true
          }
        ]
      },
      {
        name: "SP",
        accordionId: "accordion-sp",
        rowData: [
          {
            name: "YTD",
            headingId : "heading-sp-ytd",
            collapseId : "collapse-sp-ytd",
            sparklineId: "spark-sp-ytd",
            chartjsId: "radar-chart",
            targets : "#collapse-trv-ytd, #collapse-sp-ytd, #collapse-wp-ytd",
            current: 14925,
            previous: 15769,
            isBadge: false
          },
          {
            name: "Week",
            headingId : "heading-sp-wtd",
            collapseId : "collapse-sp-wtd",
            sparklineId: "spark-sp-wtd",
            chartjsId: "polar-chart",
            targets : "#collapse-trv-wtd, #collapse-sp-wtd, #collapse-wp-wtd",
            current: 1281,
            previous: 1179,
            isBadge: false
          },
          {
            name: "Rank",
            headingId : "heading-sp-rank",
            collapseId : "collapse-sp-rank",
            sparklineId: "spark-sp-rank",
            targets : "#collapse-trv-rank, #collapse-sp-rank, #collapse-wp-rank",
            current: 3,
            previous: 2,
            isBadge: true
          }
        ]
      },
      {
        name: "WP",
        accordionId: "accordion-wp",
        rowData: [
          {
            name: "YTD",
            headingId : "heading-wp-ytd",
            collapseId : "collapse-wp-ytd",
            sparklineId: "spark-wp-ytd",
            chartjsId: "pie-chart",
            targets : "#collapse-trv-ytd, #collapse-sp-ytd, #collapse-wp-ytd",
            current: 1521,
            previous: 1736,
            isBadge: false
          },
          {
            name: "Week",
            headingId : "heading-wp-wtd",
            collapseId : "collapse-wp-wtd",
            sparklineId: "spark-wp-wtd",
            chartjsId: "donut-chart",
            targets : "#collapse-trv-wtd, #collapse-sp-wtd, #collapse-wp-wtd",
            current: 60,
            previous: 84,
            isBadge: false
          },
          {
            name: "Rank",
            headingId : "heading-wp-rank",
            collapseId : "collapse-wp-rank",
            sparklineId: "spark-wp-rank",
            targets : "#collapse-trv-rank, #collapse-sp-rank, #collapse-wp-rank",
            current: 22,
            previous: 15,
            isBadge: true
          }
        ]
      }
    ]
  }
  constructor() { }

  ngOnInit() {
  }

}
