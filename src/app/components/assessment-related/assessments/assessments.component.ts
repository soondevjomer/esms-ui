import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssessmentModel } from 'src/app/models/app-models';
import { assessments } from '../../../data';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-assessments',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './assessments.component.html',
  styleUrls: ['./assessments.component.scss'],
})
export class AssessmentsComponent implements OnInit {

  assessments?: Array<AssessmentModel>;

  ngOnInit(): void {
    this.assessments = assessments;
  }

  onView(assessment: AssessmentModel){console.log(assessment);
  }
  onEdit(event: Event){}
  onDelete(event: Event){}
}
