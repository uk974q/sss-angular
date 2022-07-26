import { AfterViewInit, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { UserService } from "src/app/service/user.service";

@Component({
  selector:'app-user-item',
  templateUrl:'user-item.component.html',
  styleUrls:['./user-item.component.css']
})
export class UserItemComponent implements OnInit,AfterViewInit{
  id:number = 1;
  showDetails = false
  details:any;
  keys:any;
  constructor(private route:ActivatedRoute, private userService:UserService){}
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = +params["id"]
      this.userService.fetchUserDetails(this.id).subscribe((res:any) => {
        let newObj:any = {}
        newObj = this.flattenObj(res, newObj)
        this.details = newObj
        this.keys = Object.keys(newObj)
        this.showDetails = true
      })


    })
  }

  flattenObj(res:any, newObj:any){
    let listOfKeys = Object.keys(res)
    listOfKeys.forEach(el =>{
      if(typeof res[el] === 'object'){
        this.flattenObj(res[el],newObj)
      }
      else{
        newObj[el] = res[el]
      }
    })
    return newObj
  }

}
