using Data.Models;
using MediatR;

namespace Service.Queries;

public record GetAllCustomersQuery : IRequest<IEnumerable<Customer>>;