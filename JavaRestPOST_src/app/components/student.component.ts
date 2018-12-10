import { Component } from "@angular/core";
import {  HttpErrorResponse } from "@angular/common/http";
import {  studentCService } from "../services/student.service";


@Component({
    selector:"student",
    templateUrl:"student.component.html"
})
export class studentComponent{
    private result:any;
    private studentSubscribe:any;

    constructor(private _service:studentCService){}

    public register(objData:any):any{
        this.studentSubscribe=this._service.postEmp(objData).subscribe(this._successCallBack, this._errorCallBack);
    };

        public _successCallBack=(res):any=>{
            this.result=res;
        };

        public _errorCallBack=(err:HttpErrorResponse):any=>{
            if(err.error instanceof Error){
                console.log("client side errors");
            }else{
                console.log("server side errors.....!!");
            }
        };
};