using Data.Interfaces;

namespace Service.Handlers
{
    public abstract class HandlerBase<T> where T : class
    {
        protected readonly IRepository<T> repo;

        protected HandlerBase(IRepository<T> repo)
        {
            this.repo = repo;
        }
    }
}
