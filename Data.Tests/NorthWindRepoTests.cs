using Data.Contexts;
using Data.Implementations;
using Data.Models;
using MockQueryable.Moq;
using Moq;
using Shouldly;

namespace Data.Tests
{
    public class NorthWindRepoTests
    {
        [Fact]
        public void ShouldGetAll()
        {
            var mock = TestDataHelper.GetFakeCustomer().Generate(10).BuildMock().BuildMockDbSet();

            var mockContext = new Mock<NorthwindContext>();

            mockContext.Setup(x => x.Customers).Returns(mock.Object);

            mockContext.Setup(x => x.Set<Customer>()).Returns(mock.Object);

            var sut = new CustomerRepository(mockContext.Object);

            var customers = sut.GetAll().ToList();

            customers.ShouldNotBeNull();

            customers.ShouldNotBeEmpty();

            customers.Count().ShouldBe(10);
        }

        [Fact]
        public async void ShouldGetAllAsync()
        {
            var mock = TestDataHelper.GetFakeCustomer().Generate(10).BuildMock().BuildMockDbSet();
            var mockContext = new Mock<NorthwindContext>();

            mockContext.Setup(x => x.Customers).Returns(mock.Object);
            mockContext.Setup(x => x.Set<Customer>()).Returns(mock.Object);

            var sut = new CustomerRepository(mockContext.Object);

            var customers = await sut.GetAllAsync();

            customers.Count().ShouldBe(10);
        }

        [Fact]
        public void ShouldGetById()
        {
            var mock = TestDataHelper.GetFakeCustomer().Generate(1).BuildMock().BuildMockDbSet();
            mock.Setup(x => x.Find(It.IsAny<int>())).Returns(TestDataHelper.GetFakeCustomer().Generate(1)[0]);
            var mockContext = new Mock<NorthwindContext>();

            mockContext.Setup(x => x.Set<Customer>()).Returns(mock.Object);

            var sut = new CustomerRepository(mockContext.Object);

            var customer = sut.Get(1);

            customer.ShouldNotBeNull();
        }

        [Fact]
        public async void ShouldGetAsync()
        {
            var mock = TestDataHelper.GetFakeCustomer().Generate(1).BuildMock().BuildMockDbSet();
            mock.Setup(x => x.FindAsync(0)).ReturnsAsync(TestDataHelper.GetFakeCustomer().Generate(1)[0]);
            var mockContext = new Mock<NorthwindContext>();
            mockContext.Setup(x => x.Set<Customer>()).Returns(mock.Object);

            var sut = new CustomerRepository(mockContext.Object);

            var products = await sut.GetAsync(0);

            products.ShouldNotBeNull();
        }

        [Fact]
        public void ShouldAdd()
        {
            var fakeCustomer = TestDataHelper.GetFakeCustomer().Generate(1)[0];

            var mock = TestDataHelper.GetFakeCustomer().Generate(1).BuildMock().BuildMockDbSet();

            var mockContext = new Mock<NorthwindContext>();

            mockContext.Setup(x => x.Set<Customer>()).Returns(mock.Object);

            var sut = new CustomerRepository(mockContext.Object);

            var result = sut.Add(fakeCustomer);

            result.ShouldNotBeNull();
        }

        [Fact]
        public void ShouldFindAll()
        {
            var mock = TestDataHelper.GetFakeCustomer().Generate(5).BuildMock().BuildMockDbSet();

            var mockContext = new Mock<NorthwindContext>();

            mockContext.Setup(x => x.Set<Customer>()).Returns(mock.Object);

            var sut = new CustomerRepository(mockContext.Object);

            var result = sut.FindAll(x => x.CustomerId == "1");

            result.ShouldNotBeNull();
        }
    }
}
