using Data.Models;
using Microsoft.AspNetCore.Mvc;
using Service;

namespace CodeAssessment.React.Controllers
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
        public async Task<IActionResult> GetAsync()
        {
            return this.Ok(await this.customerService.GetAllAsync());
        }

        [HttpPost]
        public async Task<IActionResult> AddAsync(Customer customer)
        {
            return this.Ok(await this.customerService.AddAsync(customer));
        }

        [HttpPut]
        public async Task<IActionResult> UpdateAsync(Customer customer)
        {
            return this.Ok(await this.customerService.UpdateAsync(customer, customer.CustomerId));
        }

        [HttpDelete]
        public IActionResult Delete(Customer customer)
        {
            this.customerService.Remove(customer);
            return this.Ok();
        }
    }
}
