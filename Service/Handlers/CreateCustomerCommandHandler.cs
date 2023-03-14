using Data.Interfaces;
using Data.Models;
using MediatR;
using Service.Commands;

namespace Service.Handlers;

public class CreateCustomerCommandHandler : HandlerBase<Customer>, IRequestHandler<CreateCustomerCommand, Customer>
{
    public CreateCustomerCommandHandler(IRepository<Customer> repo) : base(repo)
    {
    }

    public async Task<Customer> Handle(CreateCustomerCommand request, CancellationToken cancellationToken)
    {
        return await this.repo.AddAsync(request.customer);
    }
}