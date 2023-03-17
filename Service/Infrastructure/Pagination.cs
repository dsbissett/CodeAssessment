namespace Service.Infrastructure
{
    public class Pagination
    {
        const int maxPageSize = 50;

        public int PageNumber { get; set; } = 1;
       
        private int pageSize = 10;
        
        public int PageSize
        {
            get => this.pageSize;
            set => this.pageSize = (value > maxPageSize) ? maxPageSize : value;
        }
    }
}
