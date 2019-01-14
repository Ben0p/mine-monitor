import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { DataService } from "../data.service";
import { Router } from "@angular/router";

export interface Type {
  value: string;
  viewValue: string;
}

export interface alertType {
  value: string;
  viewValue: string;
}

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.scss"]
})
export class EditComponent implements OnInit {
  selectedType: string;
  alertType: string;

  editForm = new FormGroup({
    type: new FormControl(""),
    fleet_name: new FormControl(""),
    fleet_xim: new FormControl(""),
    fleet_screen: new FormControl(""),
    fleet_other: new FormControl(""),
    fleet_2: new FormControl(""),
    fleet_5: new FormControl(""),
    alert_location: new FormControl(""),
    alert_ip: new FormControl(""),
    alert_type: new FormControl(""),
    trailer_number: new FormControl(""),
    west_ip: new FormControl(""),
    central_ip: new FormControl(""),
    east_ip: new FormControl(""),
    parent: new FormControl(""),
    tristar_ip: new FormControl(""),
    tropos2_ip: new FormControl(""),
    cisco1572_ip: new FormControl(""),
    ubi_ip: new FormControl(""),
    correction_ip: new FormControl("")
  });

  types: Type[] = [
    { value: "fleet", viewValue: "Fleet" },
    { value: "alert", viewValue: "Alert" },
    { value: "trailer", viewValue: "Trailer" },
    { value: "corrections", viewValue: "Correction" }
  ];

  alertTypes: alertType[] = [
    { value: "sign", viewValue: "Sign" },
    { value: "calert", viewValue: "C-Alert" },
    { value: "trailer", viewValue: "Trailer" }
  ];

  constructor(private data: DataService, public router: Router) {}

  ngOnInit() {}

  onSubmit(operation) {
    // TODO: Use EventEmitter with form value
    console.warn(this.editForm.value);
    if (operation == "submit") {
      this.data.edit(this.editForm.value).subscribe(results => {
        console.log(results);
      });
    } else if (operation == "delete") {
      if (this.editForm.value.type == "alert") {
        if (this.editForm.value.alertType == "trailer") {
          this.data
            .delete(
              this.editForm.value.type,
              this.editForm.value.trailer_number
            )
            .subscribe(results => {
              console.log(results);
            });
        } else {
          this.data
            .delete(
              this.editForm.value.type,
              this.editForm.value.alert_location
            )
            .subscribe(results => {
              console.log(results);
            });
        }
      } else if (this.editForm.value.type == "fleet") {
        this.data
          .delete(this.editForm.value.type, this.editForm.value.fleet_name)
          .subscribe(results => {
            console.log(results);
          });
      } else if (this.editForm.value.type == "corrections") {
        this.data
          .delete(this.editForm.value.type, this.editForm.value.correction_ip)
          .subscribe(results => {
            console.log(results);
          });
      }
    }

    // Rest all exept type
    this.editForm.setValue(
      {
        'type' : this.editForm.value.type,
        'fleet_name' : "",
        'fleet_xim' : "",
        'fleet_screen' : "",
        'fleet_other' : "",
        'fleet_2' : "",
        'fleet_5' : '',
        'alert_location' : '',
        'alert_ip' : "",
        'alert_type' : "",
        'trailer_number' : "",
        'west_ip' : "",
        'central_ip' : "",
        'east_ip' : "",
        'parent' :"",
        'tristar_ip' : "",
        'tropos2_ip' : "",
        'cisco1572_ip' : "",
        'ubi_ip' : "",
        'correction_ip' : ""
      }
    )

    // this.router.navigateByUrl('/alerts');
    
  }
}
