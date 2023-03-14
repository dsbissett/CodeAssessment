using Data.Models;
using MediatR;

namespace Service.Commands;

public record CreateCustomerCommand(Customer customer) : IRequest<Customer>;