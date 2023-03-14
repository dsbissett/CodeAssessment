using Data.Models;
using Microsoft.AspNetCore.Mvc;
using Service;

namespace CodeAssessment.Angular.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly IService<Customer> customerService;
        private readonly ILogger<CustomersController> logger;

        public CustomersController(IService<Customer> customerService, ILogger<CustomersController> logger)
        {
            this.customerService = customerService;
            this.logger = logger;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return this.Ok(this.customerService.GetAll().Take(5).ToArray());
        }
    }
}