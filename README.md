# Code Assessment
This repo contains a solution that showcases my frontend and backend code.

![Code Assessment](https://github.com/dsbissett/CodeAssessment/actions/workflows/dotnet.yml/badge.svg)

# TODO's
- Add more tests
- Add UI tests
- Add BDD tests
- Rough-in Blazor project
- Add CRUD operations to MVC project
- Finish Angular project UI
- Finish React project UI
- Add messaging layer to CQRS project
  
# Projects
## ___`CodeAssessment`___
This project is an ASPNET CORE Web API project.  It contains a CustomersController and CRUD actions.

## ___`CodeAssessment.Angular`___
This project is an ASPNET CORE web project using Angular.  A sample datagrid has been roughed-in using Angular.  CRUD actions on the controller retreive data from the `CodeAssessment.Service` project, which calls to `CodeAssessment.Data`.  I don't have an professional experience with the new Angular, but lots with AngularJS 1.3.9.  I was surprised to see how similar things were between AngularJS and the new Angular.

## ___`CodeAssessment.Blazor`___
This project is stubbed in; I haven't yet started on the code.

## ___`CodeAssessment.Cqrs`___
This project uses MediatR to handle commands and queries as well as to add behaviors and notifications.  The notifications are stubs and I don't plan to complete the email notification or teams notification.  They are there for demonstration purposes.

## ___`CodeAssessment.Mvc`___
This is an ASPNET MVC project that demonstrates that I can use Razor.  I don't enjoy using Razor, but a developer once refused to interview me because I didn't "show a mastery of aspnet core" code by not having Razor pages... so there it is.

## ___`CodeAssessment.React`___
My favorite project.  I honestly forgot how much I enjoyed React before beginning this project.  There's a data grid that currently has a modal open containing the information of the row that was clicked.  I plan to develop this modal to allow editing.

## ___`Data`___
This project contains Entity Framework Core contexts and models.  It also contains a repository that is used by all of the other projects for data operations.

## ___`Data.Tests`___
xUnit tests for the repository.  I intentionally did not use a data generation tool like AutoFixture because I was once asked in an interview if I knew how to test without AutoFixture.

## ___`Database`___
This is a Sql project, modeled on Microsoft's Northwind Database.  I added this because I worked on a code assessment for a company where a dotnet 4.5 project was provided, containing a sql project.  The sql project would not load in VS2022, so I spent a great deal of time tracking down the issues to fix.  Adding the sql project to this solution resulted in a an error with `CompatibilityMode`, which was fixed by editing the value.

## ___`Service`___
This is a service layer that contains the `CustomerService` used by almost all projects.  This is also where commands, queries, behaviors, and notifications live.  `CodeAssessment.Cqrs` is the only project currently using the commands/queries/etc.

## ___`Service.Tests`___
Tests using xUnit and AutoFixture because nobody wants to write out `TestDataHelper` classes if they can help it.
