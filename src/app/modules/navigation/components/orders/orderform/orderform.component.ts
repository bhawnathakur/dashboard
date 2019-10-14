import { Component, OnInit } from "@angular/core";
import { OrderService } from "../../../../../services/order.service";
import { FileUploadService } from "../../../../../services/file-upload.service";
import { HttpEventType } from "@angular/common/http";
import { HttpClient } from "@angular/common/http";
import { OrderDialogComponent } from "../order-dialog/order-dialog.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog, MatDialogConfig } from "@angular/material";
import { ActivatedRoute, Params, Router } from "@angular/router";
import {DatePipe} from '@angular/common';
@Component({
  selector: "app-orderform",
  templateUrl: "./orderform.component.html",
  styleUrls: ["./orderform.component.scss"]
})
export class OrderformComponent implements OnInit {
  uploadResponse;
  todaydate:any;
  progress: number = 0;
  progressLoading: boolean = false;
  progressMessage: string = "";
  order: Order;
  types: Type[];
  meals: any = [];
  orderMeals: orderMeal[];
  localUrl: any;
  selectedFile: File;
  constructor(
    private orderservice: OrderService,
    private uploadservice: FileUploadService,
    private http: HttpClient,
    private dialog: MatDialog,
    private snackBar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private service: OrderService,
    private datePipe:DatePipe
    
  ) {

    this.todaydate = this.datePipe.transform(new Date(),"dd-MM-yyyy");
    console.log(this.todaydate); //output - 14-02-2019
  }

  waitresses: any = [];
  waitressSelected: number;
  typeSelected: number;
  waitressName: string;
  typeName: string;
  nme: string;
  avatar: string = "";
  ngOnInit() {
    this.orderservice.getWaitresses().subscribe(data => {
      console.log(data);
      this.waitresses = data;
      this.waitressSelected = 0;
      this.typeSelected = 0;
      this.waitressName = this.waitresses[this.waitressSelected].name;

      this.types = [
        {
          id: 1,
          name: "Birthday"
        },
        {
          id: 2,
          name: "Conference"
        },
        {
          id: 3,
          name: "Anniversary"
        }
      ];
      this.typeName = this.types[this.typeSelected].name;
    });
    this.order = {
      orderNum: Math.floor(100000 + Math.random() * 900000).toString(),

      type: null,
      waitress: null,
      total: null,
      calories: null,
      imageName: "",
      meals: null
    };
   
  }

  onWaitressChange(e) {
    this.waitressName = this.waitresses[e].name;
  }
  onTypeChange(e) {
    this.typeName = this.types[e].name;
  }
  onSubmit(e) {
    this.order.waitress = this.waitressName;
    this.order.type = this.typeName;

    this.order.meals = this.meals;
    console.log(this.order);
    this.orderservice.addOrder(this.order).subscribe(data => {
      console.log(data);
    });
  }

  // add meals
  AddMeals() {
    const dialogconfig = new MatDialogConfig();
    dialogconfig.autoFocus = true;
    dialogconfig.disableClose = true;
    dialogconfig.width = "50%";
    dialogconfig.data = {
      isNew: true
    };
    dialogconfig.position = {
      top: "0"
    };

    let dialogRef = this.dialog.open(OrderDialogComponent, dialogconfig);

    dialogRef.afterClosed().subscribe(data => {
      this.meals.push(data);
      console.log(this.meals);
      this.order.total = 0;
      this.order.calories = 0;
      for (let meal of this.meals) {
        this.order.total += Number(meal.price * meal.num);
        this.order.calories += Number(meal.calories * meal.num);
      }
    });
  }
  onChangeMeal() {
    this.order.total = 0;
    this.order.calories = 0;
    for (let meal of this.meals) {
      this.order.total += Number(meal.price * meal.num);
      this.order.calories += Number(meal.calories * meal.num);
    }
  }
  deleteMeals(e) {
    this.meals.splice(e, 1);
    this.order.total = 0;
    this.order.calories = 0;
    for (let meal of this.meals) {
      this.order.total += Number(meal.price * meal.num);
      this.order.calories += Number(meal.calories * meal.num);
    }
  }
  //add meals ends
  onSelectedFile(event) {
    this.progressMessage = "";
    this.progressLoading = false;
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      //this.form.get("avatar").setValue(file);
      this.avatar = file;
      this.progressMessage = "Upload File " + file.name;
      console.log(file.name);
    }
  }

  onFileUpload() {
    const formData = new FormData();
    formData.append("avatar", this.avatar);
    console.log(this.avatar);
    this.uploadservice.uploadFile(formData).subscribe(
      res => {
        this.uploadResponse = res;
        this.progressMessage = "";
        console.log(res);
        if (res.type == HttpEventType.UploadProgress) {
          this.progress = Math.round((res.loaded / res.total) * 100);
          if (this.progress > 0 || this.progress < 100) {
            this.progressLoading = true;
          } else {
            this.progressLoading = false;
          }
        } else if (res.type === HttpEventType.Response) {
          console.log(res.body.status);
          this.order.imageName = res.body.fileName;
          if (res.body.status == "success") {
            this.progressMessage = "File uploaded";
          }
        }
      },
      err => {
        console.log(err);
      }
    );
    //upload ends
    //console.log(e.value);
  }
  
}

export interface Meal {
  id: number;
  name: string;
  calories: number;
}
export interface Order {
  orderNum: string;
  type: string;
  waitress: string;
  total: number;

  calories: number;

  imageName?: string;
  meals: Meal[];
}
export interface Waitress {
  id: number;
  name: string;
}
export interface Waitress {
  id: number;
  name: string;
}
export interface Type {
  id: number;
  name: string;
}
export interface orderMeal {
  id: number;
  name: string;
  price: number;
  calories: number;
  num: number;
}
