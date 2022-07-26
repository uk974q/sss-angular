import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { User } from '../model/user.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() content = []
  headers:string[] = []
  rows = []

  constructor(private route:Router) {}
  ngOnInit(): void {
  }

  clickedRow(el:any, e:any){
    console.log(el, e)
    if(e.target.classList.length && e.target.classList.contains("link")){
      window.open('https://'+el.website, '_blank');
    }
    else{
      let path = `/user-details/${el.id}`
      this.route.navigate([path])
    }

  }



}
