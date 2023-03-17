using RiskFirst.Hateoas;

namespace CodeAssessment.React
{
    public class ApiRootLinkRequirement : ILinksRequirement
    {
        public ApiRootLinkRequirement()
        {
        }
        public string Id { get; set; } = "root";
    }

    public class ApiRootLinkHandler : LinksHandler<ApiRootLinkRequirement>
    {
        protected override Task HandleRequirementAsync(LinksHandlerContext context, ApiRootLinkRequirement requirement)
        {
            var route = context.RouteMap.GetRoute("ApiRoot"); // Assumes your API has a named route "ApiRoot".
            context.Links.Add(new LinkSpec(requirement.Id, route));
            context.Handled(requirement);
            return Task.CompletedTask;
        }
    }
}
