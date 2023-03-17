using CodeAssessment.React;
using Data.Contexts;
using Data.Implementations;
using Data.Interfaces;
using Data.Models;
using Microsoft.EntityFrameworkCore;
using RiskFirst.Hateoas;
using Service;
using Service.Infrastructure;

var builder = WebApplication.CreateBuilder(args);
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<NorthwindContext>(options =>
    options.UseSqlServer(builder.Configuration["ConnectionStrings:DefaultConnection"]));
builder.Services.AddScoped<IService<Customer>, CustomerService>();
builder.Services.AddScoped<IRepository<Customer>, CustomerRepository>();
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
        policy =>
        {
            policy.WithOrigins("http://localhost");
        });
});

builder.Services.AddLinks(config =>
{
    config.UseRelativeHrefs();

    config.AddPolicy<PagedList<Customer>>(policy =>
        policy
            .RequiresPagingLinks()
            .RequireRoutedLink("self", "self", x => new { pageNumber = x.PageNumber, pageSize = x.PageSize })
    );
    
    config.AddPolicy<Customer>(policy =>
    {
        policy.RequireSelfLink()
            .RequireRoutedLink("all", "GetAllCustomersRoute")
            .RequireRoutedLink("getById", "GetCustomerByIdRoute", x => new {id = x.CustomerId})
            .RequireRoutedLink("update", "UpdateCustomerRoute", x => new { id = x.CustomerId })
            .RequireRoutedLink("delete", "DeleteCustomerRoute", x => new {id = x.CustomerId});
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
}

app.UseStaticFiles();
app.UseRouting();


app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html"); ;
app.UseCors(MyAllowSpecificOrigins);
app.Run();
