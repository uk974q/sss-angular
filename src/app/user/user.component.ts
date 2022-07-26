import { AfterViewInit, Component, OnInit } from "@angular/core";
import { UserService } from "../service/user.service";

@Component({
  selector:'app-users',
  templateUrl:'user.component.html',
  styleUrls:['./user.component.css']
})
export class UserComponent implements OnInit{
  tableData:any;
  columns = ["id","name","email","address","phone","website"]
  constructor(private userService:UserService){}

  ngOnInit(): void {
      this.userService.fetchUsers().subscribe((res)  => {
        this.tableData = res
      })
  }


}
