using Data.Models;
using MediatR;

namespace Service.Commands;

public record DeleteCustomerCommand(Customer customer) : IRequest;