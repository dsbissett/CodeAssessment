using Data.Interfaces;
using Data.Models;

namespace Service
{
    public interface IService<T> where T : class
    {
        IEnumerable<T> GetAll();

        Task<IEnumerable<T>> GetAllAsync();

        T Get(int id);

        Task<T> GetAsync(int id);


        T Add(T t);

        Task<T> AddAsync(T t);

        T? Update(T t, object key);

        Task<T> UpdateAsync(T t, object key);

        void Remove(string id);

        void Remove(T t);

        Task RemoveAsync(T t);
    }

    public class CustomerService : IService<Customer>
    {
        private readonly IRepository<Customer> repo;

        public CustomerService(IRepository<Customer> repo)
        {
            this.repo = repo;
        }

        public IEnumerable<Customer> GetAll()
        {
            return this.repo.GetAll();
        }

        public async Task<IEnumerable<Customer>> GetAllAsync()
        {
            return await this.repo.GetAllAsync();
        }

        public Customer Get(int id)
        {
            return this.repo.Get(id);
        }

        public async Task<Customer> GetAsync(int id)
        {
            return await this.repo.GetAsync(id) ?? new Customer();
        }

        public Customer Add(Customer customer)
        {
            return this.repo.Add(customer);
        }

        public async Task<Customer> AddAsync(Customer t)
        {
            return await this.repo.AddAsync(t);
        }

        public Customer? Update(Customer customer, object key)
        {
            return this.repo.Update(customer, key);
        }

        public async Task<Customer> UpdateAsync(Customer t, object key)
        {
            return await this.repo.UpdateAsync(t, key) ?? new Customer();
        }

        public void Remove(string id)
        {
            var customer = this.repo.Find(x => x.CustomerId == id);
            
            if (customer == null)
            {
                throw new KeyNotFoundException("Customer ID not found!");
            }

            this.repo.Remove(customer);
        }

        public async Task RemoveAsync(string id)
        {
            var customer = await this.repo.FindAsync(x => x.CustomerId == id);

            if (customer == null)
            {
                throw new KeyNotFoundException("Customer ID not found!");
            }

            await this.repo.RemoveAsync(customer);
        }

        public void Remove(Customer t)
        {
            this.repo.Remove(t);
        }

        public async Task RemoveAsync(Customer t)
        {
            await this.repo.RemoveAsync(t);
        }
    }
}