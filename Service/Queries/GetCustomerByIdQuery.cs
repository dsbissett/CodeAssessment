using Data.Models;
using MediatR;

namespace Service.Queries;

public record GetCustomerByIdQuery(string customerId) : IRequest<Customer>;