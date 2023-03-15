using CodeAssessment.BlazorServerApp.Data;
using Data.Contexts;
using Data.Implementations;
using Data.Interfaces;
using Data.Models;
using Microsoft.AspNetCore.Components;
using Microsoft.AspNetCore.Components.Web;
using Microsoft.EntityFrameworkCore;
using Service;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorPages();
builder.Services.AddServerSideBlazor();
builder.Services.AddSingleton<WeatherForecastService>();
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
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
}


app.UseStaticFiles();

app.UseRouting();

app.MapBlazorHub();
app.MapFallbackToPage("/_Host");

app.Run();
