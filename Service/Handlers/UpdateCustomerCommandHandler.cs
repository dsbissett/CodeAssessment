using Data.Interfaces;
using Data.Models;
using MediatR;
using Service.Commands;

namespace Service.Handlers;

public class UpdateCustomerCommandHandler : HandlerBase<Customer>, IRequestHandler<UpdateCustomerCommand, Customer>
{
    public UpdateCustomerCommandHandler(IRepository<Customer> repo) : base(repo)
    {
    }

    public async Task<Customer> Handle(UpdateCustomerCommand request, CancellationToken cancellationToken)
    {
        return await this.repo.UpdateAsync(request.customer, request.customer.CustomerId);
    }
}