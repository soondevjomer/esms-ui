import { AssessmentType, AssessmentSet } from './../../../models/app-models';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { InputComponent } from 'src/app/shared/ui/input/input.component';
import { AssessmentSetComponent } from '../assessment-set/assessment-set.component';
import { SelectComponent } from 'src/app/shared/ui/select/select.component';

@Component({
  selector: 'app-assessment',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AssessmentSetComponent,
    InputComponent,
    SelectComponent,
  ],
  templateUrl: './assessment.component.html',
})
export class AssessmentComponent implements OnInit {
  assessmentForm!: FormGroup;
  value: any;
  assessmentTypes?: Array<AssessmentType> = [
    { id: 1, name: 'Exam', description: 'A major assessment' },
    { id: 2, name: 'Quiz', description: 'A minor assessment' },
    {
      id: 3,
      name: 'Assignment',
      description: 'An assessment that assigned to answer after class',
    },
  ];
  assessmentSet: AssessmentSet

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.buildAssessmentForm();
  }

  buildAssessmentForm() {
    this.assessmentForm = this.fb.group({
      id: new FormControl('', Validators.required),
      title: new FormControl('', Validators.required),
      assessmentType: new FormControl(this.assessmentTypes[2], Validators.required),
      assessmentSets: new FormArray([])
    });

    // duration: ['', Validators.required],
    // assessmentType: [{}, Validators.required],
    // assessmentSets: [[
    //   {
    //     id: ['', Validators.required],
    //     title: ['', Validators.required],
    //     instruction: ['', Validators.required],
    //     assessmentSetFormat: [{}, Validators.required],
    //     randomize: [false, Validators.required]
    //   },
    // ], Validators.required]
  }

  onSubmit() {
    console.log('submitted');
    console.log(this.assessmentForm.value);
  }

  addAssessmentSet() {}
}
