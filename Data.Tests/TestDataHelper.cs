using Bogus;
using Data.Models;

namespace Data.Tests;

public static class TestDataHelper
{
    private static int employeeId = new Faker().IndexFaker;
    private static int orderId = new Faker().IndexFaker;
    private static int shipperId = new Faker().IndexFaker;
    private static int customerId = new Faker().IndexFaker;

    public static Faker<Employee> GetFakeEmployee()
    {
        return new Faker<Employee>()
            .RuleFor(x => x.EmployeeId, employeeId)
            .RuleFor(x => x.LastName, y => y.Name.LastName())
            .RuleFor(x => x.FirstName, y => y.Name.FirstName())
            .RuleFor(x => x.Title, y => y.Name.JobTitle().OrNull(y))
            .RuleFor(x => x.TitleOfCourtesy, y => y.Name.Prefix().OrNull(y))
            .RuleFor(x => x.BirthDate, y => y.Date.Past(20))
            .RuleFor(x => x.HireDate, y => y.Date.Past())
            .RuleFor(x => x.Address, y => y.Address.StreetAddress())
            .RuleFor(x => x.City, y => y.Address.City())
            .RuleFor(x => x.Region, y => y.Address.StateAbbr().OrNull(y))
            .RuleFor(x => x.PostalCode, y => y.Address.ZipCode())
            .RuleFor(x => x.Country, y => y.Address.CountryCode())
            .RuleFor(x => x.Extension, y => y.Random.Number(4).ToString())
            .RuleFor(x => x.Photo, y => y.Random.Bytes(10).OrNull(y))
            .RuleFor(x => x.Notes, y => y.Random.Words(10))
            .RuleFor(x => x.ReportsTo, y => y.IndexVariable.OrNull(y))
            .RuleFor(x => x.PhotoPath, y => y.Internet.Url());
    }

    public static Faker<Shipper>GetFakeShipper()
    {
        return new Faker<Shipper>()
            .RuleFor(x => x.ShipperId, shipperId)
            .RuleFor(x => x.CompanyName, y => y.Company.CompanyName())
            .RuleFor(x => x.Phone, y => y.Phone.PhoneNumber())
            .RuleFor(x => x.Orders, GetFakeOrder().Generate(4));
    }

    public static Faker<Order> GetFakeOrder()
    {
        return new Faker<Order>()
            .RuleFor(x => x.OrderId, orderId)
            .RuleFor(x => x.CustomerId, customerId.ToString)
            .RuleFor(x => x.EmployeeId, employeeId)
            .RuleFor(x => x.OrderDate, y => y.Date.Past())
            .RuleFor(x => x.RequiredDate, y => y.Date.Recent())
            .RuleFor(x => x.ShippedDate, y => y.Date.Soon())
            .RuleFor(x => x.ShipVia, shipperId)
            .RuleFor(x => x.Freight, y => y.Finance.Amount())
            .RuleFor(x => x.ShipName, y => y.Name.FullName())
            .RuleFor(x => x.ShipAddress, y => y.Address.StreetAddress())
            .RuleFor(x => x.ShipCity, y => y.Address.City())
            .RuleFor(x => x.ShipRegion, y => y.Address.StateAbbr().OrNull(y))
            .RuleFor(x => x.ShipPostalCode, y => y.Address.ZipCode())
            .RuleFor(x => x.ShipCountry, y => y.Address.Country());
    }
        
    public static Faker<Customer> GetFakeCustomer()
    {
        Randomizer.Seed = new Random(3897234);

        return new Faker<Customer>()
            .RuleFor(x => x.CustomerId, y => y.IndexFaker.ToString())
            .RuleFor(x => x.CompanyName, y => y.Company.CompanyName())
            .RuleFor(x => x.ContactName, y => y.Name.FullName())
            .RuleFor(x => x.ContactTitle, y => y.Name.JobTitle())
            .RuleFor(x => x.Address, y => y.Address.StreetAddress())
            .RuleFor(x => x.City, y => y.Address.City())
            .RuleFor(x => x.Region, y => y.Address.StateAbbr().OrNull(y))
            .RuleFor(x => x.PostalCode, y => y.Address.ZipCode())
            .RuleFor(x => x.Country, y => y.Address.Country())
            .RuleFor(x => x.Phone, y => y.Phone.PhoneNumber())
            .RuleFor(x => x.Fax, y => y.Phone.PhoneNumber())
            .RuleFor(x => x.Orders, y => GetFakeOrder().Generate(5))
            .RuleFor(x => x.CustomerTypes, y => new Faker<CustomerDemographic>().Generate(3));
            
    }
}