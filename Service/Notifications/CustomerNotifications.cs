using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Runtime.CompilerServices;
using System.Text;
using System.Threading.Tasks;
using Data.Models;
using MediatR;

namespace Service.Notifications
{
    public record CustomerAddedNotification(Customer customer) : INotification;

    public class CustomerNotifications
    {
        
    }

    public class TeamsNotificationHandler : INotificationHandler<CustomerAddedNotification>
    {
        public async Task Handle(CustomerAddedNotification notification, CancellationToken cancellationToken)
        {
            // Send notification to MS Teams that a Customer was added.
            await Task.CompletedTask;
        }
    }

    public class EmailNotificationHandler : INotificationHandler<CustomerAddedNotification>
    {
        public async Task Handle(CustomerAddedNotification notification, CancellationToken cancellationToken)
        {
            // Send an email with added Customer ID
            Debug.WriteLine($"Customer added: {notification.customer.CustomerId}");
            await Task.CompletedTask;
        }
    }
}
