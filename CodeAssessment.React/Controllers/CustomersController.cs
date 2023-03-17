using CodeAssessment.React.Attributes;
using Data.Models;
using Microsoft.AspNetCore.Mvc;
using RiskFirst.Hateoas.Models;
using RiskFirst.Hateoas;
using Service;
using Service.Infrastructure;
using Newtonsoft.Json;

namespace CodeAssessment.React.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly IService<Customer> customerService;
        private readonly ILinksService linksService;
        private readonly ILogger<CustomersController> logger;

        public CustomersController(IService<Customer> customerService, ILinksService linksService, ILogger<CustomersController> logger)
        {
            this.customerService = customerService;
            this.linksService = linksService;
            this.logger = logger;
        }

        [HttpGet(Name = "GetAllCustomersRoute")]
        [CheckPagination("pageNumber", false)]
        public async Task<IActionResult> GetAsync()
        {
            var customers = await this.customerService.GetAllAsync();

            foreach (var customer in customers)
            {
                await this.linksService.AddLinksAsync(customer);
            }

            return this.Ok(customers);
        }

        [HttpGet(template:"{id}", Name = "GetCustomerByIdRoute")]
        public async Task<IActionResult> GetById([FromRoute]string id)
        {
            var results = await this.customerService.FindByAsync(id);

            foreach (var customer in results)
            {
                await this.linksService.AddLinksAsync(customer);
            }

            return this.Ok(results.FirstOrDefault());
        }

        [HttpGet(Name="GetPagedRoute")]
        [CheckPagination("pageNumber", true)]
        public async Task<IActionResult> GetPagedAsync([FromQuery]Pagination pagination)
        {
            var customers = await this.customerService.GetPagedContainerAsync(pagination);

            foreach (var customer in customers.Items)
            {
                await this.linksService.AddLinksAsync(customer);
            }

            await this.linksService.AddLinksAsync(customers);
            
            return this.Ok(customers);
        }

        [HttpPost(Name = "AddCustomerRoute")]
        public async Task<IActionResult> AddAsync(Customer customer)
        {
            return this.Ok(await this.customerService.AddAsync(customer));
        }

        [HttpPut (template: "{id}", Name = "UpdateCustomerRoute")]
        public async Task<IActionResult> UpdateAsync([FromRoute]string id, [FromBody]Customer customer)
        {
            return this.Ok(await this.customerService.UpdateAsync(customer, customer.CustomerId));
        }

        [HttpDelete(template: "{id}", Name = "DeleteCustomerRoute")]
        public async Task<IActionResult> DeleteAsync([FromRoute]string id)
        {
            await this.customerService.RemoveAsync(id);

            return this.Ok();
        }
    }
}
