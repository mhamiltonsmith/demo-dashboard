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
  @Input() term:        any;         /** Row-specific data object */
  @Input() doc_name:    string;      /** The name of this row's column */
  @Input() doc_names:   string[];    /** The names of all columns in the accordion */
           is_badge:    boolean;

  private numeral: any = numeral;       /** Define numeral so it may be called from this components HTML template */
  private chart_area = { height: 35 };  /** Define a parameter object to feed to sparkline component */

/** Determines whether row should be appear as a simple badge or a details stats */
  isBadge(): boolean {
    if (this.term.name == "Rank") {
      return true;
    } else {
      return false;
    }
  }

/** Get ids and data-target attributes using the names of the doc type and period of time (term) */
  getHeadingId(): string {
    var id = this.getGenericId("heading", this.doc_name, this.term.name);
    return id;
  }
  getCollapseId(): string {
    return this.getGenericId("collapse", this.doc_name, this.term.name);
  }
  getSparklineId(): string {
    return this.getGenericId("spark", this.doc_name, this.term.name);
  }
  getTargets(): string {
    var targets = "";
    for (var doc_name in this.doc_names) {
      targets += this.getGenericId("#collapse", this.doc_names[doc_name], this.term.name)
      if (parseInt(doc_name) < this.doc_names.length - 1) {
        targets += ", "
      }
    }
    return targets;
  }
  getGenericId(typeName: string, doc_name: string, termName:string ): string {
    return typeName.toLowerCase() + "-" + doc_name.toLowerCase() + "-" + termName.toLowerCase()
  }

  chartsInit() {
    this.chartsSparklines();
  }

/** Copied from app-charts-sparkline.js. */
  chartsSparklines() {
    var term_name = this.term.name.toLowerCase();
    var color: any;

    if (term_name == "ytd"){
      color = App.color.primary;
    } else if (term_name == "wtd"){ 
      color = App.color.warning;
    } else if (term_name == "rank"){ 
      color = App.color.success;
    } else { 
      color = App.color.danger;
    }
      

    $('#spark-'+ this.doc_name.toLowerCase() + '-' + term_name).sparkline([20, 18, 12, 28, 6, 10, 19, 7, 2, 15, 17, 13], {
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
