import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Salary } from '../models/salary';
@Injectable({
  providedIn: 'root'
})
export class SalaryService {
  private apiUrl = 'http://127.0.0.1:8000/api/salarys';

  constructor(private http: HttpClient) { }

  getSalary(): Observable<{ data: Salary[] }> {
    return this.http.get<{ data: Salary[] }>(this.apiUrl);
  }
  searchSalary(employeeName?: string): Observable<any> {
    let params = new HttpParams();
    if (employeeName) {
      params = params.set('name', employeeName);
    }

    return this.http.get(`${this.apiUrl}/search`, { params });
  }
     filterSalaryByDate(month: number , year: number): Observable<any> {
        const params = new HttpParams()
          .set('month', month)
          .set('year', year);
        return this.http.get(`http://127.0.0.1:8000/api/salary/search-by-month-year?month=${month}&year=${year}`, { params });
      }
//   getAttendance(id: number): Observable<{ data: Attendance[] }> {
//     return this.http.get<{ data: Attendance[] }>(`${this.apiUrl}/${id}`);
//   }


//   createAttendance(Attendance: any){
//     return this.http.post(this.apiUrl, Attendance);
//   }

//   updateAttendance(id: number, Attendance: any){
//     return this.http.put(`${this.apiUrl}/${id}`, Attendance);
//   }

//   deleteAttendance(id: number): Observable<void> {
//     return this.http.delete<void>(`${this.apiUrl}/${id}`);
//   }

//   searchAttendances(employeeName?: string, departmentName?: string): Observable<any> {
//     let params = new HttpParams();
//     if (employeeName) {
//       params = params.set('employee_name', employeeName);
//     }
//     if (departmentName) {
//       params = params.set('department_name', departmentName);
//     }
//     return this.http.get(`${this.apiUrl}/search`, { params });
//   }

//   filterAttendancesByDate(startDate: string, endDate: string): Observable<any> {
//     const params = new HttpParams()
//       .set('start_date', startDate)
//       .set('end_date', endDate);
//     return this.http.get(`${this.apiUrl}/filterByDate`, { params });
//   }
}
