using System.Linq.Expressions;
using AutoFixture;
using Data.Interfaces;
using Data.Models;
using FluentAssertions;
using Moq;

namespace Service.Tests
{
    public class CustomerServiceTests
    {
        [Fact]
        public void ShouldGetAll()
        {
            var mock = new Mock<IRepository<Customer>>();

            var fixture = new Fixture();

            mock.Setup(x => x.GetAll()).Returns(fixture.CreateMany<Customer>().AsQueryable());
            
            var sut = new CustomerService(mock.Object);

            var result = sut.GetAll();

            result.Should().NotBeNullOrEmpty();
        }

        [Fact]
        public async void ShouldGetAllAsync()
        {
            var mock = new Mock<IRepository<Customer>>();

            var fixture = new Fixture();

            mock.Setup(x => x.GetAllAsync())
                .Returns(Task.Run(() => fixture.CreateMany<Customer>()));

            var sut = new CustomerService(mock.Object);

            var result = await sut.GetAllAsync();

            result.Should().NotBeNullOrEmpty();
        }

        [Fact]
        public void ShouldAdd()
        {
            var mock = new Mock<IRepository<Customer>>();

            var fixture = new Fixture();

            var customer = fixture.Create<Customer>();

            mock.Setup(x => x.Add(It.IsAny<Customer>())).Returns(customer);

            var sut = new CustomerService(mock.Object);

            var result = sut.Add(customer);

            result.Should().NotBeNull();
        }

        [Fact]
        public async void ShouldAddAsync()
        {
            var mock = new Mock<IRepository<Customer>>();

            var fixture = new Fixture();

            var customer = fixture.Create<Customer>();

            mock.Setup(x => x.AddAsync(It.IsAny<Customer>())).Returns(Task.Run(() => customer));

            var sut = new CustomerService(mock.Object);

            var result = await sut.AddAsync(customer);

            result.Should().NotBeNull();
        }

        [Fact]
        public void ShouldUpdate()
        {
            var mock = new Mock<IRepository<Customer>>();

            var fixture = new Fixture();

            var customer = fixture.Create<Customer>();

            mock.Setup(x => x.Update(It.IsAny<Customer>(), It.IsAny<object>())).Returns(customer);

            var sut = new CustomerService(mock.Object);

            var result = sut.Update(customer, 123);

            result.Should().NotBeNull();
        }

        [Fact]
        public async void ShouldUpdateAsync()
        {
            var mock = new Mock<IRepository<Customer>>();

            var fixture = new Fixture();

            var customer = fixture.Create<Customer>();

            mock.Setup(x => x.UpdateAsync(It.IsAny<Customer>(), It.IsAny<object>()))
                .Returns(Task.Run(() => customer));

            var sut = new CustomerService(mock.Object);

            var result = await sut.UpdateAsync(customer, 123);

            result.Should().NotBeNull();
        }

        [Fact]
        public void ShouldDeleteUsingObject()
        {
            var mock = new Mock<IRepository<Customer>>();

            var fixture = new Fixture();

            var customer = fixture.Create<Customer>();

            mock.Setup(x => x.Remove(It.IsAny<Customer>()));

            var sut = new CustomerService(mock.Object);

            sut.Remove(customer);
        }

        [Fact]
        public void ShouldDeleteUsingId()
        {
            var mock = new Mock<IRepository<Customer>>();

            var fixture = new Fixture();

            var customer = fixture.Create<Customer>();

            mock.Setup(x => x.Find(It.IsAny<Expression<Func<Customer, bool>>>())).Returns(customer);

            mock.Setup(x => x.Remove(It.IsAny<Customer>()));

            var sut = new CustomerService(mock.Object);

            sut.Remove("test");
        }

        [Fact]
        public async void ShouldDeleteUsingObjectAsync()
        {
            var mock = new Mock<IRepository<Customer>>();

            var fixture = new Fixture();

            var customer = fixture.Create<Customer>();

            mock.Setup(x => x.RemoveAsync(It.IsAny<Customer>()));

            var sut = new CustomerService(mock.Object);
            
            await sut.RemoveAsync(customer);
        }

        [Fact]
        public async void ShouldDeleteUsingIdAsync()
        {
            var mock = new Mock<IRepository<Customer>>();

            var fixture = new Fixture();

            var customer = fixture.Create<Customer>();

            mock.Setup(x => x.FindAsync(It.IsAny<Expression<Func<Customer, bool>>>())).Returns(Task.Run(() => customer));

            mock.Setup(x => x.RemoveAsync(It.IsAny<Customer>()));

            var sut = new CustomerService(mock.Object);

            await sut.RemoveAsync("test");
        }
    }
}