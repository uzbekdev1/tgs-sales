import { InMemoryDbService } from 'angular-in-memory-web-api';
export class LandenData implements InMemoryDbService {
  createDb() {
    const landen = [
        {
            id: 1,
            code: "pretty",
            naam: "pretty123",
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2012-10-13T12:20:40.511Z",
                joinedDate: "2017-04-21T18:25:43.511Z",
                bgColor: "gradient-purple"
            }
        },
        {
            id: 2,
            code: "bruno.V",
            naam: "bruno123",
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2012-10-13T12:20:40.511Z",
                joinedDate: "2017-04-21T18:25:43.511Z",
                bgColor: "gradient-purple"
            }
        },
        {
            id: 3,
            code: "andy.79",
            naam: "andy123",
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2012-10-13T12:20:40.511Z",
                joinedDate: "2017-04-21T18:25:43.511Z",
                bgColor: "gradient-purple"
            }
        },
        {
            id: 4,
            code: "julia.a",
            naam: "julia123",
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2012-10-13T12:20:40.511Z",
                joinedDate: "2017-04-21T18:25:43.511Z",
                bgColor: "gradient-purple"
            }
        },
        {
            id: 5,
            code: "lusia.m",
            naam: "lusia123",
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2012-10-13T12:20:40.511Z",
                joinedDate: "2017-04-21T18:25:43.511Z",
                bgColor: "gradient-purple"
            }
        },
        {
            id: 6,
            code: "adam.82",
            naam: "adam123",
            settings:{
                isActive: true,
                isDeleted: false,
                registrationDate: "2012-10-13T12:20:40.511Z",
                joinedDate: "2017-04-21T18:25:43.511Z",
                bgColor: "gradient-purple"
            }
        },
       
    ];
    return {landen};
  }
}