import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {ModuleService} from "../../../Services/moduleService/module.service";

@Component({
  selector: 'app-edit-module',
  templateUrl: './edit-module.component.html',
  styleUrls: ['./edit-module.component.css']
})
export class EditModuleComponent implements OnInit{
  moduleId !: number;
  submitted: boolean = false;
  moduleFormGroup !: FormGroup;

  constructor(private activatedRoute: ActivatedRoute, private moduleService: ModuleService, private fb: FormBuilder,private router : Router) {
    this.moduleId = activatedRoute.snapshot.params['id'];
  }
  ngOnInit(): void {
    this.moduleService.getModule(this.moduleId).subscribe(
      module => {
        this.moduleFormGroup = this.fb.group({
          id: [module.id, Validators.required],
          name: [module.name, Validators.required],
        })
      }
    );

  }


  onEditModule() {
    this.moduleService.updateModule(this.moduleFormGroup.value).subscribe(
      data => {
        alert("Module updated as successfully ");

      }
    );

    this.router.navigateByUrl("/modules");
  }

}
