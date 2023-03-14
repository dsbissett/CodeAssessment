using Data.Interfaces;
using Data.Models;
using Microsoft.EntityFrameworkCore;

namespace Data.Implementations
{
    public interface ICustomerRepository : IRepository<Customer>
    {

    }
}
