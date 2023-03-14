using Data.Models;
using Microsoft.AspNetCore.Mvc;
using Service;


namespace CodeAssessment.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly IService<Customer> customerService;

        public CustomersController(IService<Customer> customerService)
        {
            this.customerService = customerService;
        }

        [HttpGet]
        public IActionResult Get()
        {
            return this.Ok(this.customerService.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return this.Ok(this.customerService.Get(id));
        }

        
        [HttpPost]
        public IActionResult Add(Customer customer)
        {
            return this.Ok(this.customerService.Add(customer));
        }

        [HttpPut]
        public IActionResult Update(Customer customer)
        {
            return this.Ok(this.customerService.Update(customer, customer.CustomerId));
        }

        
        [HttpDelete("{id}")]
        public IActionResult Delete(string id)
        {
            return this.Ok(() => this.customerService.Remove(id));
        }
    }
}
