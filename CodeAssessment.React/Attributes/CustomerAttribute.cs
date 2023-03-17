using Microsoft.AspNetCore.Mvc.Abstractions;
using Microsoft.AspNetCore.Mvc.ActionConstraints;
using Microsoft.Extensions.Primitives;

namespace CodeAssessment.React.Attributes
{
    [AttributeUsage(AttributeTargets.Method, AllowMultiple = true)]
    public class CheckPaginationAttribute : ActionMethodSelectorAttribute
    {
        public string QueryStingName { get; set; }

        public bool CanPass { get; set; }

        public CheckPaginationAttribute(string qName, bool canPass)
        {
            this.QueryStingName = qName;
            this.CanPass = canPass;
        }

        public override bool IsValidForRequest(RouteContext routeContext, ActionDescriptor action)
        {
            StringValues value;

            routeContext.HttpContext.Request.Query.TryGetValue(this.QueryStingName, out value);

            if (this.QueryStingName == "" && this.CanPass)
            {
                return true;
            }
            else
            {
                if (this.CanPass)
                {
                    return !StringValues.IsNullOrEmpty(value);
                }

                return StringValues.IsNullOrEmpty(value);
            }
        }
    }
}
