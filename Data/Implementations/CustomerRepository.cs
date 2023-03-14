using Data.Abstractions;
using Data.Contexts;
using Data.Models;

namespace Data.Implementations;

public class CustomerRepository : RepositoryBase<Customer>
{
    public CustomerRepository(NorthwindContext context) : base(context)
    {
    }
}