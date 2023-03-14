using Data.Models;
using MediatR;

namespace Service.Commands;

public record UpdateCustomerCommand(Customer customer) : IRequest<Customer>;