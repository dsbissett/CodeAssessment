using Microsoft.EntityFrameworkCore;
using RiskFirst.Hateoas.Models;

namespace Service.Infrastructure;

public class PagedContainer<T> : PagedItemsLinkContainer<T>
{
    public PagedContainer(List<T> items, int pageCount, int pageNumber, int pageSize)
    {
        this.Items = items;
        this.PageCount = pageCount;
        this.PageNumber = pageNumber;
        this.PageSize = pageSize;
    }

    public static PagedContainer<T> ToPagedContainer(IQueryable<T> source, int pageNumber, int pageSize)
    {
        var count = (int)Math.Ceiling(source.Count() / (double)pageSize);
        var items = source.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToList();
        return new PagedContainer<T>(items, count, pageNumber, pageSize);
    }

    public static async Task<PagedContainer<T>> ToPagedContainerAsync(IQueryable<T> source, int pageNumber, int pageSize)
    {
        var preCount = await source.CountAsync();
        var count = (int)Math.Ceiling(preCount / (double)pageSize);
        var query = pageNumber <= 0 ? 0 : pageNumber * pageSize;
        var items = await source.Skip(query).Take(pageSize).ToListAsync();
        return new PagedContainer<T>(items, count, pageNumber, pageSize);
    }
}

public partial class PagedList<T> : List<T>
{
    public int PageSize { get; set; }

    public int PageNumber { get; set; }

    public int PageCount { get; set; }

    public int TotalPages { get; set; }

    public bool HasPrevious => this.PageNumber > 1;

    public bool HasNext => this.PageNumber < this.PageCount;

    public PagedList(List<T> items, int count, int pageNumber, int pageSize)
    {
        this.PageCount = (int)Math.Ceiling(count / (double)pageSize); ;
        this.PageSize = pageSize;
        this.PageNumber = pageNumber;
        this.TotalPages = count;
        this.AddRange(items);
    }
    public static PagedList<T> ToPagedList(IQueryable<T> source, int pageNumber, int pageSize)
    {
        var count = source.Count();
        var items = source.Skip((pageNumber - 1) * pageSize).Take(pageSize).ToList();
        return new PagedList<T>(items, count, pageNumber, pageSize);
    }

    public static async Task<PagedList<T>> ToPagedListAsync(IQueryable<T> source, int pageNumber, int pageSize)
    {
        var count = await source.CountAsync();
        var query = pageNumber <= 0 ? 0 : (pageNumber - 1) * pageSize;
        var items = await source.Skip(query).Take(pageSize).ToListAsync();
        return new PagedList<T>(items, count, pageNumber, pageSize);
    }

    public void AddLink(string id, Link link)
    {
    }

    public Dictionary<string, Link> Links { get; set; }
}