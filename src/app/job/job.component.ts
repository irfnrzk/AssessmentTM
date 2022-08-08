import { Component, OnInit, PipeTransform } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { JobService } from '../shared/job.service';
import { Job } from '../shared/job.model';
import * as moment from 'moment';


@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  providers: [JobService]
})
export class JobComponent implements OnInit {
  page = 1;
  pageSize = 10;
  collectionSize: any;
  currentDate = new Date() 

  constructor(public jobService: JobService) {}

  filterForm!: FormGroup;

  ngOnInit(): void {
    this.getJobList();
    
    this.filterForm = new FormGroup({
      filterCompany: new FormControl(''),
      filterState: new FormControl(''),
      filterStatus: new FormControl(''),
      filterJobID: new FormControl(''),
      filterTitle: new FormControl('')
    });
  }

  myarray: Job[]=[]; jobList!: any[]; jobLen: any;
  getJobList() {
    this.jobService.get_data().subscribe((res) => {
      let data: any = res;
      console.log(data,'ini res')
      for (let i = 0; i < data.length; i++) {
        if(this.isClosed(data[i].CloseDate)){
          this.myarray.push({
            JobID: i+1,
            JobTitle: data[i].JobTitle,
            Company: data[i].Company,
            State: data[i].State,
            CloseDate: data[i].CloseDate,
            JobStatus: "Closed"
          });
        }
        else if(this.isOpen(data[i].CloseDate)){
          this.myarray.push({
            JobID: i+1,
            JobTitle: data[i].JobTitle,
            Company: data[i].Company,
            State: data[i].State,
            CloseDate: data[i].CloseDate,
            JobStatus: "Open"
          });
        }
      }
      this.jobList = this.myarray;
      this.jobLen = this.jobList.length;
      console.log(this.myarray,'ini data')
    });
  }
  
  isClosed(CloseDate: string){
    let momentVar = moment(CloseDate, 'DD-MM-YYYY');
    let endDate = new Date(momentVar.format("YYYY-MM-DDTHH:mm:ssZ"));
    return endDate < this.currentDate
  }

  isOpen(CloseDate: string){
    let momentVar = moment(CloseDate, 'DD-MM-YYYY');
    let endDate = new Date(momentVar.format("YYYY-MM-DDTHH:mm:ssZ"));
    return endDate > this.currentDate
  }

  //Reset filter
  resetFilter(){
    this.filterForm.setValue({
        filterCompany: "",
        filterState: "",
        filterStatus: "",
        filterJobID: "",
        filterTitle: ""
    });     
 }

 capitalizeWords(text: string){
  return text.replace(/(?:^|\s)\S/g,(res: string)=>{ return res.toUpperCase();})
};

 getJobFilter(){
  let company =  this.filterForm.get('filterCompany')?.value.toUpperCase();
  let state = this.capitalizeWords(this.filterForm.get('filterState')?.value);
  let status = this.filterForm.get('filterStatus')?.value;
  let jobID =  this.filterForm.get('filterJobID')?.value;
  let title =  this.capitalizeWords(this.filterForm.get('filterTitle')?.value);

  if(company =='' && state =='' && status =='' && jobID =='' && title ==''){
    this.jobList = this.myarray;
  } 
  else if(company !='' && state =='' && status =='' && jobID =='' && title ==''){
    this.jobList = this.myarray.filter(x => x.Company == company);
  }
  else if(company =='' && state !='' && status =='' && jobID =='' && title ==''){
    this.jobList = this.myarray.filter(x => x.State == state);
  }
  else if(company =='' && state =='' && status !='' && jobID =='' && title ==''){
    this.jobList = this.myarray.filter(x => x.JobStatus == status);
  }
  else if(company =='' && state =='' && status =='' && jobID !='' && title ==''){
    this.jobList = this.myarray.filter(x => x.JobID == jobID);
  }
  else if(company =='' && state =='' && status =='' && jobID =='' && title !=''){
    this.jobList = this.myarray.filter(x => x.JobTitle == title);
  }
  else if(company !='' && state !='' && status =='' && jobID =='' && title ==''){
    this.jobList = this.myarray.filter(x => x.Company == company && x.State == state);
  }
  else if(company !='' && state =='' && status !='' && jobID =='' && title ==''){
    this.jobList = this.myarray.filter(x => x.Company == company && x.JobStatus == status);
  }
  else if(company !='' && state =='' && status =='' && jobID !='' && title ==''){
    this.jobList = this.myarray.filter(x => x.Company == company && x.JobID == jobID);
  }
  else if(company !='' && state =='' && status =='' && jobID =='' && title !=''){
    this.jobList = this.myarray.filter(x => x.Company == company && x.JobTitle == title);
  }
  else if(company =='' && state !='' && status !='' && jobID =='' && title ==''){
    this.jobList = this.myarray.filter(x => x.State == state && x.JobStatus == status);
  }
  else if(company =='' && state !='' && status =='' && jobID !='' && title ==''){
    this.jobList = this.myarray.filter(x => x.State == state && x.JobID == jobID);
  }
  else if(company =='' && state !='' && status =='' && jobID =='' && title !=''){
    this.jobList = this.myarray.filter(x => x.State == state && x.JobTitle == title);
  }
  else if(company =='' && state =='' && status !='' && jobID !='' && title ==''){
    this.jobList = this.myarray.filter(x => x.JobStatus == status && x.JobID == jobID);
  }
  else if(company =='' && state =='' && status !='' && jobID =='' && title !=''){
    this.jobList = this.myarray.filter(x => x.JobStatus == status && x.JobTitle == title);
  }
  else if(company =='' && state =='' && status =='' && jobID !='' && title !=''){
    this.jobList = this.myarray.filter(x => x.JobID == jobID && x.JobTitle == title);
  }
  this.jobLen = this.jobList.length;
  console.log(this.jobList)

  this.resetFilter();

 }


  
}
