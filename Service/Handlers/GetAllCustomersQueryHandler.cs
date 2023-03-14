using Data.Interfaces;
using Data.Models;
using MediatR;
using Service.Queries;

namespace Service.Handlers;

public class GetAllCustomersQueryHandler : HandlerBase<Customer>, IRequestHandler<GetAllCustomersQuery, IEnumerable<Customer>>
{
    public GetAllCustomersQueryHandler(IRepository<Customer> repo) : base(repo)
    {
    }

    public async Task<IEnumerable<Customer>> Handle(GetAllCustomersQuery request, CancellationToken cancellationToken)
    {
        return await this.repo.GetAllAsync();
    }
}