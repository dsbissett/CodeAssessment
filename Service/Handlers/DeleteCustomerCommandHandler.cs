using Data.Interfaces;
using Data.Models;
using MediatR;
using Service.Commands;

namespace Service.Handlers;

public class DeleteCustomerCommandHandler : HandlerBase<Customer>, IRequestHandler<DeleteCustomerCommand>
{
    public DeleteCustomerCommandHandler(IRepository<Customer> repo) : base(repo)
    {
    }

    public async Task Handle(DeleteCustomerCommand request, CancellationToken cancellationToken)
    {
        await this.repo.RemoveAsync(request.customer);
    }
}