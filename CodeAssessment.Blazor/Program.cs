using System.Security.Cryptography.X509Certificates;
using CodeAssessment.Blazor;
using Data.Contexts;
using Data.Implementations;
using Data.Interfaces;
using Data.Models;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
using Microsoft.EntityFrameworkCore;
using Service;

var builder = WebAssemblyHostBuilder.CreateDefault(args);

builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");
builder.Services.AddDbContext<NorthwindContext>(options =>
    options.UseSqlServer(builder.Configuration["ConnectionStrings:DefaultConnection"]));
builder.Services.AddScoped<IService<Customer>, CustomerService>();
builder.Services.AddScoped<IRepository<Customer>, CustomerRepository>();

builder.Services.AddMediatR(x =>
    x.RegisterServicesFromAssemblies(new[]
    {
        typeof(IRepository<>).Assembly,
        typeof(CustomerService).Assembly,
        typeof(Program).Assembly,
    }));
builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

await builder.Build().RunAsync();

