using Data.Interfaces;
using Data.Models;
using MediatR;
using Service.Queries;

namespace Service.Handlers;

public class GetCustomerByIdQueryHandler : HandlerBase<Customer>, IRequestHandler<GetCustomerByIdQuery, Customer>
{
    public GetCustomerByIdQueryHandler(IRepository<Customer> repo) : base(repo)
    {
    }

    public async Task<Customer> Handle(GetCustomerByIdQuery request, CancellationToken cancellationToken)
    {
        return await this.repo.FindAsync(x => x.CustomerId == request.customerId) ?? new Customer();
    }
}