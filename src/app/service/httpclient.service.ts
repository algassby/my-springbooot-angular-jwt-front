import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";

export class Employee {
  constructor(
    public empId: string,
    public name: string,
    public designation: string,
    public salary: string
  ) {}
}

@Injectable({
  providedIn: "root"
})
export class HttpClientService {
  constructor(private httpClient: HttpClient) {}

  getEmployees() {
    return this.httpClient.get<Employee[]>("http://127.0.0.1:8080/my-spring-boot-jwt-angular-0.0.1-SNAPSHOT/employees");
  }

  public deleteEmployee(employee) {
    return this.httpClient.delete<Employee>(
      "http://127.0.0.1:8080/my-spring-boot-jwt-angular-0.0.1-SNAPSHOT/employees" + "/" + employee.empId
    );
  }

  public createEmployee(employee) {
    return this.httpClient.post<Employee>(
      "http://127.0.0.1:8080/my-spring-boot-jwt-angular-0.0.1-SNAPSHOT/employees",
      employee
    );
  }
}
