using Data.Models;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Service.Commands;
using Service.Queries;

namespace CodeAssessment.Cqrs.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly IMediator mediator;

        public CustomersController(IMediator mediator)
        {
            this.mediator = mediator;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllAsync()
        {
            var result = await this.mediator.Send(new GetAllCustomersQuery());

            return this.Ok(result);
        }

        [HttpGet("{customerId}")]
        public async Task<IActionResult> GetById([FromRoute]string customerId)
        {
            var result = await this.mediator.Send(new GetCustomerByIdQuery(customerId));

            return this.Ok(result);
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] Customer customer)
        {
            var result = await this.mediator.Send(new CreateCustomerCommand(customer));

            return this.Ok(result);
        }

        [HttpPut]
        public async Task<IActionResult> Update([FromBody] Customer customer)
        {
            var result = await this.mediator.Send(new UpdateCustomerCommand(customer));

            return this.Ok(result);
        }

        [HttpDelete]
        public async Task<IActionResult> Delete([FromBody] Customer customer)
        {
            await this.mediator.Send(new DeleteCustomerCommand(customer));

            return this.Ok();
        }
    }
}
