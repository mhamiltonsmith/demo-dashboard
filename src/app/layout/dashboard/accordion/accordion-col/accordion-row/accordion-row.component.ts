import { Component, OnInit, OnChanges, Input } from '@angular/core';

declare var tinycolor: any;

@Component({
  selector: 'app-accordion-row',
  templateUrl: './accordion-row.component.html',
  styleUrls: ['./accordion-row.component.css']
})

export class AccordionRowComponent implements OnInit, OnChanges {

/** Matching rows in each columns all open at once. Each row has a unique id. A list of these ids is specified in each row's data-target property */

  chart_data   = [20, 18, 12, 28, 6, 38, 19, 7, 2, 15, 17, 13]
 
  @Input() chart_color: string[];
  @Input() row_data:    any;         /** Row-specific data object */
  @Input() col_name:    string;      /** The name of this row's column */
  @Input() acc_name:    string;
  @Input() col_names:   string[];    /** The names of all columns in the accordion */
           is_badge:    boolean;

  private numeral: any = numeral;       /** Define numeral so it may be called from this components HTML template */
  private chart_area = { height: 35 };  /** Define a parameter object to feed to sparkline component */

/** Determines whether row should be appear as a simple badge or a details stats */
  isBadge(): boolean {
    if (this.row_data.name == "Rank") {
      return true;
    } else {
      return false;
    }
  }

/** Get ids and data-target attributes using the names of the doc type and period of time (term) */
  getHeadingId(): string {
    var id = this.getGenericId("heading");
    return id;
  }
  getCollapseId(): string {
    return this.getGenericId("collapse");
  }
  getSparklineId(): string {
    return this.getGenericId("spark");
  }
  getTargets(): string {
    var targets = "";
    for (var i in this.col_names) {
      targets += this.getGenericId("#collapse", this.col_names[i])
      if (parseInt(i) < this.col_names.length - 1) {
        targets += ", "
      }
    }
    return targets;
  }
  getGenericId(type_name: string, col_name: string = this.col_name): string {
    return type_name.toLowerCase() + "-" + this.acc_name.toLowerCase() + "-" + col_name.toLowerCase() + "-" + this.row_data.name.toLowerCase()
  }

  getAccordionId() {
    return "#accordion" + "-" + this.acc_name.toLowerCase()
  }

  chartsInit() {
    this.chartsSparklines();
  }

/** Copied from app-charts-sparkline.js. */
  chartsSparklines() {
    var row_name = this.row_data.name.toLowerCase();
    var color: any;

    if (row_name == "ytd"){
      color = App.color.primary;
    } else if (row_name == "wtd"){ 
      color = App.color.warning;
    } else if (row_name == "rank"){ 
      color = App.color.success;
    } else { 
      color = App.color.danger;
    }
      

    $('#spark-'+ this.col_name.toLowerCase() + '-' + row_name).sparkline([20, 18, 12, 28, 6, 10, 19, 7, 2, 15, 17, 13], {
      type: 'bar',
      width: '85',
      height: '35',
      barWidth: 3,
      barSpacing: 3,
      chartRangeMin: 0,
      barColor: color
    });
  }

  constructor() { }

  ngOnInit() { 
    this.is_badge = this.isBadge();
  }

  ngOnChanges() { }

}
