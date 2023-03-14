using MediatR;
using Microsoft.Extensions.Logging;

namespace Service.Behaviors
{
    public class LoggingBehavior<TRequest, TResponse> : IPipelineBehavior<TRequest, TResponse>
    {
        private readonly ILogger<LoggingBehavior<TRequest, TResponse>> logger;

        public LoggingBehavior(ILogger<LoggingBehavior<TRequest, TResponse>> logger)
        {
            this.logger = logger;
        }

        public async Task<TResponse> Handle(TRequest request, RequestHandlerDelegate<TResponse> next, CancellationToken cancellationToken)
        {
            this.logger.LogInformation($"Handling {typeof(TRequest).Name}");

            var response = await next();

            this.logger.LogInformation($"Handled {typeof(TRequest).Name}");

            return response;
        }
    }
}
