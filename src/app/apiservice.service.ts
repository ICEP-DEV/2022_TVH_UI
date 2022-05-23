import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Announcements } from './interfaces/announcements';



@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _http:HttpClient) { }




  ////connection for frontend and backend

    apiUrl = 'https://4xazztqw3p.us-east-1.awsapprunner.com/login'; //Adminlogin

    apeUrl = 'https://4xazztqw3p.us-east-1.awsapprunner.com/registrations'; ///userFormRegistration

    apqUrl = 'https://4xazztqw3p.us-east-1.awsapprunner.com/adminLoadFile'; //admin View Data From Database


    apwUrl = 'https://4xazztqw3p.us-east-1.awsapprunner.com/noticeLoadFile'; //Notice display Data From Database
    orgUrl = 'https://4xazztqw3p.us-east-1.awsapprunner.com/selectOrganiser'; //Teams display Data From Database
    volUrl = 'https://4xazztqw3p.us-east-1.awsapprunner.com/selectVolunteer'; //Volunteer display Data From Database
    mentUrl = 'https://4xazztqw3p.us-east-1.awsapprunner.com/selectMentor'; //Mentor display Data From Database
    orgTeUrl = 'https://4xazztqw3p.us-east-1.awsapprunner.com/selectOrgTeam'; //OrgTeam display Data From Database
    teamUrl = 'https://4xazztqw3p.us-east-1.awsapprunner.com/selectTeam'; //Team display Data From Database


    apaUrl = 'https://4xazztqw3p.us-east-1.awsapprunner.com/signUp'; /// Signup for users

    apkUrl = 'https://4xazztqw3p.us-east-1.awsapprunner.com/userLogin'; /// Users login

    apmUrl = 'https://4xazztqw3p.us-east-1.awsapprunner.com/notice'; /// announcement

    uploadUrl = 'https://4xazztqw3p.us-east-1.awsapprunner.com/uploadTeam '; ///uploadTeams
    deletUrl = 'https://4xazztqw3p.us-east-1.awsapprunner.com/deleteMember'; ///DeleteTeams
    delantUrl = 'https://4xazztqw3p.us-east-1.awsapprunner.com/deleteAnnouncement'; ///DeleteAnnouncement
    specTeaUrl = 'https://4xazztqw3p.us-east-1.awsapprunner.com/viewTeamMember'; ///select specific team using id 



    

    ///get data post admin data to the database from login
    getAllData(credintials : any)
    {
      return this._http.post<any>(this.apiUrl, credintials);

      
    }

    //get data from frontend store it to the database

    getRegistration(credintials:any)
    {
      return this._http.post<any>(this.apeUrl, credintials );
    }

    ///retrieve data from database to admin dashboard
    getadminLoadFile():Observable<any>
    {
      return this._http.get(`${this.apqUrl}`);
    }

        ///retrieve data from database to admin dashboard
    getnoticeLoadFile():Observable<Announcements>
    {
          return this._http.get<Announcements>(`${this.apwUrl}`);
    }
//--------------------------------------------------TEAMS---------------------------------//
    ///Organiser
    getOrginiser():Observable<any>
    {
      return this._http.get(`${this.orgUrl}`);
    }

        ///Team
        getTeam():Observable<any>
        {
          return this._http.get(`${this.teamUrl}`);
        }

    ///Volunteer
    getVolunteer():Observable<any>
    {
      return this._http.get(`${this.volUrl}`);
    }

    ///Mentor
    getMentor():Observable<any>
    {
      return this._http.get(`${this.mentUrl}`);
    }

    ///OrganiserTeam
    getOrgTeam():Observable<any>
    {
      return this._http.get(`${this.orgTeUrl}`);
    }
//--------------------------------------------------END_TEAMS---------------------------------//

     //post using signup
    getSignup(credintials:any)
    {
      return this._http.post<any>(this.apaUrl, credintials );
    }

    //userLogin function

    getLogin(credintials : any)
    {
      return this._http.post<any>(this.apkUrl, credintials);

      
    }

    //Get announcement data from admin store it to the database

    getAnnouncement(credintials:any)
    {
        return this._http.post<any>(this.apmUrl, credintials );
    }

        //get data from frontend store it to the database

    getUploadTeams(credintials:any)
    {
      return this._http.post<any>(this.uploadUrl, credintials );
    }

    ///delete team

    deleteData(id:any):Observable<any>
    {
      let ids = id;
      return this._http.delete(`${this.deletUrl}/${ids}`);
    }

    ///delete announcement

    deleteAnnounceData(id:any):Observable<any>
    {
      let ids = id;
      return this._http.delete(`${this.delantUrl}/${ids}`);
    } 


    //select specific team
    getSpecTeam(id:any):Observable<any>
    {
        let ide = id;
          return this._http.get<any>(`${this.apwUrl}/${ide}`);
    }
}
