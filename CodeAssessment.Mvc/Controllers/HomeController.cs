using CodeAssessment.Mvc.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;
using Data.Models;
using Service;

namespace CodeAssessment.Mvc.Controllers
{
    public class HomeController : Controller
    {
        private readonly IService<Customer> customerService;
        private readonly ILogger<HomeController> _logger;

        public HomeController(IService<Customer> customerService, ILogger<HomeController> logger)
        {
            this.customerService = customerService;
            this._logger = logger;
        }

        public IActionResult Index()
        {
            var customers = this.customerService.GetAll().Take(5);

            this._logger.LogInformation("Received request for customers.");
            
            return this.View(customers);
        }

        public IActionResult Privacy()
        {
            return this.View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return this.View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? this.HttpContext.TraceIdentifier });
        }
    }
}