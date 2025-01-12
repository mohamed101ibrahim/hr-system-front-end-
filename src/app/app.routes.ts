import { Routes } from '@angular/router';
import { AttendanceComponent } from './pages/attendance/attendance.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { DepartmentComponent } from './pages/department/department.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { GroupsComponent } from './pages/groups/groups.component';
import { OfficalHolidaysComponent } from './pages/offical-holidays/offical-holidays.component';
import { SalaryComponent } from './pages/salary/salary.component';
import { UsersComponent } from './pages/users/users.component';

import { UserFormComponent } from './components/user-form/user-form.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { LoginComponent } from './pages/login/login.component';
import { DepartmentFormComponent } from './components/department-form/department-form.component';
import { DepartmentDetailsComponent } from './components/department-details/department-details.component';
import { AttendanceFormComponent } from './components/attendance-form/attendance-form.component';
// import { AttendanceExcelComponent } from './components/attendance-excel/attendance-excel.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { authGuard } from './components/guard/auth.guard';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';

import { OfficalHolidayFormComponent } from './components/offical-holiday-form/offical-holiday-form.component';
import { HolidayDetailsComponent } from './components/holiday-details/holiday-details.component';
import { SettingsFormComponent } from './components/settings-form/settings-form.component';
import { AddGroupPermissionsComponent } from './components/add-group-permissions/add-group-permissions.component';


export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login'
  },
  {
    path: '',
    component: LayoutComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard'
      },
      {
        path: 'attendance',
        component: AttendanceComponent,
        title: 'Attendance',
      },
      {
        path: 'attendance/:id/edit',
        component: AttendanceFormComponent,
        title: 'Edit Attendance',
      },
      {
        path: 'departments',
        component: DepartmentComponent,
        title: 'Departments'
      },
      {
        path: 'departments/:id/edit',
        component: DepartmentFormComponent,
        title: 'Edit Department'
      },
      {
        path: 'departments/:id',
        component: DepartmentDetailsComponent,
        title: 'Department Details'
      },
      {
        path: 'employees',
        component: EmployeesComponent,
        title: 'All Employees'
      },
      {
        path: 'employees/:id/edit',
        component: EmployeeFormComponent,
        title: 'Employee'
      },
      {
        path: 'employees/:id',
        component: EmployeeDetailsComponent,
        title: 'Employee'
      },
      {
        path: 'groups',
        component: GroupsComponent,
        title: 'Groups'
      },
      {
        path: 'groups/add',
        component: AddGroupPermissionsComponent,
        title: 'Add new group'
      },
      {
        path: 'officalHolidays',
        component: OfficalHolidaysComponent,
        title: 'Offical Holidays'
      },
      {
        path: 'officalHolidays/:id/edit',
        component: OfficalHolidayFormComponent,
        title: 'offical Holiday'
      },
      {
        path: 'officalHolidays/:id',
        component: HolidayDetailsComponent,
        title: 'View Holiday'
      },
      {
        path: 'salary',
        component: SalaryComponent,
        title: 'Salary'
      },
      {
        path: 'salary/:id/edit',
        component: SalaryComponent,
        title: 'Edit Salary'
      },
      {
        path: 'users',
        component: UsersComponent,
        title: 'All Users'
      },
      {
        path: 'user/:id/edit',
        component: UserFormComponent,
        title: 'Edit User'
      },

      {
        path: 'settings',
        component: SettingsFormComponent,
        title: 'settings'
      },
    ],
  },

  {
    path: '**',
    component: NotfoundComponent,
    title: 'not found'
  },
];